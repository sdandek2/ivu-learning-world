/**
 * Learning Studio — a lesson as a guided journey:
 *   Learn → Story → Play → Think & Talk → Make → Check → Celebrate
 * Each step feeds a different kind of mastery evidence.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { loadLesson, type LessonContext } from '../../curriculum/loader.ts';
import { useStore } from '../../state/store.tsx';
import { navigate } from '../../lib/router.ts';
import { ItemPlayer } from '../../ui/ItemPlayer.tsx';
import { Buddy } from '../../ui/WorldArt.tsx';
import { ErrorBox, Loading, SpeakButton, StageDots, Stars, TopBar } from '../../ui/common.tsx';
import { worldById } from './Explore.tsx';
import { skillIdOf, isUnlocked } from '../../engine/adaptive.ts';
import { nextStepHint } from '../../engine/mastery.ts';
import type { ItemResult, Level, MasteryStage } from '../../engine/types.ts';
import type { ContextNote, Item } from '../../curriculum/schema.ts';
import { sounds } from '../../lib/sound.ts';
import { cx, shuffle } from '../../lib/util.ts';
import { stopSpeaking } from '../../lib/speech.ts';

const STEPS = [
  { id: 'learn', label: 'Learn', icon: '💡' },
  { id: 'story', label: 'Story', icon: '📖' },
  { id: 'play', label: 'Play', icon: '🎮' },
  { id: 'think', label: 'Think & Talk', icon: '💬' },
  { id: 'make', label: 'Make', icon: '🛠️' },
  { id: 'check', label: 'Check', icon: '✅' },
  { id: 'done', label: 'Yay!', icon: '🎉' },
] as const;
type StepId = (typeof STEPS)[number]['id'];

export const CONTEXT_LABEL: Record<ContextNote['kind'], { label: string; icon: string }> = {
  evidence: { label: 'Historical evidence', icon: '🏺' },
  science: { label: 'Science', icon: '🔬' },
  tradition: { label: 'Traditional story', icon: '📜' },
  belief: { label: 'Religious belief', icon: '🪔' },
  interpretation: { label: 'Interpretation', icon: '🤔' },
};

export function ContextNotes({ notes }: { notes: ContextNote[] }) {
  if (!notes.length) return null;
  return (
    <div className="context">
      {notes.map((n, i) => (
        <div key={i} className={`context__note context__note--${n.kind}`}>
          <span className="context__label">{CONTEXT_LABEL[n.kind].icon} {CONTEXT_LABEL[n.kind].label}</span>
          <p>{n.text}</p>
        </div>
      ))}
    </div>
  );
}

export function useLesson(lessonId: string) {
  const [ctx, setCtx] = useState<LessonContext | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let live = true;
    setCtx(null); setError(null);
    loadLesson(lessonId).then((c) => live && setCtx(c), (e) => live && setError(String(e.message ?? e)));
    return () => { live = false; };
  }, [lessonId]);
  return { ctx, error };
}

export function LessonStudio({ lessonId }: { lessonId: string }) {
  const store = useStore();
  const { ctx, error } = useLesson(lessonId);
  const [step, setStep] = useState<StepId>('learn');
  const started = useRef(Date.now());
  const introduced = useRef<string | null>(null);

  useEffect(() => { setStep('learn'); started.current = Date.now(); }, [lessonId]);
  useEffect(() => {
    if (ctx && introduced.current !== lessonId) { introduced.current = lessonId; store.introduce(lessonId); }
  }, [ctx, lessonId, store]);
  useEffect(() => () => stopSpeaking(), [step]);

  if (error) return <ErrorBox error={error} />;
  if (!ctx || !store.index) return <Loading what="Opening the lesson" />;
  const { lesson, unit, subject, siblings, index } = ctx;
  const w = worldById(store.index.worlds, subject.worldId)!;
  const rec = store.skills[skillIdOf(lesson.id)];
  const stepIdx = STEPS.findIndex((s) => s.id === step);
  const go = (s: StepId) => { setStep(s); window.scrollTo({ top: 0, behavior: store.settings.reducedMotion ? 'auto' : 'smooth' }); };
  const next = () => go(STEPS[Math.min(stepIdx + 1, STEPS.length - 1)].id);
  const nextLesson = siblings[index + 1];
  const locked = !isUnlocked(lesson, store.skills);

  return (
    <div className="studio-lesson" style={{ ['--world' as string]: w.colors.land, ['--sky' as string]: w.colors.sky, ['--accent' as string]: w.colors.accent, ['--ink' as string]: w.colors.ink }}>
      <TopBar title={<span className="lesson-title">{lesson.title}</span>} back={`/subject/${subject.id}`} color={w.colors.land} />
      <nav className="steps" aria-label="Lesson steps">
        {STEPS.map((s, i) => (
          <button key={s.id} className={cx('step', s.id === step && 'is-active', i < stepIdx && 'is-done')} onClick={() => go(s.id)} aria-current={s.id === step ? 'step' : undefined}>
            <span className="step__icon" aria-hidden="true">{i < stepIdx ? '✓' : s.icon}</span><span className="step__label">{s.label}</span>
          </button>
        ))}
      </nav>
      {locked && step === 'learn' && <p className="notice">🔒 This lesson builds on “{lesson.prerequisites[0]}”. You can look around, but it's best to finish the earlier lesson first.</p>}

      <main className="lesson-body">
        {step === 'learn' && <LearnStep ctx={ctx} onNext={next} />}
        {step === 'story' && (
          <section className="card storycard">
            <h2>📖 {lesson.story.title}</h2>
            <SpeakButton text={`${lesson.story.title}. ${lesson.story.text}`} label="Read me the story" auto />
            <p className="storycard__text">{lesson.story.text}</p>
            <button className="btn btn--primary btn--big" onClick={next}>Let's play →</button>
          </section>
        )}
        {step === 'play' && <ItemsRun key="play" items={lesson.activities} mode="practice" onFinish={async (r) => { await store.practice(lesson.id, r); next(); }} />}
        {step === 'think' && <ThinkStep lessonId={lesson.id} thinking={lesson.thinking} speaking={lesson.speaking} onNext={next} />}
        {step === 'make' && <MakeStep lessonId={lesson.id} project={lesson.project} onNext={next} />}
        {step === 'check' && <ItemsRun key="check" items={lesson.assessment} mode="assess" onFinish={async (r) => {
          await store.assess(lesson.id, r, unit.revision.intervalsDays);
          await store.completeLesson(lesson.id, Math.round((Date.now() - started.current) / 1000));
          next();
        }} />}
        {step === 'done' && (
          <Celebrate
            stage={(rec?.stage ?? 0) as MasteryStage}
            hint={rec ? nextStepHint(rec) : ''}
            score={rec?.assessments.at(-1)?.score ?? 0}
            color={w.colors.land} accent={w.colors.accent}
            onNext={nextLesson ? () => navigate(`/lesson/${nextLesson.id}`) : () => navigate(`/subject/${subject.id}`)}
            nextLabel={nextLesson ? `Next: ${nextLesson.title}` : 'Back to the map'}
          />
        )}
      </main>
    </div>
  );
}

function LearnStep({ ctx, onNext }: { ctx: LessonContext; onNext: () => void }) {
  const { lesson } = ctx;
  const [page, setPage] = useState(0);
  const pages = lesson.explanation;
  const last = page >= pages.length - 1;
  return (
    <section className="card learncard">
      <div className="learncard__guide">
        <Buddy size={64} color="var(--world)" accent="var(--accent)" mood={last ? 'wow' : 'happy'} />
        <div className="bubble">
          <p className="bubble__text">{pages[page]}</p>
          <SpeakButton text={pages[page]} auto />
        </div>
      </div>
      <div className="dots" aria-label={`Part ${page + 1} of ${pages.length}`}>{pages.map((_, i) => <span key={i} className={cx('dot', i === page && 'is-on')} />)}</div>
      <div className="row">
        {page > 0 && <button className="btn" onClick={() => setPage(page - 1)}>← Back</button>}
        {!last && <button className="btn btn--primary btn--big" onClick={() => setPage(page + 1)}>Next →</button>}
      </div>
      {last && (
        <>
          <ContextNotes notes={lesson.context} />
          <h3 className="mini-title">New words</h3>
          <div className="vocab">
            {lesson.vocabulary.map((v) => (
              <div key={v.term} className="vocab__card">
                <strong>{v.term}</strong><span>{v.meaning}</span>
                <SpeakButton text={`${v.term}. ${v.meaning}`} small />
              </div>
            ))}
          </div>
          <h3 className="mini-title">For example</h3>
          <ul className="examples">{lesson.examples.map((x) => <li key={x}>{x} <SpeakButton text={x} small /></li>)}</ul>
          <details className="for-grownups">
            <summary>For grown-ups: goals & what to look for</summary>
            <p><strong>Goals:</strong></p><ul>{lesson.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
            <p><strong>Builds on:</strong> {lesson.prerequisites.join('; ')}</p>
            <p><strong>Mastery looks like:</strong></p><ul>{lesson.mastery.map((o) => <li key={o}>{o}</li>)}</ul>
          </details>
          <button className="btn btn--primary btn--big" onClick={onNext}>Story time →</button>
        </>
      )}
    </section>
  );
}

/** Runs a list of items one after another and reports all results. */
export function ItemsRun({ items, mode, onFinish, title }: { items: Item[]; mode: 'practice' | 'assess'; onFinish: (r: ItemResult[]) => void | Promise<void>; title?: string }) {
  const [i, setI] = useState(0);
  const [results, setResults] = useState<ItemResult[]>([]);
  const [busy, setBusy] = useState(false);
  const seed = useMemo(() => Math.floor(Math.random() * 1e6), []);
  const item = items[i];
  return (
    <section className={cx('card itemsrun', mode === 'assess' && 'itemsrun--check')}>
      <div className="itemsrun__head">
        <h2>{title ?? (mode === 'assess' ? '✅ Show what you know' : '🎮 Let\'s play')}</h2>
        <span className="itemsrun__count">{Math.min(i + 1, items.length)} / {items.length}</span>
      </div>
      <div className="progressbar"><span style={{ width: `${(i / items.length) * 100}%` }} /></div>
      {mode === 'assess' && i === 0 && <p className="itemsrun__note">Try these by yourself — no hints this time. It's okay to get some wrong; that's how we learn!</p>}
      {item && !busy && (
        <ItemPlayer key={item.id} item={item} allowHints={mode === 'practice'} seed={seed + i} onDone={async (r) => {
          const all = [...results, r];
          setResults(all);
          if (i + 1 < items.length) setI(i + 1);
          else { setBusy(true); await onFinish(all); }
        }} />
      )}
      {busy && <Loading what="Saving" />}
    </section>
  );
}

