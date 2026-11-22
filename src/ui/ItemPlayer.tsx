/**
 * Plays one interactive item (choice, true/false, order, match, count).
 *
 * Adaptive scaffolding: a wrong answer gets gentle feedback and another try; the "hint"
 * removes a wrong option / fixes the first step / turns on touch-counting. After two wrong
 * tries the answer is shown with its explanation, so the child always leaves knowing more.
 * Hints and retries are recorded so mastery can measure independence, not just accuracy.
 */
import { useMemo, useState } from 'react';
import type { Item } from '../curriculum/schema.ts';
import type { ItemResult } from '../engine/types.ts';
import { shuffle, shuffleNotIdentity, cx } from '../lib/util.ts';
import { sounds } from '../lib/sound.ts';
import { useStore } from '../state/store.tsx';
import { SpeakButton, useBuddyVoice } from './common.tsx';
import { BUDDY_LINES, pick } from '../lib/buddyLines.ts';
import { selectTeachingContext } from './item-feedback.ts';

const EMOJI = /\p{Extended_Pictographic}(️|‍\p{Extended_Pictographic})*/gu;
const MAX_WRONG = 2;

export function ItemPlayer({ item, onDone, allowHints = true, seed, teachingContext = [] }: { item: Item; onDone: (r: ItemResult) => void; allowHints?: boolean; seed?: number; teachingContext?: string[] }) {
  const { settings } = useStore();
  const [wrong, setWrong] = useState(0);
  const [usedHint, setUsedHint] = useState(false);
  const [finished, setFinished] = useState<null | boolean>(null);
  const [shake, setShake] = useState(0);
  const play = (f: () => void) => { if (settings.sounds) f(); };
  const say = useBuddyVoice();

  const fail = () => {
    const w = wrong + 1;
    setWrong(w);
    setShake((s) => s + 1);
    play(sounds.tryAgain);
    if (w >= MAX_WRONG) { setFinished(false); say(pick(BUDDY_LINES.showAnswer)); }
    else say(pick(BUDDY_LINES.tryAgain));
  };
  const succeed = () => {
    setFinished(true); play(sounds.correct);
    say(pick(wrong === 0 && !usedHint ? BUDDY_LINES.praise : BUDDY_LINES.gotIt));
  };
  const hint = () => { setUsedHint(true); play(sounds.tap); };

  const result: ItemResult = { itemId: item.id, correct: !!finished, wrongTries: wrong, usedHint };
  const lessonFeedback = useMemo(() => selectTeachingContext(item, teachingContext), [item, teachingContext]);

  return (
    <div className="item" data-kind={item.kind}>
      <div className="item__prompt">
        <div className="item__prompt-copy">
          <span className="item__kind">{({ choice: 'PICK AN ANSWER', truefalse: 'TRUE OR FALSE', order: 'PUT IN ORDER', match: 'FIND THE PAIRS', count: 'COUNT TOGETHER' })[item.kind]}</span>
          <p className="item__text">{item.kind === 'count' && (item.prompt.match(EMOJI)?.length ?? 0) > 1 ? item.prompt.replace(EMOJI, '').trim() : item.prompt}</p>
        </div>
        <SpeakButton text={item.prompt} auto small />
      </div>
      <div key={shake} className={cx('item__body', shake > 0 && finished === null && 'shake')}>
        {item.kind === 'choice' && <Choice item={item} hinted={usedHint} disabled={finished !== null} onRight={succeed} onWrong={fail} seed={seed} />}
        {item.kind === 'truefalse' && <TrueFalse item={item} disabled={finished !== null} onRight={succeed} onWrong={() => { setWrong(1); setFinished(false); play(sounds.tryAgain); say(pick(BUDDY_LINES.showAnswer)); }} />}
        {item.kind === 'order' && <Order item={item} hinted={usedHint} disabled={finished !== null} onRight={succeed} onWrong={fail} seed={seed} />}
        {item.kind === 'match' && <Match item={item} disabled={finished !== null} onComplete={(mistakes) => { setWrong(mistakes); setFinished(mistakes <= 1); play(mistakes <= 1 ? sounds.correct : sounds.tryAgain); say(pick(mistakes === 0 ? BUDDY_LINES.praise : mistakes <= 1 ? BUDDY_LINES.gotIt : BUDDY_LINES.showAnswer)); }} seed={seed} />}
        {item.kind === 'count' && <Count item={item} hinted={usedHint} disabled={finished !== null} onRight={succeed} onWrong={fail} />}
      </div>

      {finished === null && wrong > 0 && <p className="item__nudge" role="status">Not quite — try again! {allowHints && !usedHint && item.kind !== 'truefalse' && item.kind !== 'match' ? 'You can ask for a hint.' : ''}</p>}
      {finished === null && allowHints && !usedHint && (item.kind === 'choice' || item.kind === 'order' || item.kind === 'count') && (
        <button className="btn btn--ghost item__hint" onClick={hint}>💡 Ask Buddy for a hint</button>
      )}

      {finished !== null && (
        <div className={cx('item__feedback', finished ? 'is-right' : 'is-shown')} role="status">
          <strong>{finished ? (wrong === 0 && !usedHint ? 'Brilliant! 🌟' : 'You got it! 👍') : "Let's look together 👀"}</strong>
          {!finished && <p>The answer is: <b>{answerText(item)}</b></p>}
          {item.why && <p>{item.why}</p>}
          {!finished && !item.why && lessonFeedback && <p className="item__teaching"><strong>Remember:</strong> {lessonFeedback}</p>}
          <button className="btn btn--primary" autoFocus onClick={() => onDone(result)}>Next →</button>
        </div>
      )}
    </div>
  );
}

