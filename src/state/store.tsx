/**
 * App state: curriculum index/outline, settings, skill records, achievements.
 * All writes go to IndexedDB immediately; React state mirrors the database.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import * as db from '../db/db.ts';
import { loadIndex, loadOutline } from '../curriculum/loader.ts';
import type { CurriculumIndex, Outline, StageId } from '../curriculum/schema.ts';
import { DEFAULT_SETTINGS, type ItemResult, type Level, type LogEntry, type Settings, type SkillRecord } from '../engine/types.ts';
import { markIntroduced, newSkill, recordApply, recordAssessment, recordExplain, recordItems, recordRetention } from '../engine/mastery.ts';
import { ensureScheduled, schedule } from '../engine/revision.ts';
import { readyToAdvance, skillIdOf, type SkillMap } from '../engine/adaptive.ts';
import { evaluate, ACHIEVEMENTS } from '../engine/achievements.ts';

export interface Store {
  ready: boolean;
  error: string | null;
  index: CurriculumIndex | null;
  outline: Outline | null;
  settings: Settings;
  skills: SkillMap;
  log: LogEntry[];
  artCount: number;
  achievements: Record<string, number>;
  /** Newly unlocked achievement ids, for celebration toasts. */
  fresh: string[];
  dismissFresh: () => void;
  parentUnlockedUntil: number;
  unlockParent: () => void;
  lockParent: () => void;
  updateSettings: (patch: Partial<Settings>) => Promise<void>;
  setSubjectStage: (subjectId: string, stage: StageId) => Promise<void>;
  introduce: (lessonId: string) => Promise<void>;
  practice: (lessonId: string, results: ItemResult[]) => Promise<void>;
  assess: (lessonId: string, results: ItemResult[], intervals: number[]) => Promise<void>;
  revise: (lessonId: string, results: ItemResult[], intervals: number[]) => Promise<void>;
  explain: (lessonId: string, level: Level) => Promise<void>;
  apply: (lessonId: string, level: Level) => Promise<void>;
  completeLesson: (lessonId: string, seconds: number) => Promise<void>;
  addLog: (e: Omit<LogEntry, 'at'>) => Promise<void>;
  refreshArt: () => Promise<void>;
  reload: () => Promise<void>;
  resetProgress: () => Promise<void>;
}

