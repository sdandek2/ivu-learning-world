/**
 * Adaptive progression — pure functions over the curriculum outline and skill records.
 *
 *  - Placement: each subject has a current stage (settings), defaulting to the learner's stage.
 *  - Unlocking: a lesson unlocks when its prerequisite lessons reach Recognition (stage 2).
 *  - Readiness: when ≥ 80% of a stage's lessons reach Application (stage 4), the next
 *    stage is suggested (or unlocked automatically if autoAdvance is on).
 *  - Recommendations ("Today's Path"): due revisions → unfinished skills → new lessons,
 *    rotating across worlds that have been visited least recently, for breadth.
 */
import { STAGE_IDS, type Outline, type OutlineLesson, type StageId } from '../curriculum/schema.ts';
import { dueSkills } from './revision.ts';
import type { Settings, SkillRecord } from './types.ts';

export const READY_FRACTION = 0.8;

export type SkillMap = Record<string, SkillRecord>;
export const skillIdOf = (lessonId: string) => `sk.${lessonId}`;
export const stageOfSkill = (skills: SkillMap, lessonId: string) => skills[skillIdOf(lessonId)]?.stage ?? 0;

export function placement(settings: Settings, subjectId: string): StageId {
  return settings.subjectStages[subjectId] ?? settings.defaultStage;
}

export function nextStage(s: StageId): StageId | null {
  const i = STAGE_IDS.indexOf(s);
  return i >= 0 && i < STAGE_IDS.length - 1 ? STAGE_IDS[i + 1] : null;
}

/** Stages the child can open for a subject: everything up to and including their placement. */
export function openStages(settings: Settings, subjectId: string): StageId[] {
  const p = STAGE_IDS.indexOf(placement(settings, subjectId));
  return STAGE_IDS.slice(0, p + 1);
}

export function isUnlocked(lesson: { prerequisiteIds?: string[]; prereq?: string[] }, skills: SkillMap): boolean {
  const pre = lesson.prerequisiteIds ?? lesson.prereq ?? [];
  return pre.every((p) => stageOfSkill(skills, p) >= 2);
}

export function stageProgress(outline: Outline, subjectId: string, stage: StageId, skills: SkillMap) {
  const lessons = outline.subjects[subjectId]?.stages[stage] ?? [];
  const counts = [0, 0, 0, 0, 0, 0];
  for (const l of lessons) counts[stageOfSkill(skills, l.id)]++;
  const applied = counts[4] + counts[5];
  return { total: lessons.length, counts, applied, ready: lessons.length > 0 && applied / lessons.length >= READY_FRACTION };
}

/** Subjects whose current stage is complete enough to move up. */
export function readyToAdvance(outline: Outline, settings: Settings, skills: SkillMap): { subjectId: string; from: StageId; to: StageId }[] {
  const out: { subjectId: string; from: StageId; to: StageId }[] = [];
  for (const subjectId of Object.keys(outline.subjects)) {
    const from = placement(settings, subjectId);
    const to = nextStage(from);
    if (to && stageProgress(outline, subjectId, from, skills).ready) out.push({ subjectId, from, to });
  }
  return out;
}

export interface Recommendation {
  kind: 'revise' | 'continue' | 'new';
  lessonId: string;
  subjectId: string;
  title: string;
  reason: string;
}

export function recommend(outline: Outline, settings: Settings, skills: SkillMap, opts: { now?: number; max?: number; worldOrder?: string[] } = {}): Recommendation[] {
  const now = opts.now ?? Date.now();
  const max = opts.max ?? 4;
  const byId = new Map<string, OutlineLesson & { subjectId: string }>();
  for (const [subjectId, s] of Object.entries(outline.subjects))
    for (const ls of Object.values(s.stages)) for (const l of ls) byId.set(l.id, { ...l, subjectId });

  const recs: Recommendation[] = [];
  const used = new Set<string>();
  const push = (r: Recommendation) => { if (!used.has(r.lessonId) && recs.length < max) { used.add(r.lessonId); recs.push(r); } };

  // 1. Due revisions (at most 2 so new learning still happens)
  for (const r of dueSkills(Object.values(skills), now).slice(0, 2)) {
    const l = byId.get(r.lessonId);
    if (l) push({ kind: 'revise', lessonId: l.id, subjectId: l.subjectId, title: l.title, reason: 'Time to remember' });
  }

  // 2. One unfinished skill that needs another go (introduced but not yet Understanding)
  const unfinished = Object.values(skills)
    .filter((r) => r.stage >= 1 && r.stage <= 2 && byId.has(r.lessonId))
    .sort((a, b) => (b.lastPracticedAt ?? 0) - (a.lastPracticedAt ?? 0));
  if (unfinished[0]) {
    const l = byId.get(unfinished[0].lessonId)!;
    push({ kind: 'continue', lessonId: l.id, subjectId: l.subjectId, title: l.title, reason: 'Keep going' });
  }

  // 3. New lessons, rotating across worlds visited least recently
  const lastSeenSubject = new Map<string, number>();
  for (const r of Object.values(skills)) lastSeenSubject.set(r.subjectId, Math.max(lastSeenSubject.get(r.subjectId) ?? 0, r.lastPracticedAt ?? 0));
  const worlds = new Map<string, string[]>();
  for (const [subjectId, s] of Object.entries(outline.subjects)) worlds.set(s.worldId, [...(worlds.get(s.worldId) ?? []), subjectId]);
  const worldLast = (w: string) => Math.max(0, ...(worlds.get(w) ?? []).map((s) => lastSeenSubject.get(s) ?? 0));
  const worldIds = (opts.worldOrder ?? [...worlds.keys()]).filter((w) => worlds.has(w));
  const orderedWorlds = [...worldIds].sort((a, b) => worldLast(a) - worldLast(b));

  for (const w of orderedWorlds) {
    if (recs.length >= max) break;
    const subjects = [...(worlds.get(w) ?? [])].sort((a, b) => (lastSeenSubject.get(a) ?? 0) - (lastSeenSubject.get(b) ?? 0));
    for (const subjectId of subjects) {
      const stage = placement(settings, subjectId);
      const next = (outline.subjects[subjectId].stages[stage] ?? []).find((l) => stageOfSkill(skills, l.id) === 0 && isUnlocked(l, skills));
      if (next) { push({ kind: 'new', lessonId: next.id, subjectId, title: next.title, reason: 'Something new' }); break; }
    }
  }
  return recs;
}