export function answerText(item: Item): string {
  switch (item.kind) {
    case 'choice': return item.options[item.answer];
    case 'truefalse': return item.answer ? 'True' : 'False';
    case 'order': return item.items.join(' → ');
    case 'match': return item.pairs.map(([a, b]) => `${a} = ${b}`).join(', ');
    case 'count': return String(item.answer);
  }
}

function Choice({ item, hinted, disabled, onRight, onWrong, seed }: { item: Extract<Item, { kind: 'choice' }>; hinted: boolean; disabled: boolean; onRight: () => void; onWrong: () => void; seed?: number }) {
  const order = useMemo(() => shuffle(item.options.map((_, i) => i), seed), [item, seed]);
  const [tried, setTried] = useState<number[]>([]);
  const removed = useMemo(() => {
    if (!hinted) return -1;
    const wrongs = order.filter((i) => i !== item.answer && !tried.includes(i));
    return wrongs.length > 1 ? wrongs[0] : -1;
  }, [hinted, order, item.answer, tried]);
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div className={cx('choices', item.options.length > 3 && 'choices--many')}>
      {order.map((i) => (
        <button key={i} className={cx('choice', tried.includes(i) && 'is-wrong', picked === i && i === item.answer && 'is-right', disabled && i === item.answer && 'is-answer')}
          disabled={disabled || tried.includes(i) || removed === i}
          style={removed === i ? { visibility: 'hidden' } : undefined}
          onClick={() => { setPicked(i); if (i === item.answer) onRight(); else { setTried((t) => [...t, i]); onWrong(); } }}>
          {item.options[i]}
        </button>
      ))}
    </div>
  );
}

function TrueFalse({ item, disabled, onRight, onWrong }: { item: Extract<Item, { kind: 'truefalse' }>; disabled: boolean; onRight: () => void; onWrong: () => void }) {
  const [picked, setPicked] = useState<boolean | null>(null);
  return (
    <div className="choices choices--tf">
      {[true, false].map((v) => (
        <button key={String(v)} className={cx('choice', 'choice--tf', picked === v && (v === item.answer ? 'is-right' : 'is-wrong'), disabled && v === item.answer && 'is-answer')} disabled={disabled}
          onClick={() => { setPicked(v); if (v === item.answer) onRight(); else onWrong(); }}>
          <span className="choice__big" aria-hidden="true">{v ? '👍' : '👎'}</span>{v ? 'True' : 'False'}
        </button>
      ))}
    </div>
  );
}