const Ctx = createContext<Store | null>(null);

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore outside StoreProvider');
  return s;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState<CurriculumIndex | null>(null);
  const [outline, setOutline] = useState<Outline | null>(null);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [skills, setSkills] = useState<SkillMap>({});
  const [log, setLog] = useState<LogEntry[]>([]);
  const [artCount, setArtCount] = useState(0);
  const [achievements, setAchievements] = useState<Record<string, number>>({});
  const [fresh, setFresh] = useState<string[]>([]);
  const [parentUnlockedUntil, setParentUnlockedUntil] = useState(0);

  // Refs give async actions the latest values without stale closures.
  const skillsRef = useRef(skills); skillsRef.current = skills;
  const settingsRef = useRef(settings); settingsRef.current = settings;
  const logRef = useRef(log); logRef.current = log;
  const achRef = useRef(achievements); achRef.current = achievements;
  const artRef = useRef(artCount); artRef.current = artCount;
  const outlineRef = useRef(outline); outlineRef.current = outline;
  const indexRef = useRef(index); indexRef.current = index;

  const reload = useCallback(async () => {
    try {
      const [idx, ol, kv, sk, lg, art] = await Promise.all([loadIndex(), loadOutline(), db.getAllKV(), db.getAll<SkillRecord>('skills'), db.getAll<LogEntry>('log'), db.getAll('art')]);
      setIndex(idx); setOutline(ol);
      setSettings({ ...DEFAULT_SETTINGS, ...((kv.settings as Partial<Settings>) ?? {}) });
      setSkills(Object.fromEntries(sk.map((s) => [s.skillId, s])));
      setLog(lg);
      setArtCount(art.length);
      setAchievements((kv.achievements as Record<string, number>) ?? {});
      setReady(true);
      db.requestPersistence();
    } catch (e) {
      setError((e as Error).message);
    }
  }, []);

  useEffect(() => { reload(); }, [reload]);

  const worldOfSubject = useCallback((s: string) => indexRef.current?.worlds.find((w) => w.subjects.some((x) => x.id === s))?.id, []);

  const checkAchievements = useCallback(async (skillsNow: SkillMap, logNow: LogEntry[], artNow: number) => {
    const idx = indexRef.current;
    if (!idx) return;
    const next = evaluate({ skills: Object.values(skillsNow), log: logNow, artCount: artNow, worldOfSubject, worldIds: idx.worlds.map((w) => w.id) }, achRef.current);
    const newly = Object.keys(next).filter((k) => !achRef.current[k]);
    if (newly.length) {
      achRef.current = next;
      setAchievements(next);
      setFresh((f) => [...f, ...newly]);
      await db.put('kv', next, 'achievements');
    }
  }, [worldOfSubject]);

  const addLog = useCallback(async (e: Omit<LogEntry, 'at'>) => {
    const entry: LogEntry = { ...e, at: Date.now() };
    await db.put('log', entry);
    const lg = [...logRef.current, entry];
    logRef.current = lg;
    setLog(lg);
    await checkAchievements(skillsRef.current, lg, artRef.current);
  }, [checkAchievements]);

  const saveSettings = useCallback(async (s: Settings) => {
    settingsRef.current = s;
    setSettings(s);
    await db.put('kv', s, 'settings');
  }, []);

  /** Auto-advance subjects that are ready, if enabled. */
  const maybeAdvance = useCallback(async (skillsNow: SkillMap) => {
    const ol = outlineRef.current;
    const st = settingsRef.current;
    if (!ol || !st.autoAdvance) return;
    const ready = readyToAdvance(ol, st, skillsNow);
    if (!ready.length) return;
    const subjectStages = { ...st.subjectStages };
    for (const r of ready) subjectStages[r.subjectId] = r.to;
    await saveSettings({ ...st, subjectStages });
    for (const r of ready) await addLog({ type: 'stage-up', subjectId: r.subjectId, detail: `${r.from}→${r.to}` });
  }, [saveSettings, addLog]);

  const mutateSkill = useCallback(async (lessonId: string, fn: (r: SkillRecord) => SkillRecord) => {
    const id = skillIdOf(lessonId);
    const prev = skillsRef.current[id] ?? newSkill(id, lessonId);
    const next = fn(prev);
    await db.put('skills', next);
    const map = { ...skillsRef.current, [id]: next };
    skillsRef.current = map;
    setSkills(map);
    if (next.stage !== prev.stage) await maybeAdvance(map);
    await checkAchievements(map, logRef.current, artRef.current);
  }, [checkAchievements, maybeAdvance]);

  const store: Store = useMemo(() => ({
    ready, error, index, outline, settings, skills, log, artCount, achievements, fresh, parentUnlockedUntil,
    dismissFresh: () => setFresh([]),
    unlockParent: () => setParentUnlockedUntil(Date.now() + 15 * 60 * 1000),
    lockParent: () => setParentUnlockedUntil(0),
    updateSettings: (patch) => saveSettings({ ...settingsRef.current, ...patch }),
    setSubjectStage: (subjectId, stage) => saveSettings({ ...settingsRef.current, subjectStages: { ...settingsRef.current.subjectStages, [subjectId]: stage } }),
    introduce: async (lessonId) => {
      await mutateSkill(lessonId, (r) => markIntroduced(r));
      await addLog({ type: 'lesson-open', lessonId, subjectId: lessonId.split('.')[0] });
    },
    practice: (lessonId, results) => mutateSkill(lessonId, (r) => recordItems(r, results)),
    assess: async (lessonId, results, intervals) => {
      await mutateSkill(lessonId, (r) => ensureScheduled(recordAssessment(r, results), intervals));
      const score = results.filter((x) => x.correct && x.wrongTries === 0).length / Math.max(1, results.length);
      await addLog({ type: 'assessment', lessonId, subjectId: lessonId.split('.')[0], score });
    },
    revise: async (lessonId, results, intervals) => {
      const score = results.filter((x) => x.correct && x.wrongTries === 0).length / Math.max(1, results.length);
      await mutateSkill(lessonId, (r) => schedule(recordRetention(r, results), intervals, score));
      await addLog({ type: 'revision', lessonId, subjectId: lessonId.split('.')[0], score });
    },
    explain: async (lessonId, level) => {
      await mutateSkill(lessonId, (r) => recordExplain(r, level));
      await addLog({ type: 'explain', lessonId, subjectId: lessonId.split('.')[0], score: level / 2 });
    },
    apply: async (lessonId, level) => {
      await mutateSkill(lessonId, (r) => recordApply(r, level));
      await addLog({ type: 'apply', lessonId, subjectId: lessonId.split('.')[0], score: level / 2 });
    },
    completeLesson: (lessonId, seconds) => addLog({ type: 'lesson-complete', lessonId, subjectId: lessonId.split('.')[0], seconds }),
    addLog,
    refreshArt: async () => {
      const n = (await db.getAll('art')).length;
      artRef.current = n;
      setArtCount(n);
      await checkAchievements(skillsRef.current, logRef.current, n);
    },
    reload,
    resetProgress: async () => {
      await Promise.all([db.clear('skills'), db.clear('log'), db.del('kv', 'achievements')]);
      await reload();
    },
  }), [ready, error, index, outline, settings, skills, log, artCount, achievements, fresh, parentUnlockedUntil, saveSettings, mutateSkill, addLog, reload, checkAchievements]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export const achievementDef = (id: string) => ACHIEVEMENTS.find((a) => a.id === id);
