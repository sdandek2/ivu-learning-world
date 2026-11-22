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
import { t } from '../../i18n/index.ts';
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
  return (
    <div className="universe">
      <header className="universe__hero">
        <Buddy size={84} color="#5B4FCF" accent="#FFD166" className="bob" />
        <div>
          <h1 className="universe__title">{hello}</h1>
          <p className="universe__sub">Where shall we explore today?</p>
        </div>
        <SpeakButton text={`${hello} Where shall we explore today?`} />
      </header>

      {recs.length > 0 && (
        <section className="path" aria-labelledby="path-h">
          <h2 id="path-h" className="section-title">✨ {t('todayPath')}</h2>
          <div className="path__row">
            {recs.map((r, i) => {
              const w = worldOfSubject(index.worlds, r.subjectId)!;
              const s = w.subjects.find((x) => x.id === r.subjectId)!;
              return (
                <button key={r.lessonId} className="pathcard" style={{ ['--world' as string]: w.colors.land, ['--sky' as string]: w.colors.sky }}
                  onClick={() => navigate(r.kind === 'revise' ? `/revise/${r.lessonId}` : `/lesson/${r.lessonId}`)}>
                  <span className="pathcard__step">{i + 1}</span>
                  <span className="pathcard__icon" aria-hidden="true">{r.kind === 'revise' ? '🧠' : s.icon}</span>
                  <span className="pathcard__kind">{r.kind === 'revise' ? t('revise') : r.kind === 'continue' ? 'Keep going' : 'Something new'}</span>
                  <span className="pathcard__title">{r.title}</span>
                  <span className="pathcard__subject">{s.title}</span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      <section className="home-discover" aria-label="Explore the learning worlds">
        <div><span className="home-discover__eyebrow">A universe of discovery</span><h2>12 wonderful worlds are waiting</h2><p>Follow a trail, meet new friends and discover something amazing.</p></div>
        <button className="btn btn--primary btn--big" onClick={() => navigate('/explore')}>Explore the worlds <span aria-hidden="true">→</span></button>
      </section>
    </div>
  );
}


/** Dedicated discovery map keeps the home screen focused on the next adventure. */
export function ExploreMap() {
  const { index, skills } = useStore();
  if (!index) return <Loading />;
  return (
    <div className="explore-page">
      <TopBar title="Explore the worlds" back="/" color="#263B55" />
      <header className="explore-page__intro">
        <Buddy size={76} color="#4C5C8A" accent="#F7C96B" mood="wow" />
        <div><p className="explore-page__eyebrow">Choose your next destination</p><h1>Where shall we go?</h1><p>Every world is a new adventure. Pick one to begin exploring.</p></div>
      </header>
      <div className="map map--cinematic">
        {index.worlds.map((w, i) => {
          const started = w.subjects.reduce((n, sub) => n + Object.values(skills).filter((k) => k.subjectId === sub.id && k.stage > 0).length, 0);
          return (
            <button key={w.id} className="island" style={{ ['--world' as string]: w.colors.land, ['--accent' as string]: w.colors.accent, ['--ink' as string]: w.colors.ink, animationDelay: `${(i % 4) * 0.4}s` }} onClick={() => navigate(`/world/${w.id}`)}>
              <WorldArt world={w} className="island__art" />
              <span className="island__label"><span className="island__name">{w.title}</span><span className="island__domain">{w.domain}</span><span className="island__explore">Enter world <span aria-hidden="true">↗</span></span></span>
              {started > 0 && <span className="island__badge" aria-label={`${started} lessons started`}>⭐ {started}</span>}
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
      <TopBar title={w.title} back="/" color={w.colors.land} />
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