function Order({ item, hinted, disabled, onRight, onWrong, seed }: { item: Extract<Item, { kind: 'order' }>; hinted: boolean; disabled: boolean; onRight: () => void; onWrong: () => void; seed?: number }) {
  const pool = useMemo(() => shuffleNotIdentity(item.items, seed), [item, seed]);
  const [seq, setSeq] = useState<string[]>([]);
  const fixed = hinted ? 1 : 0;
  const current = hinted && seq[0] !== item.items[0] ? [item.items[0], ...seq.filter((s) => s !== item.items[0])] : seq;
  const remaining = pool.filter((p) => !current.includes(p));
  const complete = current.length === item.items.length;
  return (
    <div className="order">
      <ol className="order__slots" aria-label="Your order">
        {item.items.map((_, i) => (
          <li key={i} className={cx('order__slot', current[i] && 'is-filled', i < fixed && 'is-fixed')}>
            {current[i] ? <button disabled={disabled || i < fixed} onClick={() => setSeq(current.filter((_, j) => j !== i))} aria-label={`Remove ${current[i]}`}>{current[i]}</button> : <span className="order__num">{i + 1}</span>}
          </li>
        ))}
      </ol>
      <div className="order__pool">
        {remaining.map((p) => <button key={p} className="tile" disabled={disabled} onClick={() => setSeq([...current, p])}>{p}</button>)}
      </div>
      {complete && !disabled && (
        <button className="btn btn--primary" onClick={() => {
          if (current.every((x, i) => x === item.items[i])) onRight();
          else { onWrong(); setSeq(hinted ? [item.items[0]] : []); }
        }}>Check my order ✓</button>
      )}
    </div>
  );
}

function Match({ item, disabled, onComplete, seed }: { item: Extract<Item, { kind: 'match' }>; disabled: boolean; onComplete: (mistakes: number) => void; seed?: number }) {
  const left = useMemo(() => shuffle(item.pairs.map((p) => p[0]), seed), [item, seed]);
  const right = useMemo(() => shuffle(item.pairs.map((p) => p[1]), (seed ?? 7) + 3), [item, seed]);
  const [sel, setSel] = useState<string | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [flash, setFlash] = useState<string | null>(null);
  const answerOf = (l: string) => item.pairs.find((p) => p[0] === l)![1];
  const pick = (r: string) => {
    if (!sel) return;
    if (answerOf(sel) === r) {
      const d = [...done, sel];
      setDone(d); setSel(null);
      if (d.length === item.pairs.length) onComplete(mistakes);
    } else {
      setMistakes((m) => m + 1); setFlash(r); setTimeout(() => setFlash(null), 500);
    }
  };
  const doneRight = done.map(answerOf);
  return (
    <div className="match">
      <div className="match__col">{left.map((l) => <button key={l} className={cx('tile', sel === l && 'is-selected', done.includes(l) && 'is-done')} disabled={disabled || done.includes(l)} onClick={() => setSel(l)} aria-pressed={sel === l}>{l}</button>)}</div>
      <div className="match__col">{right.map((r) => <button key={r} className={cx('tile', doneRight.includes(r) && 'is-done', flash === r && 'is-wrong')} disabled={disabled || doneRight.includes(r) || !sel} onClick={() => pick(r)}>{r}</button>)}</div>
      {!disabled && <p className="match__help">{sel ? `Now tap what goes with “${sel}”` : 'Tap one on the left, then its partner on the right.'}</p>}
    </div>
  );
}

function Count({ item, hinted, disabled, onRight, onWrong }: { item: Extract<Item, { kind: 'count' }>; hinted: boolean; disabled: boolean; onRight: () => void; onWrong: () => void }) {
  const things = useMemo(() => item.prompt.match(EMOJI) ?? [], [item.prompt]);
  const [touched, setTouched] = useState<number[]>([]);
  const max = Math.max(10, Math.min(20, item.answer + 4));
  const [tried, setTried] = useState<number[]>([]);
  return (
    <div className="count">
      {things.length > 0 && (
        <div className={cx('count__things', hinted && 'is-touchable')} aria-label={hinted ? 'Tap each one to count' : undefined}>
          {things.map((t, i) => (
            <button key={i} className={cx('count__thing', touched.includes(i) && 'is-touched')} disabled={!hinted || disabled}
              onClick={() => setTouched((x) => (x.includes(i) ? x : [...x, i]))}>
              <span aria-hidden="true">{t}</span>{touched.includes(i) && <span className="count__n">{touched.indexOf(i) + 1}</span>}
            </button>
          ))}
        </div>
      )}
      <div className="numpad" role="group" aria-label="Choose a number">
        {Array.from({ length: max + 1 }, (_, n) => (
          <button key={n} className={cx('numpad__key', tried.includes(n) && 'is-wrong', disabled && n === item.answer && 'is-answer')} disabled={disabled || tried.includes(n)}
            onClick={() => { if (n === item.answer) onRight(); else { setTried((t) => [...t, n]); onWrong(); } }}>{n}</button>
        ))}
      </div>
    </div>
  );
}
