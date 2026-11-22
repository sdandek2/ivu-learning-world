import '../../styles/parent.css';
import { useEffect, useState, type ReactNode } from 'react';
import { useStore } from '../../state/store.tsx';
import { navigate } from '../../lib/router.ts';
import { MASTERY_STAGES, type MasteryStage, type SkillRecord } from '../../engine/types.ts';
import { accuracy, independence, nextStepHint, retentionScore, bestLevel, THRESHOLDS } from '../../engine/mastery.ts';
import { placement, readyToAdvance, stageProgress } from '../../engine/adaptive.ts';
import { dueSkills } from '../../engine/revision.ts';
import { completedLessons, streakDays } from '../../engine/achievements.ts';
import { STAGE_IDS, type StageId, type Item } from '../../curriculum/schema.ts';
import { cx, pct, relativeDay } from '../../lib/util.ts';
import { backupFileName, createBackup, downloadJSON, parseBackup, restoreBackup, type Backup } from '../../lib/backup.ts';
import * as db from '../../db/db.ts';
import { englishVoices, readNarrationCoverage, resetNarrationCoverage } from '../../lib/speech.ts';
import { IVU_READS_URL, loadLevels, readIvuReadsState, summarise, type IvuReadsSummary } from '../../lib/ivuReads.ts';
import { PLANNED_LOCALES } from '../../i18n/index.ts';
import { useSubject } from '../child/Explore.tsx';
import { describeLog, useLessonTitles } from '../child/More.tsx';
import { ContextNotes } from '../child/LessonStudio.tsx';
import { answerText } from '../../ui/ItemPlayer.tsx';
import { stageColor } from '../../ui/common.tsx';

const DAY = 86400000;

