import { useEffect, useMemo, useRef, useState } from 'react';
import { useStore } from '../../state/store.tsx';
import { navigate } from '../../lib/router.ts';
import { loadSubject } from '../../curriculum/loader.ts';
import type { Item } from '../../curriculum/schema.ts';
import type { Artwork, ItemResult, LogEntry } from '../../engine/types.ts';
import { ItemsRun } from './LessonStudio.tsx';
import { Buddy, WorldArt } from '../../ui/WorldArt.tsx';
import { Loading, SpeakButton, Stars, TopBar } from '../../ui/common.tsx';
import { placement, stageOfSkill } from '../../engine/adaptive.ts';
import { dueSkills } from '../../engine/revision.ts';
import { ACHIEVEMENTS, completedLessons, streakDays } from '../../engine/achievements.ts';
import { cx, relativeDay, shuffle, uid } from '../../lib/util.ts';
import * as db from '../../db/db.ts';
import { speak } from '../../lib/speech.ts';
import { worldOfSubject } from './Explore.tsx';
import { sounds } from '../../lib/sound.ts';

// ---------------- Play hub ----------------

/** A calm launch point for playful practice and open-ended creativity. */
export function PlayHub() {
  return (
    <div className="play-hub">
      <TopBar title="🎮 Play and create" back="/" color="#536B70" />
      <header className="play-hub__hero">
        <Buddy size={92} color="#536B70" accent="#F2D28B" mood="wow" />
        <div>
          <p className="play-hub__eyebrow">Your play space</p>
          <h1>What would you like to make today?</h1>
          <p>Try a friendly challenge, or let your imagination lead the way.</p>
        </div>
      </header>
      <main className="play-hub__choices">
        <section className="play-choice play-choice--challenge">
          <span className="play-choice__art" aria-hidden="true">🌈 🧩 ⭐</span>
          <p className="play-choice__eyebrow">Play and practise</p>
          <h2>Challenge Arena</h2>
          <p>Enjoy a short mix of questions from things you have already explored. Every try helps your brain grow.</p>
          <button className="btn btn--primary btn--big" onClick={() => navigate('/arena')}>Choose a challenge <span aria-hidden="true">→</span></button>
        </section>
        <section className="play-choice play-choice--create">
          <span className="play-choice__art" aria-hidden="true">🎨 📚 ✨</span>
          <p className="play-choice__eyebrow">Imagine and create</p>
          <h2>Creative Studio</h2>
          <p>Draw a picture, invent a story and keep your favourite creations in your own gallery.</p>
          <div className="play-choice__actions">
            <button className="btn btn--primary btn--big" onClick={() => navigate('/studio/draw')}>Start creating <span aria-hidden="true">→</span></button>
            <button className="play-choice__link" onClick={() => navigate('/studio/gallery')}>My gallery</button>
          </div>
        </section>
      </main>
    </div>
  );
}

// ---------------- Challenge Arena ----------------

type ArenaItem = Item & { lessonId: string };