function LevelPicker({ onPick, labels }: { onPick: (l: Level) => void; labels: [string, string, string] }) {
  return (
    <div className="levels" role="group">
      <button className="level level--0" onClick={() => onPick(0)}><span aria-hidden="true">🌱</span>{labels[0]}</button>
      <button className="level level--1" onClick={() => onPick(1)}><span aria-hidden="true">🤝</span>{labels[1]}</button>
      <button className="level level--2" onClick={() => onPick(2)}><span aria-hidden="true">🌟</span>{labels[2]}</button>
    </div>
  );
}

function ThinkStep({ lessonId, thinking, speaking, onNext }: { lessonId: string; thinking: string[]; speaking: string[]; onNext: () => void }) {
  const { explain } = useStore();
  const [rated, setRated] = useState(false);
  return (
    <section className="card thinkcard">
      <h2>💬 Think about it</h2>
      <ul className="questions">{thinking.map((q) => <li key={q}><span>{q}</span><SpeakButton text={q} small /></li>)}</ul>
      <p className="hint-text">There are no wrong answers here — talk it over with a grown-up. Good thinkers say “because…”.</p>
      <h2>🗣️ Your turn to explain</h2>
      <ul className="questions questions--speak">{speaking.map((q) => <li key={q}><span>{q}</span><SpeakButton text={q} small /></li>)}</ul>
      {!rated ? (
        <>
          <p className="grownup-ask">Grown-up: how did the explaining go?</p>
          <LevelPicker labels={['Not yet', 'With help', 'All by myself']} onPick={async (l) => { await explain(lessonId, l); setRated(true); }} />
          <button className="btn btn--ghost" onClick={onNext}>Skip for now</button>
        </>
      ) : (
        <div className="row"><p className="saved">Saved! 💛</p><button className="btn btn--primary btn--big" onClick={onNext}>Let's make something →</button></div>
      )}
    </section>
  );
}