/** Reading progress from IVU Reads (its own levels and mastery rule: read correctly N times, on 2 different days). */
function IvuReadsPanel() {
  const [sum, setSum] = useState<IvuReadsSummary | null>(null);
  useEffect(() => { let live = true; loadLevels().then((lv) => { if (live) setSum(summarise(lv, readIvuReadsState())); }); return () => { live = false; }; }, []);
  if (!sum || sum.levels.length === 0) return null;
  const cur = sum.levels[sum.currentLevel];
  return (
    <section className="pcard ivureads">
      <h2>📖 IVU Reads — phonics and reading</h2>
      {!sum.started ? (
        <p>Not started on this device yet. IVU Reads is the phonics flashcard app (15 levels, from letter sounds to short stories, with recorded voice). Open it from <b>Word Woods → 📖 IVU Reads</b>, or <a href={IVU_READS_URL}>open it now</a>. To bring over progress from another copy of IVU Reads, use its own <i>Grown-ups → Backup</i> there.</p>
      ) : (
        <>
          <p>Current level: <b>{cur?.sticker} Level {sum.currentLevel} · {cur?.name}</b> · {sum.wordsMastered} of {sum.wordsTotal} cards learned · {sum.stickers} level stickers · {sum.stars} ⭐ · {sum.sessions} sessions{sum.lastSession ? `, last on ${sum.lastSession}` : ''}.</p>
          <ul className="ivureads__levels">
            {sum.levels.map((l) => (
              <li key={l.index} className={cx(l.current && 'is-current', !l.unlocked && 'is-locked')}>
                <span className="ivureads__name">{l.sticker} {l.index}. {l.name}</span>
                <span className="meter" aria-label={`${l.mastered} of ${l.total} learned`}><span style={{ width: `${(l.mastered / l.total) * 100}%` }} /></span>
                <span className="ivureads__n">{l.mastered}/{l.total}</span>
              </li>
            ))}
          </ul>
          <p className="pnote">A card counts as learned when it has been read correctly enough times on two different days (IVU Reads' own rule, set in its Grown-ups area).</p>
        </>
      )}
    </section>
  );
}

export function ParentGate({ next }: { next: string }) {
  const { unlockParent } = useStore();
  const [q] = useState(() => { const a = 6 + Math.floor(Math.random() * 7); const b = 3 + Math.floor(Math.random() * 7); return { a, b }; });
  const [v, setV] = useState('');
  const [err, setErr] = useState(false);
  return (
    <div className="parent parent-gate">
      <form className="gate" onSubmit={(e) => { e.preventDefault(); if (Number(v) === q.a * q.b) { unlockParent(); navigate(next, { replace: true }); } else { setErr(true); setV(''); } }}>
        <h1>Grown-ups only</h1>
        <p>To continue, answer this question.</p>
        <label className="gate__q" htmlFor="gate">What is {q.a} × {q.b}?</label>
        <input id="gate" inputMode="numeric" autoComplete="off" autoFocus value={v} onChange={(e) => { setV(e.target.value.replace(/\D/g, '')); setErr(false); }} aria-invalid={err} />
        {err && <p className="gate__err" role="alert">That's not right — please try again.</p>}
        <div className="row"><button type="button" className="pbtn" onClick={() => navigate('/')}>Back to learning</button><button className="pbtn pbtn--primary">Continue</button></div>
      </form>
    </div>
  );
}

function ParentShell({ active, children }: { active: string; children: ReactNode }) {
  const { lockParent, settings } = useStore();
  const links = [['overview', 'Overview'], ['progress', 'Progress'], ['recommendations', 'Recommendations'], ['curriculum', 'Curriculum'], ['settings', 'Settings & Backup']];
  return (
    <div className="parent">
      <header className="pheader">
        <div className="pheader__brand"><span className="pheader__logo">IVU</span><span>Parent Area · {settings.learnerName}</span></div>
        <nav className="pnav" aria-label="Parent navigation">{links.map(([id, label]) => <button key={id} className={cx('pnav__link', active === id && 'is-active')} aria-current={active === id ? 'page' : undefined} onClick={() => navigate(`/parent/${id}`)}>{label}</button>)}</nav>
        <button className="pbtn" onClick={() => { lockParent(); navigate('/'); }}>Exit to child view</button>
      </header>
      <main className="pmain">{children}</main>
    </div>
  );
}

export function ParentArea({ section, arg }: { section: string; arg?: string }) {
  const { parentUnlockedUntil } = useStore();
  if (parentUnlockedUntil < Date.now()) return <ParentGate next={`/parent/${section}${arg ? '/' + arg : ''}`} />;
  return (
    <ParentShell active={section}>
      {(section === 'overview' || section === 'dashboard') && <OverviewPage />}
      {section === 'progress' && <ProgressPage />}
      {section === 'recommendations' && <RecommendationsPage />}
      {section === 'curriculum' && <CurriculumBrowser subjectId={arg} />}
      {section === 'settings' && <SettingsAndBackupPage />}
      {section === 'backup' && <BackupPage />}
    </ParentShell>
  );
}

// ---------------- Parent overview ----------------

function OverviewPage() {
  const { index, skills, log, settings, artCount } = useStore();
  const title = useLessonTitles();
  const started = Object.values(skills).filter((s) => s.stage > 0);
  const due = dueSkills(Object.values(skills));
  const weekSeconds = log.filter((l) => l.type === 'lesson-complete' && l.at > Date.now() - 7 * DAY).reduce((n, l) => n + (l.seconds ?? 0), 0);
  const mastered = started.filter((s) => s.stage === 5).length;
  if (!index) return null;
  const next = [...started].sort((a, b) => (a.stage - b.stage) || ((b.lastPracticedAt ?? 0) - (a.lastPracticedAt ?? 0)))[0];
  return (
    <div className="parent-overview">
      <div className="parent-page-hero">
        <p className="parent-page-hero__eyebrow">A little progress, every day</p>
        <h1>Welcome to {settings.learnerName}'s learning world</h1>
        <p>A clear snapshot of what has been explored, what is growing, and where a little support may help next.</p>
      </div>
      <div className="kpis">
        <Kpi n={started.length} label="skills explored" />
        <Kpi n={completedLessons(log)} label="lessons finished" />
        <Kpi n={mastered} label="skills mastered" />
        <Kpi n={Math.round(weekSeconds / 60)} label="learning minutes this week" />
        <Kpi n={streakDays(log)} label="day streak" />
        <Kpi n={due.length} label="revisions due" warn={due.length > 5} />
      </div>
      <div className="parent-overview__grid">
        <section className="pcard">
          <h2>Learning at a glance</h2>
          <p><b>{started.length}</b> of the recorded skills have been started across <b>{index.worlds.length}</b> learning worlds.</p>
          <p><b>{artCount}</b> creations saved in Creative Studio.</p>
          <p><b>{due.length}</b> revision {due.length === 1 ? 'check is' : 'checks are'} ready for a return visit.</p>
          <button className="pbtn pbtn--primary" onClick={() => navigate('/parent/progress')}>Explore detailed progress</button>
        </section>
        <section className="pcard">
          <h2>A gentle next step</h2>
          {next ? (
            <>
              <p><b>{title(next.lessonId)}</b> is currently at <b>{MASTERY_STAGES[next.stage as MasteryStage]}</b>. Review its evidence and decide whether a revisit or a new challenge would help.</p>
              <button className="pbtn pbtn--primary" onClick={() => navigate('/parent/progress')}>Review learning evidence</button>
            </>
          ) : <p>When a first lesson is explored, a suggested next step will appear here.</p>}
        </section>
      </div>
      <IvuReadsPanel />
      <p className="muted small">Progress is stored on this device. A regular backup helps protect learning history if browser data is cleared.</p>
    </div>
  );
}

// ---------------- Recommendations ----------------

function RecommendationsPage() {
  const { index, outline, skills, settings, setSubjectStage, addLog } = useStore();
  const title = useLessonTitles();
  const due = dueSkills(Object.values(skills));
  const ready = outline ? readyToAdvance(outline, settings, skills) : [];
  const subjectName = (id: string) => index?.worlds.flatMap((w) => w.subjects).find((s) => s.id === id)?.title ?? id;
  if (!index || !outline) return null;
  return (
    <div className="parent-recommendations">
      <div className="parent-page-hero">
        <p className="parent-page-hero__eyebrow">Thoughtful guidance</p>
        <h1>Recommended next steps</h1>
        <p>Suggestions are based on recorded practice, spaced revision and the existing mastery rules. They never change a learner's stage without your choice.</p>
      </div>
      <section className="pcard">
        <h2>Revisit and strengthen</h2>
        {due.length === 0 ? <p>No revisions are due right now. Keep following the child's curiosity and return to earlier skills when they appear here.</p> : (
          <ul className="plist">
            {due.map((item) => (
              <li key={item.skillId}>
                <span><b>{title(item.lessonId)}</b><span className="muted small"> · {subjectName(item.subjectId)} · {relativeDay(item.revision?.dueAt ?? Date.now())}</span></span>
                <button className="pbtn pbtn--primary" onClick={() => navigate('/revise/' + item.lessonId)}>Start revision</button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="pcard">
        <h2>Ready for a new stage</h2>
        {ready.length === 0 ? <p>No subject currently meets the automatic stage-advance criteria. That is fine—steady practice matters more than rushing ahead.</p> : (
          <ul className="plist">
            {ready.map((r) => (
              <li key={r.subjectId}>
                <span><b>{subjectName(r.subjectId)}</b><span className="muted small"> · {r.from} → {r.to}</span></span>
                <button className="pbtn pbtn--primary" onClick={async () => { await setSubjectStage(r.subjectId, r.to); await addLog({ type: 'stage-up', subjectId: r.subjectId, detail: `${r.from}→${r.to}` }); }}>Approve stage change</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

// ---------------- Settings & Backup ----------------

function SettingsAndBackupPage() {
  return <div className="settings-backup"><SettingsPage /><BackupPage /></div>;
}

// ---------------- Progress detail ----------------

function ProgressPage() {
  const { index, outline, skills, log, settings, setSubjectStage, addLog } = useStore();
  const title = useLessonTitles();
  const [subjectFilter, setSubjectFilter] = useState<string>('');
  const all = Object.values(skills).filter((s) => s.stage > 0);
  const counts = [0, 0, 0, 0, 0, 0];
  all.forEach((s) => counts[s.stage]++);
  const weekSeconds = log.filter((l) => l.type === 'lesson-complete' && l.at > Date.now() - 7 * DAY).reduce((n, l) => n + (l.seconds ?? 0), 0);
  const due = dueSkills(Object.values(skills));
  const ready = outline ? readyToAdvance(outline, settings, skills) : [];
  const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
  const dims = [
    { label: 'Accuracy', value: avg(all.filter((s) => s.attempts).map(accuracy)), help: 'Share of all answers that were right (including retries).' },
    { label: 'Independence', value: avg(all.filter((s) => s.itemsSeen).map(independence)), help: 'Right on the first try, without a hint.' },
    { label: 'Retention', value: avg(all.map(retentionScore).filter((x): x is number => x !== null)), help: 'Score on spaced revision checks after a gap.' },
    { label: 'Explains', value: all.length ? all.filter((s) => bestLevel(s.explain) >= 1).length / all.length : null, help: 'Skills the child has explained in their own words (at least with help).' },
    { label: 'Applies', value: all.length ? all.filter((s) => bestLevel(s.apply) >= 1).length / all.length : null, help: 'Skills used in a project, experiment or real task.' },
  ];
  const subjName = (id: string) => index?.worlds.flatMap((w) => w.subjects).find((s) => s.id === id)?.title ?? id;
  const rows = Object.values(skills).filter((s) => !subjectFilter || s.subjectId === subjectFilter).sort((a, b) => (b.lastPracticedAt ?? 0) - (a.lastPracticedAt ?? 0));
  if (!index || !outline) return null;

  return (
    <div className="dash">
      <h1>How {settings.learnerName} is learning</h1>
      <p className="muted">Mastery here is never just a quiz score: each skill moves through five stages using accuracy, independence, practice, retention after a gap, and the ability to explain and apply the idea.</p>

      <div className="kpis">
        <Kpi n={all.length} label="skills explored" />
        <Kpi n={completedLessons(log)} label="lessons finished" />
        <Kpi n={counts[3] + counts[4] + counts[5]} label="understood or better" />
        <Kpi n={counts[5]} label="mastered" />
        <Kpi n={Math.round(weekSeconds / 60)} label="minutes this week" />
        <Kpi n={streakDays(log)} label="day streak" />
        <Kpi n={due.length} label="revisions due" warn={due.length > 5} />
      </div>

      <section className="pcard">
        <h2>Mastery stages</h2>
        <div className="stagebar" role="img" aria-label={counts.slice(1).map((c, i) => `${MASTERY_STAGES[i + 1]}: ${c}`).join(', ')}>
          {counts.slice(1).map((c, i) => c > 0 && <span key={i} style={{ flex: c, background: stageColor(i + 1) }} title={`${MASTERY_STAGES[i + 1]}: ${c}`}>{c}</span>)}
          {all.length === 0 && <span className="stagebar__empty">No skills started yet</span>}
        </div>
        <ul className="legend">{MASTERY_STAGES.slice(1).map((s, i) => <li key={s}><span style={{ background: stageColor(i + 1) }} />{s}: {counts[i + 1]}</li>)}</ul>
        <details className="stage-rules"><summary>How stages are earned</summary>
          <ol>
            <li><b>Introduction</b> — opened and explored the lesson.</li>
            <li><b>Recognition</b> — at least {THRESHOLDS.recognitionAttempts} answers with ≥ {THRESHOLDS.recognitionAccuracy * 100}% accuracy.</li>
            <li><b>Understanding</b> — a Check ≥ {THRESHOLDS.understandingScore * 100}% (first tries), independence ≥ {THRESHOLDS.understandingIndependence * 100}%, and explained the idea (at least with help).</li>
            <li><b>Application</b> — did the project/experiment and the latest Check is ≥ {THRESHOLDS.applicationScore * 100}%.</li>
            <li><b>Mastery</b> — passed a revision check after ≥ {THRESHOLDS.masteryRetentionGapDays} days (≥ {THRESHOLDS.masteryRetentionScore * 100}%), explained it independently, independence ≥ {THRESHOLDS.masteryIndependence * 100}%.</li>
          </ol>
          <p>A failed revision check (below {THRESHOLDS.retentionFail * 100}%) moves the skill back to Understanding until it is re-earned.</p>
        </details>
      </section>

      <IvuReadsPanel />

      <section className="pcard">
        <h2>Evidence profile</h2>
        <div className="dims">{dims.map((d) => <div key={d.label} className="dim" title={d.help}><span className="dim__label">{d.label}</span><span className="dim__bar"><span style={{ width: `${(d.value ?? 0) * 100}%` }} /></span><span className="dim__v">{pct(d.value)}</span><span className="dim__help">{d.help}</span></div>)}</div>
      </section>

      {ready.length > 0 && (
        <section className="pcard pcard--accent">
          <h2>Ready for the next stage</h2>
          <ul className="plist">{ready.map((r) => <li key={r.subjectId}><span><b>{subjName(r.subjectId)}</b>: {r.from} → {r.to}</span><button className="pbtn pbtn--primary" onClick={async () => { await setSubjectStage(r.subjectId, r.to); await addLog({ type: 'stage-up', subjectId: r.subjectId, detail: `${r.from}→${r.to}` }); }}>Move up</button></li>)}</ul>
        </section>
      )}

      <section className="pcard">
        <h2>Worlds and subjects</h2>
        <div className="ptable-wrap">
          <table className="ptable">
            <thead><tr><th>World</th><th>Subject</th><th>Current stage</th><th>Progress in stage</th><th>Explored</th><th>Understood+</th><th>Mastered</th></tr></thead>
            <tbody>
              {index.worlds.flatMap((w) => w.subjects.map((s, i) => {
                const st = placement(settings, s.id);
                const pr = stageProgress(outline, s.id, st, skills);
                const ss = Object.values(skills).filter((k) => k.subjectId === s.id);
                return (
                  <tr key={s.id}>
                    {i === 0 && <td rowSpan={5} className="ptable__world" style={{ borderLeftColor: w.colors.land }}>{w.title}</td>}
                    <td><button className="plink" onClick={() => setSubjectFilter(s.id)}>{s.icon} {s.title}</button></td>
                    <td>{index.stages.find((x) => x.id === st)?.label}</td>
                    <td><span className="mini-bar"><span style={{ width: `${pr.total ? (pr.applied / pr.total) * 100 : 0}%` }} /></span> {pr.applied}/{pr.total} applied</td>
                    <td>{ss.filter((k) => k.stage >= 1).length}</td>
                    <td>{ss.filter((k) => k.stage >= 3).length}</td>
                    <td>{ss.filter((k) => k.stage === 5).length}</td>
                  </tr>
                );
              }))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="pcard">
        <div className="pcard__head">
          <h2>Skills in detail</h2>
          <select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)} aria-label="Filter by subject">
            <option value="">All subjects</option>
            {index.worlds.flatMap((w) => w.subjects).map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>
        </div>
        {rows.length === 0 ? <p className="muted">No skills recorded yet for this selection.</p> : (
          <div className="ptable-wrap">
            <table className="ptable ptable--dense">
              <thead><tr><th>Lesson / skill</th><th>Stage</th><th>Accuracy</th><th>Independence</th><th>Answers</th><th>Retention</th><th>Explain</th><th>Apply</th><th>Next revision</th><th>What's next</th></tr></thead>
              <tbody>{rows.map((r) => <SkillRow key={r.skillId} r={r} title={title(r.lessonId)} />)}</tbody>
            </table>
          </div>
        )}
      </section>

      <section className="pcard">
        <h2>Recent activity</h2>
        {log.length === 0 ? <p className="muted">Nothing yet.</p> : <ul className="plist plist--log">{[...log].reverse().slice(0, 25).map((l, i) => <li key={i}><span>{describeLog(l, title)}</span><span className="muted">{new Date(l.at).toLocaleString()}</span></li>)}</ul>}
      </section>
    </div>
  );
}

const LEVEL = ['not yet', 'with help', 'independent'];
function SkillRow({ r, title }: { r: SkillRecord; title: string }) {
  const ex = bestLevel(r.explain); const ap = bestLevel(r.apply);
  return (
    <tr>
      <td><button className="plink" onClick={() => navigate(`/lesson/${r.lessonId}`)}>{title}</button><div className="muted small">{r.subjectId}</div></td>
      <td><span className="stagepill" style={{ background: stageColor(r.stage) }}>{MASTERY_STAGES[r.stage as MasteryStage]}</span></td>
      <td>{pct(r.attempts ? accuracy(r) : null)}</td>
      <td>{pct(r.itemsSeen ? independence(r) : null)}</td>
      <td>{r.attempts}</td>
      <td>{pct(retentionScore(r))}</td>
      <td>{ex < 0 ? '—' : LEVEL[ex]}</td>
      <td>{ap < 0 ? '—' : LEVEL[ap]}</td>
      <td>{r.revision ? relativeDay(r.revision.dueAt) : '—'}</td>
      <td className="small">{nextStepHint(r)}</td>
    </tr>
  );
}

function Kpi({ n, label, warn }: { n: number; label: string; warn?: boolean }) {
  return <div className={cx('kpi', warn && 'kpi--warn')}><span className="kpi__n">{n}</span><span className="kpi__label">{label}</span></div>;
}

// ---------------- Curriculum browser (teacher's guide) ----------------

function CurriculumBrowser({ subjectId }: { subjectId?: string }) {
  const { index } = useStore();
  if (!index) return null;
  const totals = index.worlds.flatMap((w) => w.subjects).reduce((a, s) => ({ subjects: a.subjects + (s.file ? 1 : 0), units: a.units + s.units, lessons: a.lessons + s.lessons }), { subjects: 0, units: 0, lessons: 0 });
  return (
    <div className="cbrowser">
      <aside className="cbrowser__nav">
        <p className="muted small">Curriculum v{index.contentVersion} · {totals.subjects}/60 subjects · {totals.units} units · {totals.lessons} lessons</p>
        {index.worlds.map((w) => (
          <div key={w.id} className="cbrowser__world">
            <h3 style={{ borderLeftColor: w.colors.land }}>{w.title}<span className="muted small"> {w.domain}</span></h3>
            <ul>{w.subjects.map((s) => <li key={s.id}><button className={cx('plink', s.id === subjectId && 'is-active')} onClick={() => navigate(`/parent/curriculum/${s.id}`)} disabled={!s.file}>{s.icon} {s.title} <span className="muted small">{s.lessons} lessons</span></button></li>)}</ul>
          </div>
        ))}
      </aside>
      <section className="cbrowser__main">{subjectId ? <SubjectGuide subjectId={subjectId} /> : <div className="pcard"><h2>Curriculum guide</h2><p>Choose a subject to see its full age-wise syllabus: units, topics and subtopics, learning objectives, prerequisites, explanations, vocabulary, examples and stories, activities and assessments (with answers), critical-thinking questions, speaking tasks, projects and experiments, mastery criteria and revision schedules.</p><p>Every lesson in the learning app comes from this curriculum. Use this view to prepare, to teach alongside the app, or to check what is coming next.</p></div>}</section>
    </div>
  );
}

function SubjectGuide({ subjectId }: { subjectId: string }) {
  const { subject, error } = useSubject(subjectId);
  const { settings, setSubjectStage, index } = useStore();
  const [stage, setStage] = useState<StageId>(placement(settings, subjectId));
  useEffect(() => setStage(placement(settings, subjectId)), [subjectId, settings]);
  if (error) return <p className="pcard">{error}</p>;
  if (!subject || !index) return <p className="muted">Loading…</p>;
  const st = subject.stages.find((s) => s.stage === stage)!;
  return (
    <div>
      <div className="pcard">
        <h1>{subject.icon} {subject.title}</h1>
        <p>{subject.description}</p>
        <p className="small muted">Content v{subject.contentVersion} · Placement: <b>{index.stages.find((s) => s.id === placement(settings, subjectId))?.label}</b>
          {stage !== placement(settings, subjectId) && <> · <button className="plink" onClick={() => setSubjectStage(subjectId, stage)}>Set placement to {index.stages.find((s) => s.id === stage)?.label}</button></>}
        </p>
        {subject.sensitivity !== 'none' && <p className="pnote">This subject labels what is <b>historical evidence</b>, what is <b>scientific understanding</b>, what is a <b>traditional narrative</b>, what is a <b>religious belief</b>, and what is an <b>interpretation</b>. Lessons describe beliefs respectfully as beliefs held by followers, without asking the child to adopt or reject them.</p>}
        {subject.structure && <details className="pdetails"><summary>{subject.structure.title}</summary><p>{subject.structure.intro}</p><ol>{subject.structure.sections.map((s) => <li key={s.name}><b>{s.name}</b> — {s.summary}</li>)}</ol></details>}
      </div>
      <div className="pstages" role="tablist">{index.stages.map((s) => <button key={s.id} role="tab" aria-selected={s.id === stage} className={cx('pstage', s.id === stage && 'is-active')} onClick={() => setStage(s.id)}>{s.label}</button>)}</div>
      <div className="pcard">
        <h2>{index.stages.find((s) => s.id === stage)?.label}: syllabus</h2>
        <p>{st.overview}</p>
        <h3>Stage goals</h3><ul>{st.goals.map((g) => <li key={g}>{g}</li>)}</ul>
      </div>
      {st.units.map((u, i) => (
        <div key={u.id} className="pcard">
          <h2>Unit {i + 1}: {u.title}</h2>
          <p>{u.summary}</p>
          <div className="pgrid">
            <div><h3>Topics & subtopics</h3><ul>{u.topics.map((t) => <li key={t.title}><b>{t.title}</b>: {t.subtopics.join(', ')}</li>)}</ul></div>
            <div><h3>Learning objectives</h3><ul>{u.objectives.map((o) => <li key={o}>{o}</li>)}</ul></div>
            <div><h3>Mastery criteria</h3><ul>{u.masteryCriteria.map((o) => <li key={o}>{o}</li>)}</ul></div>
            <div><h3>Revision schedule</h3><p>Revisit after {u.revision.intervalsDays.join(', ')} days.</p><p className="small">{u.revision.notes}</p></div>
          </div>
          {u.lessons.map((l) => (
            <details key={l.id} className="pdetails plesson">
              <summary><b>Lesson: {l.title}</b> <span className="muted small">· {l.minutes} min · id {l.id}</span></summary>
              <div className="pgrid">
                <div><h4>Objectives</h4><ul>{l.objectives.map((x) => <li key={x}>{x}</li>)}</ul></div>
                <div><h4>Prerequisites</h4><ul>{l.prerequisites.map((x) => <li key={x}>{x}</li>)}</ul></div>
              </div>
              <h4>Explanation</h4>{l.explanation.map((p) => <p key={p}>{p}</p>)}
              <ContextNotes notes={l.context} />
              <h4>Vocabulary</h4><dl className="pvocab">{l.vocabulary.map((v) => <div key={v.term}><dt>{v.term}</dt><dd>{v.meaning}</dd></div>)}</dl>
              <h4>Examples</h4><ul>{l.examples.map((x) => <li key={x}>{x}</li>)}</ul>
              <h4>Story: {l.story.title}</h4><p>{l.story.text}</p>
              <h4>Interactive activities</h4><ItemList items={l.activities} />
              <h4>Critical-thinking questions</h4><ul>{l.thinking.map((x) => <li key={x}>{x}</li>)}</ul>
              <h4>Speaking & explanation tasks</h4><ul>{l.speaking.map((x) => <li key={x}>{x}</li>)}</ul>
              <h4>{l.project.kind === 'experiment' ? 'Experiment' : 'Project'}: {l.project.title}</h4>
              <p><b>Materials:</b> {l.project.materials.join(', ')}</p><ol>{l.project.steps.map((x) => <li key={x}>{x}</li>)}</ol>
              {l.project.safety && <p className="pnote">Safety: {l.project.safety}</p>}
              <h4>Assessment</h4><ItemList items={l.assessment} />
              <h4>Mastery criteria</h4><ul>{l.mastery.map((x) => <li key={x}>{x}</li>)}</ul>
              <button className="pbtn" onClick={() => navigate(`/lesson/${l.id}`)}>Open in Learning Studio</button>
            </details>
          ))}
        </div>
      ))}
    </div>
  );
}

function ItemList({ items }: { items: Item[] }) {
  return <ol className="pitems">{items.map((it) => <li key={it.id}><span className="pitem__kind">{it.kind}</span> {it.prompt} <span className="pitem__answer">→ {answerText(it)}</span>{it.kind === 'choice' && <span className="muted small"> (options: {it.options.join(' / ')})</span>}{it.why && <div className="muted small">Why: {it.why}</div>}</li>)}</ol>;
}

// ---------------- Settings ----------------

/** What the child has actually heard on this device: recorded human voice vs computer voice. */
function VoiceCoverage() {
  const [c, setC] = useState(() => readNarrationCoverage());
  const total = c.recorded + c.synth;
  const top = Object.entries(c.misses).sort((a, b) => b[1] - a[1]).slice(0, 8);
  return (
    <section className="pcard">
      <h2>Voice coverage</h2>
      {total === 0 ? <p className="muted small">Nothing has been read aloud on this device yet.</p> : (
        <>
          <p>On this device, <b>{pct(c.recorded / total)}</b> of the lines read aloud used the recorded voice ({c.recorded} recorded, {c.synth} computer voice).</p>
          {top.length > 0 && (
            <>
              <p className="muted small">Most-heard lines that still use the computer voice — these are the best ones to record next:</p>
              <ol className="small">{top.map(([line, n]) => <li key={line}>{line} <span className="muted">×{n}</span></li>)}</ol>
            </>
          )}
          <button className="pbtn" onClick={() => { resetNarrationCoverage(); setC(readNarrationCoverage()); }}>Clear these counts</button>
        </>
      )}
    </section>
  );
}

function SettingsPage() {
  const { settings, updateSettings, index, setSubjectStage } = useStore();
  const [voices, setVoices] = useState(englishVoices());
  useEffect(() => { const on = () => setVoices(englishVoices()); window.speechSynthesis?.addEventListener?.('voiceschanged', on); return () => window.speechSynthesis?.removeEventListener?.('voiceschanged', on); }, []);
  if (!index) return null;
  return (
    <div className="psettings">
      <h1>Settings</h1>
      <section className="pcard">
        <h2>Learner</h2>
        <label className="pfield"><span>Name</span><input value={settings.learnerName} onChange={(e) => updateSettings({ learnerName: e.target.value.slice(0, 40) || 'Ivaan' })} /></label>
        <label className="pfield"><span>Year of birth (optional)</span><input inputMode="numeric" value={settings.birthYear ?? ''} onChange={(e) => updateSettings({ birthYear: e.target.value ? Number(e.target.value.replace(/\D/g, '').slice(0, 4)) : null })} /></label>
        <label className="pfield"><span>Starting stage for all subjects</span>
          <select value={settings.defaultStage} onChange={(e) => updateSettings({ defaultStage: e.target.value as StageId })}>{index.stages.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}</select>
        </label>
        <label className="pcheck"><input type="checkbox" checked={settings.autoAdvance} onChange={(e) => updateSettings({ autoAdvance: e.target.checked })} /> Move a subject up a stage automatically when 80% of its lessons reach Application</label>
      </section>
      <section className="pcard">
        <h2>Stage per subject</h2>
        <p className="muted small">Children develop unevenly — it's normal to be at different stages in different subjects. Stages up to the chosen one are open to the child.</p>
        <div className="pstage-grid">
          {index.worlds.flatMap((w) => w.subjects).map((s) => (
            <label key={s.id} className="pfield pfield--row"><span>{s.icon} {s.title}</span>
              <select value={placement(settings, s.id)} onChange={(e) => setSubjectStage(s.id, e.target.value as StageId)}>{STAGE_IDS.map((id) => <option key={id} value={id}>{index.stages.find((x) => x.id === id)?.label}</option>)}</select>
            </label>
          ))}
        </div>
        <button className="pbtn" onClick={() => updateSettings({ subjectStages: {} })}>Reset all to starting stage</button>
      </section>
      <section className="pcard">
        <h2>Reading aloud & sound</h2>
        <label className="pfield"><span>Read aloud</span>
          <select value={settings.readAloud} onChange={(e) => updateSettings({ readAloud: e.target.value as 'off' | 'tap' | 'auto' })}>
            <option value="auto">Automatically read each screen</option><option value="tap">When the speaker button is tapped</option><option value="off">Off</option>
          </select>
        </label>
        <label className="pfield"><span>Voice</span>
          <select value={settings.voiceURI ?? ''} onChange={(e) => updateSettings({ voiceURI: e.target.value || null })}>
            <option value="">Default (Indian English if available)</option>
            {voices.map((v) => <option key={v.voiceURI} value={v.voiceURI}>{v.name} ({v.lang}){v.localService ? '' : ' — online'}</option>)}
          </select>
        </label>
        <label className="pfield"><span>Speaking speed: {settings.speechRate.toFixed(2)}</span><input type="range" min="0.6" max="1.3" step="0.05" value={settings.speechRate} onChange={(e) => updateSettings({ speechRate: Number(e.target.value) })} /></label>
        <label className="pcheck"><input type="checkbox" checked={settings.recordedVoice} onChange={(e) => updateSettings({ recordedVoice: e.target.checked })} /> Use the IVU Reads recorded voice whenever there is a recording (letter sounds, words, stories, and Buddy's praise and encouragement). Other lines use the computer voice above.</label>
        <label className="pcheck"><input type="checkbox" checked={settings.sounds} onChange={(e) => updateSettings({ sounds: e.target.checked })} /> Play feedback sounds</label>
        <label className="pcheck"><input type="checkbox" checked={settings.reducedMotion} onChange={(e) => updateSettings({ reducedMotion: e.target.checked })} /> Reduce motion and animations</label>
      </section>
      <VoiceCoverage />
      <section className="pcard">
        <h2>Sessions & language</h2>
        <label className="pfield"><span>Suggested session length: {settings.sessionMinutes} minutes</span><input type="range" min="5" max="60" step="5" value={settings.sessionMinutes} onChange={(e) => updateSettings({ sessionMinutes: Number(e.target.value) })} /></label>
        <label className="pfield"><span>Language</span>
          <select value={settings.language} onChange={() => undefined}>{PLANNED_LOCALES.map((l) => <option key={l.code} value={l.code} disabled={l.status !== 'available'}>{l.name}{l.status !== 'available' ? ' — planned' : ''}</option>)}</select>
        </label>
      </section>
    </div>
  );
}

// ---------------- Backup & restore ----------------

function BackupPage() {
  const { reload, resetProgress } = useStore();
  const [lastBackup, setLastBackup] = useState<number | null>(null);
  const [pending, setPending] = useState<{ backup: Backup; summary: string } | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [estimate, setEstimate] = useState<string>('');
  const [persisted, setPersisted] = useState<boolean | null>(null);
  const [confirmText, setConfirmText] = useState('');
  useEffect(() => {
    db.get<number>('kv', 'lastBackupAt').then((v) => setLastBackup(v ?? null));
    navigator.storage?.estimate?.().then((e) => setEstimate(`${((e.usage ?? 0) / 1048576).toFixed(1)} MB used of ${((e.quota ?? 0) / 1048576).toFixed(0)} MB available`));
    navigator.storage?.persisted?.().then(setPersisted);
  }, []);
  const doExport = async () => {
    const b = await createBackup();
    downloadJSON(b, backupFileName());
    const now = Date.now(); await db.put('kv', now, 'lastBackupAt'); setLastBackup(now);
    setMsg({ ok: true, text: `Backup downloaded (${b.data.skills.length} skills, ${b.data.art.length} creations).` });
  };
  const onFile = async (f: File | undefined) => {
    setMsg(null); setPending(null);
    if (!f) return;
    const r = parseBackup(await f.text());
    if (r.ok) setPending({ backup: r.backup, summary: r.summary }); else setMsg({ ok: false, text: r.error });
  };
  const daysSince = lastBackup ? Math.floor((Date.now() - lastBackup) / DAY) : null;
  return (
    <div className="pbackup">
      <h1>Backup & restore</h1>
      <p className="muted">All learning data lives only on this device, in the browser's IndexedDB storage. Nothing is sent anywhere. Download a backup regularly — especially before clearing browser data or changing devices.</p>
      <section className="pcard">
        <h2>Download a backup</h2>
        <p>{lastBackup ? `Last backup: ${new Date(lastBackup).toLocaleString()} (${daysSince === 0 ? 'today' : `${daysSince} days ago`}).` : 'No backup has been made on this device yet.'}</p>
        {daysSince !== null && daysSince > 14 && <p className="pnote">It has been more than two weeks — a fresh backup is a good idea.</p>}
        <button className="pbtn pbtn--primary" onClick={doExport}>⬇ Download backup file</button>
      </section>
      <section className="pcard">
        <h2>Restore from a backup</h2>
        <p>Restoring <b>replaces</b> all current progress, settings and creations on this device with the backup's contents.</p>
        <input type="file" accept="application/json,.json" onChange={(e) => onFile(e.target.files?.[0])} aria-label="Choose backup file" />
        {pending && (
          <div className="pnote">
            <p>Backup looks valid: {pending.summary}</p>
            <button className="pbtn pbtn--danger" onClick={async () => { await restoreBackup(pending.backup); await reload(); setPending(null); setMsg({ ok: true, text: 'Restore complete.' }); }}>Replace current data with this backup</button>
          </div>
        )}
        {msg && <p className={msg.ok ? 'pok' : 'perr'} role="status">{msg.text}</p>}
      </section>
      <section className="pcard">
        <h2>Storage</h2>
        <p>{estimate || 'Storage estimate unavailable in this browser.'}</p>
        <p>Persistent storage: {persisted === null ? 'unknown' : persisted ? 'granted — the browser will not clear this data automatically.' : 'not granted — the browser may clear data under storage pressure. Keep backups.'}</p>
      </section>
      <section className="pcard pcard--danger">
        <h2>Reset progress</h2>
        <p>Deletes all skills, activity and badges (keeps settings and creations). Download a backup first. Type <b>RESET</b> to confirm.</p>
        <input value={confirmText} onChange={(e) => setConfirmText(e.target.value)} aria-label="Type RESET to confirm" />
        <button className="pbtn pbtn--danger" disabled={confirmText !== 'RESET'} onClick={async () => { await resetProgress(); setConfirmText(''); setMsg({ ok: true, text: 'Progress reset.' }); }}>Reset progress</button>
      </section>
    </div>
  );
}


