import { useEffect, useMemo, useState } from 'react';
import { useStore } from '../../state/store.tsx';
import { navigate } from '../../lib/router.ts';
import { loadSubject } from '../../curriculum/loader.ts';
import type { StageId, Subject, World } from '../../curriculum/schema.ts';
import { WorldArt, Buddy } from '../../ui/WorldArt.tsx';
import { ErrorBox, Loading, SpeakButton, StageDots, TopBar } from '../../ui/common.tsx';
import { isUnlocked, openStages, placement, recommend, stageOfSkill, skillIdOf } from '../../engine/adaptive.ts';
import { isDue } from '../../engine/revision.ts';
import { cx } from '../../lib/util.ts';
import type { MasteryStage } from '../../engine/types.ts';
import { IVU_READS_URL, loadLevels, readIvuReadsState, summarise, type IvuReadsSummary } from '../../lib/ivuReads.ts';

/** Big card that opens IVU Reads, Ivaan's phonics flashcard app, with his current level. */
export function IvuReadsCard({ compact = false }: { compact?: boolean }) {
  const [sum, setSum] = useState<IvuReadsSummary | null>(null);
  useEffect(() => { let live = true; loadLevels().then((lv) => { if (live && lv.length) setSum(summarise(lv, readIvuReadsState())); }); return () => { live = false; }; }, []);
  const cur = sum?.levels[sum.currentLevel];
  return (
    <a className={cx('ivureads-card', compact && 'ivureads-card--compact')} href={IVU_READS_URL}>
      <span className="ivureads-card__icon" aria-hidden="true">🚗📖</span>
      <span className="ivureads-card__text">
        <span className="ivureads-card__title">IVU Reads!</span>
        <span className="ivureads-card__sub">{sum?.started && cur ? `Keep driving! You are on ${cur.sticker} ${cur.name}` : 'Sounds, words and stories — drive the reading road'}</span>
      </span>
      <span className="ivureads-card__go" aria-hidden="true">▶</span>
    </a>
  );
}

export function worldById(worlds: World[], id: string) { return worlds.find((w) => w.id === id); }
export function worldOfSubject(worlds: World[], subjectId: string) { return worlds.find((w) => w.subjects.some((s) => s.id === subjectId)); }

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
}