function MakeStep({ lessonId, project, onNext }: { lessonId: string; project: LessonContext['lesson']['project']; onNext: () => void }) {
  const { apply } = useStore();
  const [rated, setRated] = useState(false);
  return (
    <section className="card makecard">
      <h2>{project.kind === 'experiment' ? '🧪 Experiment' : '🛠️ Project'}: {project.title}</h2>
      <SpeakButton text={`${project.title}. You will need: ${project.materials.join(', ')}. ${project.steps.map((s, i) => `Step ${i + 1}: ${s}`).join('. ')}`} label="Read me the steps" />
      <div className="makecard__cols">
        <div><h3 className="mini-title">You need</h3><ul className="materials">{project.materials.map((m) => <li key={m}>{m}</li>)}</ul></div>
        <div><h3 className="mini-title">Steps</h3><ol className="steps-list">{project.steps.map((s) => <li key={s}>{s}</li>)}</ol></div>
      </div>
      {project.safety && <p className="safety">⚠️ Safety: {project.safety}</p>}
      {!rated ? (
        <>
          <p className="grownup-ask">Did you make it?</p>
          <LevelPicker labels={['Not yet', 'We did it together', 'I did it myself']} onPick={async (l) => { await apply(lessonId, l); setRated(true); }} />
          <button className="btn btn--ghost" onClick={onNext}>Do it later</button>
        </>
      ) : (
        <div className="row"><p className="saved">Saved! 🛠️</p><button className="btn btn--primary btn--big" onClick={onNext}>Show what I know →</button></div>
      )}
    </section>
  );
}