export function Arena() {
  const store = useStore();
  const { index, settings, skills } = store;
  const [worldId, setWorldId] = useState<string | null>(null);
  const [items, setItems] = useState<ArenaItem[] | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [questionCount, setQuestionCount] = useState(8);
  const [loading, setLoading] = useState(false);

  const start = async (wid: string) => {
    if (!index) return;
    setWorldId(wid); setLoading(true); setResult(null);
    const worlds = wid === 'all' ? index.worlds : index.worlds.filter((w) => w.id === wid);
    const subjectIds = worlds.flatMap((w) => w.subjects.filter((s) => s.file).map((s) => s.id));
    const pickSubjects = wid === 'all' ? shuffle(subjectIds).slice(0, 6) : subjectIds;
    const subjects = await Promise.all(pickSubjects.map((id) => loadSubject(id).catch(() => null)));
    const pool: ArenaItem[] = [];
    for (const s of subjects) {
      if (!s) continue;
      const st = s.stages.find((x) => x.stage === placement(settings, s.id))!;
      const lessons = st.units.flatMap((u) => u.lessons);
      const seen = lessons.filter((l) => stageOfSkill(skills, l.id) > 0);
      for (const l of seen.length ? seen : lessons.slice(0, 1)) for (const it of [...l.activities, ...l.assessment]) pool.push({ ...it, lessonId: l.id });
    }
    const round = shuffle(pool).slice(0, 8);
    setItems(round);
    setQuestionCount(round.length);
    setLoading(false);
  };

  const finish = async (results: ItemResult[]) => {
    if (!items) return;
    const byLesson = new Map<string, ItemResult[]>();
    results.forEach((r) => { const l = items.find((x) => x.id === r.itemId)!.lessonId; byLesson.set(l, [...(byLesson.get(l) ?? []), r]); });
    for (const [l, rs] of byLesson) await store.practice(l, rs);
    const score = results.filter((r) => r.correct && r.wrongTries === 0).length / results.length;
    await store.addLog({ type: 'arena', score, detail: worldId ?? 'all' });
    setResult(score);
  };

  if (!index) return <Loading />;
  return (
    <div className="arena">
      <TopBar title="⚔️ Challenge Arena" back="/" color="#E0607E" />
      {!worldId && (
        <main className="arena__pick">
          <div className="arena__hero">
            <Buddy size={90} color="#E0607E" accent="#FFD166" mood="wow" className="bob" />
            <div><span className="arena__eyebrow">A MINI LEARNING QUEST</span><h1>Ready for a challenge?</h1><p>Play a short round from worlds you've explored. Every question is a chance to grow.</p></div>
            <SpeakButton text="Ready for a challenge? Choose a world or try a mix of all your adventures. Every question is a chance to grow." />
          </div>
          <button className="arena__all" onClick={() => start('all')}><span aria-hidden="true">🌈</span><span><strong>Surprise me!</strong><small>A little mix from across your worlds</small></span><b aria-hidden="true">→</b></button>
          <div className="arena__sectionhead"><h2>Choose your world</h2><p>Pick a place you have visited before.</p></div>
          <div className="arena__worlds">
            {index.worlds.map((w, i) => (
              <button key={w.id} className="arena__world" onClick={() => start(w.id)} style={{ ['--world' as string]: w.colors.land }}>
                <WorldArt world={w} className="arena__art" />
                <span className="arena__worldmeta"><strong>{w.title}</strong><small>{w.domain}</small></span>
                <span className="arena__worldnumber" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
        </main>
      )}
      {worldId && loading && <Loading what="Gathering questions" />}
      {worldId && !loading && items && result === null && (
        <main className="lesson-body">{items.length ? <ItemsRun items={items} mode="assess" title="⚔️ Challenge!" onFinish={finish} /> : <p className="card">No questions here yet — explore this world first!</p>}</main>
      )}
      {result !== null && (
        <main className="lesson-body">
          <section className="card celebrate">
            <Buddy size={100} color="#E0607E" accent="#FFD166" mood="wow" />
            <h2 className="celebrate__title">{Math.round(result * questionCount)} out of {questionCount} on the first try!</h2>
            <Stars n={result >= 0.99 ? 3 : result >= 0.6 ? 2 : 1} />
            <div className="row"><button className="btn" onClick={() => start(worldId!)}>Play again</button><button className="btn btn--primary btn--big" onClick={() => { setWorldId(null); setResult(null); }}>Pick another →</button></div>
          </section>
        </main>
      )}
    </div>
  );
}

// ---------------- Creative Studio ----------------

const COLORS = ['#1B1B2F', '#E94F64', '#F28C28', '#F4D03F', '#3BB273', '#2D7DD2', '#8E44AD', '#8B5A2B', '#FF8FA3', '#FFFFFF'];
const STAMPS = ['⭐', '🌸', '🐘', '🦋', '🌈', '☀️', '🏠', '🌳', '🐟', '🚀', '❤️', '🦚'];

export function CreativeStudio({ tab = 'draw' }: { tab?: string }) {
  return (
    <div className="creative">
      <TopBar title="🎨 Creative Studio" back="/" color="#E94F64" />
      <nav className="tabs" aria-label="Studio sections">
        {[['draw', '🖍️ Draw'], ['story', '📚 Story Maker'], ['gallery', '🖼️ My Gallery']].map(([id, label]) => (
          <button key={id} className={cx('tab', tab === id && 'is-active')} onClick={() => navigate(`/studio/${id}`)}>{label}</button>
        ))}
      </nav>
      {tab === 'draw' && <DrawingBoard />}
      {tab === 'story' && <StoryMaker />}
      {tab === 'gallery' && <Gallery />}
    </div>
  );
}

function DrawingBoard() {
  const { refreshArt, addLog, settings } = useStore();
  const canvas = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState(COLORS[1]);
  const [size, setSize] = useState(10);
  const [stamp, setStamp] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const history = useRef<ImageData[]>([]);
  const drawing = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const c = canvas.current!; const g = c.getContext('2d')!;
    g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
  }, []);
  const ctx = () => canvas.current!.getContext('2d')!;
  const pos = (e: React.PointerEvent) => { const r = canvas.current!.getBoundingClientRect(); return { x: ((e.clientX - r.left) / r.width) * canvas.current!.width, y: ((e.clientY - r.top) / r.height) * canvas.current!.height }; };
  const snapshot = () => { const c = canvas.current!; history.current = [...history.current.slice(-19), ctx().getImageData(0, 0, c.width, c.height)]; setSaved(false); };

  const down = (e: React.PointerEvent) => {
    snapshot();
    const p = pos(e);
    if (stamp) { const g = ctx(); g.font = `${size * 6}px serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(stamp, p.x, p.y); if (settings.sounds) sounds.tap(); return; }
    (e.target as Element).setPointerCapture(e.pointerId);
    drawing.current = p;
    const g = ctx(); g.beginPath(); g.fillStyle = color; g.arc(p.x, p.y, size / 2, 0, Math.PI * 2); g.fill();
  };
  const move = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    const p = pos(e); const g = ctx();
    g.strokeStyle = color; g.lineWidth = size; g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(drawing.current.x, drawing.current.y); g.lineTo(p.x, p.y); g.stroke();
    drawing.current = p;
  };
  const up = () => { drawing.current = null; };
  const undo = () => { const h = history.current.pop(); if (h) ctx().putImageData(h, 0, 0); };
  const clearAll = () => { snapshot(); const c = canvas.current!; const g = ctx(); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); };
  const save = async () => {
    const image = canvas.current!.toDataURL('image/webp', 0.85);
    const art: Artwork = { id: uid(), kind: 'drawing', title: `Drawing — ${new Date().toLocaleDateString()}`, createdAt: Date.now(), image };
    await db.put('art', art); await refreshArt(); await addLog({ type: 'art', detail: 'drawing' });
    setSaved(true); if (settings.sounds) sounds.celebrate();
  };

  return (
    <main className="draw">
      <div className="draw__tools" role="toolbar" aria-label="Drawing tools">
        <div className="swatches">{COLORS.map((c) => <button key={c} className={cx('swatch', !stamp && color === c && 'is-on')} style={{ background: c }} onClick={() => { setColor(c); setStamp(null); }} aria-label={c === '#FFFFFF' ? 'Eraser (white)' : `Colour ${c}`} />)}</div>
        <div className="sizes">{[4, 10, 22].map((s) => <button key={s} className={cx('size', size === s && 'is-on')} onClick={() => setSize(s)} aria-label={`Brush size ${s}`}><span style={{ width: s, height: s }} /></button>)}</div>
        <div className="stamps">{STAMPS.map((s) => <button key={s} className={cx('stampbtn', stamp === s && 'is-on')} onClick={() => setStamp(stamp === s ? null : s)} aria-label={`Stamp ${s}`}>{s}</button>)}</div>
        <div className="draw__actions"><button className="btn" onClick={undo}>↩️ Undo</button><button className="btn" onClick={clearAll}>🧽 Clear</button><button className="btn btn--primary" onClick={save}>{saved ? '✓ Saved' : '💾 Save'}</button></div>
      </div>
      <canvas ref={canvas} width={1000} height={700} className="draw__canvas" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up} aria-label="Drawing canvas" />
    </main>
  );
}

const STORY_PARTS = {
  hero: [['🐘', 'a gentle elephant named Gaja'], ['🦚', 'a proud peacock named Mayur'], ['🐒', 'a clever monkey named Chintu'], ['🤖', 'a curious robot named Bolt'], ['👧', 'a brave girl named Asha'], ['👦', 'a kind boy named Ivaan']],
  place: [['🌳', 'deep in a whispering forest'], ['🏔️', 'high up on a snowy mountain'], ['🌊', 'beside the sparkling sea'], ['🏙️', 'in a busy, noisy city'], ['🚀', 'on a tiny planet far away'], ['🏡', 'in a cosy village']],
  problem: [['🌧️', 'a huge storm washed away the bridge'], ['🔑', 'the key to the treasure box was lost'], ['😢', 'a little friend could not find their way home'], ['🌵', 'the well dried up and everyone was thirsty'], ['🎈', 'all the festival balloons floated away']],
  helper: [['🦉', 'a wise old owl'], ['🐢', 'a patient tortoise'], ['🐜', 'a team of tiny ants'], ['👵', 'a grandmother with a big idea'], ['🐬', 'a playful dolphin']],
  ending: [['🎉', 'Everyone celebrated together with songs and sweets.'], ['🤝', 'They became best friends for ever.'], ['💡', 'They learned that working together makes hard things easy.'], ['🌟', 'And that night, the stars seemed to twinkle just for them.']],
} as const;
type PartKey = keyof typeof STORY_PARTS;

function StoryMaker() {
  const { refreshArt, addLog, settings } = useStore();
  const [pick, setPick] = useState<Partial<Record<PartKey, number>>>({});
  const [saved, setSaved] = useState(false);
  const keys = Object.keys(STORY_PARTS) as PartKey[];
  const complete = keys.every((k) => pick[k] !== undefined);
  const story = useMemo(() => {
    if (!complete) return '';
    const p = (k: PartKey) => STORY_PARTS[k][pick[k]!][1];
    return `Once upon a time, ${p('place')}, there lived ${p('hero')}. One day, ${p('problem')}! Everyone was worried. But then ${p('helper')} came along. Together they thought hard, tried one idea, then another, and finally they fixed it. ${p('ending')}`;
  }, [pick, complete]);
  const save = async () => {
    const art: Artwork = { id: uid(), kind: 'story', title: `Story — ${new Date().toLocaleDateString()}`, createdAt: Date.now(), text: story };
    await db.put('art', art); await refreshArt(); await addLog({ type: 'art', detail: 'story' });
    setSaved(true);
  };
  const labels: Record<PartKey, string> = { hero: 'Who is the hero?', place: 'Where do they live?', problem: 'What goes wrong?', helper: 'Who helps?', ending: 'How does it end?' };
  return (
    <main className="storymaker">
      {keys.map((k) => (
        <section key={k} className="storymaker__row">
          <h2>{labels[k]} <SpeakButton text={labels[k]} small /></h2>
          <div className="storymaker__cards">
            {STORY_PARTS[k].map(([icon, text], i) => (
              <button key={i} className={cx('storypart', pick[k] === i && 'is-on')} onClick={() => { setPick({ ...pick, [k]: i }); setSaved(false); }} aria-pressed={pick[k] === i}>
                <span className="storypart__icon" aria-hidden="true">{icon}</span><span>{text}</span>
              </button>
            ))}
          </div>
        </section>
      ))}
      {complete && (
        <section className="card storycard">
          <h2>📖 Your story</h2>
          <p className="storycard__text">{story}</p>
          <div className="row">
            <button className="btn" onClick={() => speak(story, { rate: settings.speechRate, voiceURI: settings.voiceURI, recorded: settings.recordedVoice })}>🔊 Read it to me</button>
            <button className="btn btn--primary" onClick={save} disabled={saved}>{saved ? '✓ Saved to gallery' : '💾 Save my story'}</button>
          </div>
        </section>
      )}
    </main>
  );
}

function Gallery() {
  const { refreshArt } = useStore();
  const [art, setArt] = useState<Artwork[] | null>(null);
  const [open, setOpen] = useState<Artwork | null>(null);
  const load = () => db.getAll<Artwork>('art').then((a) => setArt(a.sort((x, y) => y.createdAt - x.createdAt)));
  useEffect(() => { load(); }, []);
  if (!art) return <Loading />;
  if (!art.length) return <main className="gallery-empty"><Buddy size={90} mood="think" /><p>Your gallery is empty. Draw a picture or make a story!</p></main>;
  return (
    <main className="gallery">
      {art.map((a) => (
        <button key={a.id} className="gallery__item" onClick={() => setOpen(a)}>
          {a.image ? <img src={a.image} alt={a.title} loading="lazy" /> : <span className="gallery__story">📚<span>{a.text?.slice(0, 80)}…</span></span>}
          <span className="gallery__title">{a.title}</span>
        </button>
      ))}
      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}>
          <div className="modal__card" onClick={(e) => e.stopPropagation()}>
            {open.image ? <img src={open.image} alt={open.title} /> : <p className="storycard__text">{open.text}</p>}
            <div className="row">
              {open.text && <SpeakButton text={open.text} label="Read it" />}
              <button className="btn" onClick={async () => { if (confirm('Delete this creation?')) { await db.del('art', open.id); setOpen(null); await load(); await refreshArt(); } }}>🗑️ Delete</button>
              <button className="btn btn--primary" onClick={() => setOpen(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// ---------------- My Journey ----------------

export function describeLog(l: LogEntry, title: (lessonId: string) => string): string {
  switch (l.type) {
    case 'lesson-open': return `Opened “${title(l.lessonId!)}”`;
    case 'lesson-complete': return `Finished “${title(l.lessonId!)}”`;
    case 'assessment': return `Check: ${Math.round((l.score ?? 0) * 100)}% in “${title(l.lessonId!)}”`;
    case 'revision': return `Remembered ${Math.round((l.score ?? 0) * 100)}% of “${title(l.lessonId!)}”`;
    case 'arena': return `Challenge Arena: ${Math.round((l.score ?? 0) * 100)}%`;
    case 'explain': return `Explained “${title(l.lessonId!)}”`;
    case 'apply': return `Made the project for “${title(l.lessonId!)}”`;
    case 'art': return `Created a ${l.detail ?? 'masterpiece'} in the studio`;
    case 'stage-up': return `Moved up a level in ${l.subjectId} (${l.detail})`;
  }
}

export function useLessonTitles() {
  const { outline } = useStore();
  return useMemo(() => {
    const m = new Map<string, string>();
    if (outline) for (const s of Object.values(outline.subjects)) for (const ls of Object.values(s.stages)) for (const l of ls) m.set(l.id, l.title);
    return (id: string) => m.get(id) ?? id;
  }, [outline]);
}

export function Journey() {
  const { index, skills, log, settings } = useStore();
  const title = useLessonTitles();
  if (!index) return <Loading />;
  const all = Object.values(skills);
  const due = dueSkills(all);
  const upcoming = all.filter((s) => s.revision && !due.includes(s)).sort((a, b) => a.revision!.dueAt - b.revision!.dueAt).slice(0, 5);
  const stats = [
    { icon: '📘', n: all.filter((s) => s.stage >= 1).length, label: 'lessons explored' },
    { icon: '✅', n: completedLessons(log), label: 'lessons finished' },
    { icon: '💡', n: all.filter((s) => s.stage >= 3).length, label: 'ideas understood' },
    { icon: '🏆', n: all.filter((s) => s.stage === 5).length, label: 'skills mastered' },
    { icon: '🔥', n: streakDays(log), label: 'day streak' },
  ];
  return (
    <div className="journey">
      <TopBar title="🧭 My Journey" back="/" color="#3FA7A0" />
      <main>
        <section className="journey__hero"><Buddy size={80} color="#3FA7A0" mood="wow" /><div><span className="journey__eyebrow">YOUR ADVENTURES SO FAR</span><h1>{settings.learnerName}'s Journey</h1><p>Look how much you have discovered. Every little step counts!</p></div><SpeakButton text="Look how much you have discovered. Every little step counts!" small /></section>
        <div className="stats">{stats.map((s) => <div key={s.label} className="stat"><span className="stat__icon" aria-hidden="true">{s.icon}</span><span className="stat__n">{s.n}</span><span className="stat__label">{s.label}</span></div>)}</div>
        {due.length > 0 && (
          <section className="card"><h2>🧠 Time to remember</h2><div className="chips">{due.slice(0, 8).map((s) => <button key={s.skillId} className="chip" onClick={() => navigate(`/revise/${s.lessonId}`)}>{title(s.lessonId)}</button>)}</div></section>
        )}
        <section className="card">
          <h2>🌍 My worlds</h2>
          <div className="worldrows">
            {index.worlds.map((w) => {
              const ws = all.filter((s) => w.subjects.some((x) => x.id === s.subjectId));
              const total = w.subjects.reduce((n, s) => n + s.lessons, 0);
              const score = ws.reduce((n, s) => n + s.stage, 0) / Math.max(1, total * 5);
              return (
                <button key={w.id} className="worldrow" onClick={() => navigate(`/world/${w.id}`)} style={{ ['--world' as string]: w.colors.land }}>
                  <WorldArt world={w} className="worldrow__art" />
                  <span className="worldrow__name">{w.title}</span>
                  <span className="progressbar"><span style={{ width: `${Math.max(score * 100, ws.length ? 3 : 0)}%` }} /></span>
                  <span className="worldrow__n">{ws.filter((s) => s.stage >= 1).length} explored</span>
                </button>
              );
            })}
          </div>
        </section>
        {upcoming.length > 0 && <section className="card"><h2>📅 Coming up to remember</h2><ul className="timeline">{upcoming.map((s) => <li key={s.skillId}><span>{title(s.lessonId)}</span><span className="muted">{relativeDay(s.revision!.dueAt)}</span></li>)}</ul></section>}
        <section className="card">
          <h2>✨ What I did lately</h2>
          {log.length === 0 ? <p className="muted">Your adventures will appear here.</p> : <ul className="timeline">{[...log].reverse().slice(0, 15).map((l, i) => <li key={i}><span>{describeLog(l, title)}</span><span className="muted">{relativeDay(l.at)}</span></li>)}</ul>}
        </section>
      </main>
    </div>
  );
}

// ---------------- Achievements ----------------

export function Achievements() {
  const { achievements } = useStore();
  const earned = Object.keys(achievements).length;
  return (
    <div className="achievements">
      <TopBar title="🏅 Achievements" back="/" color="#F2B134" />
      <main>
        <header className="achievements__hero"><Buddy size={78} color="#D99A20" accent="#FFE18A" mood="wow" /><div><span className="achievements__eyebrow">YOUR TROPHY SHELF</span><h1>Look what you have earned!</h1><p>Every badge celebrates a step in your learning adventure.</p></div></header>
        <p className="achievements__count">{earned} of {ACHIEVEMENTS.length} badges earned</p>
        <div className="badges">
          {ACHIEVEMENTS.map((a) => {
            const at = achievements[a.id];
            return (
              <div key={a.id} className={cx('badge', at ? 'is-earned' : 'is-locked')}>
                <span className="badge__icon" aria-hidden="true">{at ? a.icon : '❔'}</span>
                <strong>{a.title}</strong>
                <span className="badge__desc">{a.description}</span>
                {at && <span className="badge__date">{new Date(at).toLocaleDateString()}</span>}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export { worldOfSubject };