export function Universe() {
  const { index, outline, settings, skills } = useStore();
  const recs = useMemo(() => (outline && index ? recommend(outline, settings, skills, { worldOrder: index.worlds.map((w) => w.id) }) : []), [outline, index, settings, skills]);
  if (!index) return <Loading />;
  const hello = `${greeting()}, ${settings.learnerName}!`;
  const next = recs[0];
  const nextWorld = next ? worldOfSubject(index.worlds, next.subjectId) : undefined;
  const nextSubject = nextWorld?.subjects.find((s) => s.id === next?.subjectId);
  const action = next ? (next.kind === 'revise' ? 'Remember together' : next.kind === 'continue' ? 'Continue your adventure' : 'Start a new adventure') : 'Explore the worlds';
  const nextHref = next ? (next.kind === 'revise' ? `/revise/${next.lessonId}` : `/lesson/${next.lessonId}`) : '/explore';
  return (
    <div className="universe universe--owl">
      <header className="owl-hero">
        <div className="owl-hero__sky" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span><span>☁</span></div>
        <div className="owl-hero__copy">
          <span className="owl-hero__eyebrow">YOUR LITTLE WORLD OF BIG DISCOVERIES</span>
          <h1 className="owl-hero__title">{hello}</h1>
          <p className="owl-hero__sub">Ready for a wonderful adventure?</p>
          <button className="owl-hero__speak" onClick={() => navigate('/explore')} aria-label="Explore learning worlds">Let's explore <span aria-hidden="true">↗</span></button>
        </div>
        <div className="owl-hero__buddy" aria-label="Buddy the owl, your learning guide">
          <span className="owl-hero__halo" />
          <Buddy size={176} color="#5145B8" accent="#FFD66B" className="bob" />
          <span className="owl-hero__speech">Hi, explorer!</span>
        </div>
        <div className="owl-hero__ground" aria-hidden="true" />
      </header>

      <section className="owl-next" aria-labelledby="owl-next-title">
        <div className="owl-next__heading">
          <div><span className="owl-kicker">BUDDY'S PICK FOR YOU</span><h2 id="owl-next-title">Your next adventure</h2></div>
          <span className="owl-next__sparkle" aria-hidden="true">✦</span>
        </div>
        {next ? (
          <button className="owl-adventure" onClick={() => navigate(nextHref)} style={{ ['--adventure-world' as string]: nextWorld?.colors.land ?? '#6658C9', ['--adventure-sky' as string]: nextWorld?.colors.sky ?? '#EEEAFE' }}>
            <span className="owl-adventure__art">{nextWorld && <WorldArt world={nextWorld} />}</span>
            <span className="owl-adventure__content">
              <span className="owl-adventure__tag">{next.kind === 'revise' ? '🧠 A little reminder' : next.kind === 'continue' ? '🌟 Pick up where you left off' : '🗺️ A new discovery'}</span>
              <strong>{next.title}</strong>
              <span className="owl-adventure__subject">{nextSubject?.icon} {nextSubject?.title} · {nextWorld?.title}</span>
              <span className="owl-adventure__cta">{action} <span aria-hidden="true">→</span></span>
            </span>
          </button>
        ) : (
          <button className="owl-adventure owl-adventure--empty" onClick={() => navigate('/explore')}>
            <span className="owl-adventure__content"><strong>12 wonderful worlds are waiting</strong><span>Choose a world and discover something new.</span><span className="owl-adventure__cta">Explore the worlds →</span></span>
          </button>
        )}
      </section>

      <section className="owl-worlds" aria-labelledby="owl-worlds-title">
        <div className="owl-section-head"><div><span className="owl-kicker">PICK A PLACE TO WANDER</span><h2 id="owl-worlds-title">Explore the worlds</h2></div><button onClick={() => navigate('/explore')} className="owl-text-link">See all 12 <span aria-hidden="true">→</span></button></div>
        <div className="owl-world-strip">
          {index.worlds.slice(0, 4).map((w, i) => (
            <button key={w.id} className="owl-world-chip" onClick={() => navigate(`/world/${w.id}`)} style={{ ['--chip-world' as string]: w.colors.land, ['--chip-sky' as string]: w.colors.sky }}>
              <span className="owl-world-chip__art"><WorldArt world={w} /></span><span className="owl-world-chip__name">{w.title}</span><span className="owl-world-chip__domain">{w.domain}</span><span className="owl-world-chip__number">{String(i + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </section>
      <footer className="owl-footer"><Buddy size={38} color="#5145B8" accent="#FFD66B" /><span>Keep wondering. Keep discovering.</span><button onClick={() => navigate('/parent/dashboard')}>Grown-ups <span aria-hidden="true">↗</span></button></footer>
    </div>
  );
}

/** An illustrated atlas of all twelve worlds, with a clear, repeatable destination action. */
export function ExploreMap() {
  const { index, skills } = useStore();
  if (!index) return <Loading />;
  return (
    <div className="explore-page explore-page--atlas">
      <TopBar title="Explore the worlds" back="/" color="#5145B8" />
      <header className="atlas-hero">
        <Buddy size={92} color="#5145B8" accent="#FFD66B" mood="wow" />
        <div><span className="owl-kicker">BUDDY'S WORLD ATLAS</span><h1>Where shall we go?</h1><p>Every island has something wonderful to discover.</p></div>
      </header>
      <div className="atlas-map">
        <div className="atlas-map__path" aria-hidden="true" />
        {index.worlds.map((w, i) => {
          const started = w.subjects.reduce((n, sub) => n + Object.values(skills).filter((k) => k.subjectId === sub.id && k.stage > 0).length, 0);
          return (
            <button key={w.id} className={`atlas-island atlas-island--${i % 6}`} style={{ ['--island-world' as string]: w.colors.land, ['--island-sky' as string]: w.colors.sky, ['--island-accent' as string]: w.colors.accent }} onClick={() => navigate(`/world/${w.id}`)}>
              <span className="atlas-island__scene"><WorldArt world={w} /></span>
              <span className="atlas-island__meta"><strong>{w.title}</strong><small>{w.domain}</small><span className="atlas-island__enter">Visit this world <b aria-hidden="true">→</b></span></span>
              {started > 0 && <span className="atlas-island__progress" aria-label={`${started} learning skills started`}>⭐ {started}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function WorldPage({ worldId }: { worldId: string }) {
  const { index, skills, outline, settings } = useStore();
  const w = index && worldById(index.worlds, worldId);
  if (!index) return <Loading />;
  if (!w) return <ErrorBox error="This world does not exist." />;
  return (
    <div className="world" style={{ ['--world' as string]: w.colors.land, ['--sky' as string]: w.colors.sky, ['--accent' as string]: w.colors.accent, ['--ink' as string]: w.colors.ink }}>
      <TopBar title={w.title} back="/explore" color={w.colors.land} />
      <div className="world__banner">
        <WorldArt world={w} className="world__art" />
        <div className="world__intro">
          <Buddy color={w.colors.land} accent={w.colors.accent} size={64} />
          <div>
            <p className="world__guide">{w.guide} says:</p>
            <p className="world__tagline">“Welcome to {w.title}! {w.tagline}.”</p>
          </div>
          <SpeakButton text={`${w.guide} says: Welcome to ${w.title}! ${w.tagline}. Pick a path to explore.`} small />
        </div>
      </div>
      {w.id === 'word-woods' && <IvuReadsCard />}
      <div className="subjects">
        {w.subjects.map((s) => {
          const stage = placement(settings, s.id);
          const lessons = outline?.subjects[s.id]?.stages[stage] ?? [];
          const done = lessons.filter((l) => stageOfSkill(skills, l.id) >= 3).length;
          const pctDone = lessons.length ? done / lessons.length : 0;
          return (
            <button key={s.id} className="subjectcard" onClick={() => navigate(`/subject/${s.id}`)} disabled={!s.file}>
              <span className="subjectcard__icon" aria-hidden="true">{s.icon}</span>
              <span className="subjectcard__title">{s.title}</span>
              <span className="subjectcard__tag">{s.tagline}</span>
              <span className="progressbar" aria-label={`${done} of ${lessons.length} lessons understood`}><span style={{ width: `${pctDone * 100}%` }} /></span>
              {!s.file && <span className="subjectcard__soon">Coming soon</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function useSubject(subjectId: string) {
  const [subject, setSubject] = useState<Subject | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let live = true;
    setSubject(null); setError(null);
    loadSubject(subjectId).then((s) => live && setSubject(s), (e) => live && setError(String(e.message ?? e)));
    return () => { live = false; };
  }, [subjectId]);
  return { subject, error };
}

export function SubjectPage({ subjectId }: { subjectId: string }) {
  const { index, settings, skills } = useStore();
  const { subject, error } = useSubject(subjectId);
  const open = openStages(settings, subjectId);
  const [stage, setStage] = useState<StageId>(placement(settings, subjectId));
  useEffect(() => setStage(placement(settings, subjectId)), [settings, subjectId]);
  if (error) return <ErrorBox error={error} />;
  if (!subject || !index) return <Loading />;
  const w = worldById(index.worlds, subject.worldId)!;
  const st = subject.stages.find((s) => s.stage === stage)!;
  const stageMeta = index.stages.find((s) => s.id === stage)!;
  return (
    <div className="subject" style={{ ['--world' as string]: w.colors.land, ['--sky' as string]: w.colors.sky, ['--accent' as string]: w.colors.accent, ['--ink' as string]: w.colors.ink }}>
      <TopBar title={<><span aria-hidden="true">{subject.icon}</span> {subject.title}</>} back={`/world/${w.id}`} color={w.colors.land} />
      <div className="stagetabs" role="tablist" aria-label="Age stage">
        {index.stages.map((s) => {
          const isOpen = open.includes(s.id);
          return (
            <button key={s.id} role="tab" aria-selected={stage === s.id} className={cx('stagetab', stage === s.id && 'is-active')} disabled={!isOpen} onClick={() => setStage(s.id)} title={isOpen ? s.description : 'Unlocks as you learn'}>
              {isOpen ? '' : '🔒 '}{s.label}
            </button>
          );
        })}
      </div>
      <p className="subject__overview">{st.overview} <SpeakButton text={st.overview} small /></p>
      {subject.id === 'phonics' && (stage === 's4' || stage === 's5') && <IvuReadsCard compact />}
      <p className="subject__stage-desc">{stageMeta.description}</p>

      {subject.structure && (
        <details className="structure">
          <summary>📜 {subject.structure.title}</summary>
          <p>{subject.structure.intro}</p>
          <ol className="structure__list">{subject.structure.sections.map((s) => <li key={s.name}><strong>{s.name}</strong> — {s.summary}</li>)}</ol>
        </details>
      )}

      <div className="units">
        {st.units.map((u, ui) => (
          <section key={u.id} className="unit" aria-labelledby={`${u.id}-h`}>
            <div className="unit__head">
              <span className="unit__num">{ui + 1}</span>
              <div>
                <h2 id={`${u.id}-h`} className="unit__title">{u.title}</h2>
                <p className="unit__summary">{u.summary}</p>
              </div>
            </div>
            <div className="stones">
              {u.lessons.map((l) => {
                const rec = skills[skillIdOf(l.id)];
                const s = (rec?.stage ?? 0) as MasteryStage;
                const unlocked = isUnlocked(l, skills);
                const due = rec && isDue(rec);
                return (
                  <button key={l.id} className={cx('stone', !unlocked && 'is-locked', s >= 5 && 'is-mastered')} onClick={() => navigate(unlocked ? `/lesson/${l.id}` : `/lesson/${l.prerequisiteIds[0]}`)} aria-label={`${l.title}${unlocked ? '' : ' (locked)'}`}>
                    <span className="stone__title">{unlocked ? '' : '🔒 '}{l.title}</span>
                    <StageDots stage={s} />
                    {due && <span className="stone__due">🧠 time to remember</span>}
                    <span className="stone__mins">{l.minutes} min</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