function Celebrate({ stage, hint, score, onNext, nextLabel, color, accent }: { stage: MasteryStage; hint: string; score: number; onNext: () => void; nextLabel: string; color: string; accent: string }) {
  const { settings } = useStore();
  useEffect(() => { if (settings.sounds) sounds.celebrate(); }, [settings.sounds]);
  const stars = score >= 0.99 ? 3 : score >= 0.66 ? 2 : 1;
  const confetti = useMemo(() => shuffle(['🎉', '⭐', '🌟', '✨', '🎈', '💫', '🎊', '⭐']), []);
  return (
    <section className="card celebrate">
      {!settings.reducedMotion && <div className="confetti" aria-hidden="true">{confetti.map((c, i) => <span key={i} style={{ left: `${8 + i * 11}%`, animationDelay: `${i * 0.12}s` }}>{c}</span>)}</div>}
      <Buddy size={110} color={color} accent={accent} mood="wow" className="bob" />
      <h2 className="celebrate__title">You did it, {settings.learnerName}!</h2>
      <Stars n={stars} />
      <div className="celebrate__stage"><StageDots stage={stage} /></div>
      <p className="celebrate__hint">{hint}</p>
      <SpeakButton text={`You did it, ${settings.learnerName}! You earned ${stars} stars.`} auto />
      <button className="btn btn--primary btn--big" onClick={onNext}>{nextLabel} →</button>
    </section>
  );
}

/** Spaced revision: a short mixed check drawn from the lesson's activities and assessment. */
export function RevisePage({ lessonId }: { lessonId: string }) {
  const store = useStore();
  const { ctx, error } = useLesson(lessonId);
  const [done, setDone] = useState<number | null>(null);
  const items = useMemo(() => (ctx ? shuffle([...ctx.lesson.assessment, ...ctx.lesson.activities]).slice(0, 4) : []), [ctx]);
  if (error) return <ErrorBox error={error} />;
  if (!ctx || !store.index) return <Loading />;
  const w = worldById(store.index.worlds, ctx.subject.worldId)!;
  return (
    <div className="studio-lesson" style={{ ['--world' as string]: w.colors.land, ['--sky' as string]: w.colors.sky, ['--accent' as string]: w.colors.accent, ['--ink' as string]: w.colors.ink }}>
      <TopBar title={<>🧠 Remember: {ctx.lesson.title}</>} back="/" color={w.colors.land} />
      <main className="lesson-body">
        {done === null ? (
          <ItemsRun items={items} mode="assess" title="🧠 Do you remember?" onFinish={async (r) => {
            await store.revise(lessonId, r, ctx.unit.revision.intervalsDays);
            setDone(r.filter((x) => x.correct && x.wrongTries === 0).length / r.length);
          }} />
        ) : (
          <section className="card celebrate">
            <Buddy size={96} color={w.colors.land} accent={w.colors.accent} mood={done >= 0.8 ? 'wow' : 'think'} />
            <h2 className="celebrate__title">{done >= 0.8 ? 'Super memory!' : done >= 0.6 ? 'Nearly there!' : "Let's learn it again"}</h2>
            <p>{done >= 0.8 ? "Your brain kept it safe. We'll check again in a while." : done >= 0.6 ? "We'll practise this again soon." : 'Going through the lesson again will help it stick.'}</p>
            <div className="row">
              {done < 0.8 && <button className="btn" onClick={() => navigate(`/lesson/${lessonId}`)}>Open the lesson</button>}
              <button className="btn btn--primary btn--big" onClick={() => navigate('/')}>Back home →</button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
