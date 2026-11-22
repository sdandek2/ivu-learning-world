/**
 * Mastery engine — pure functions, no I/O.
 *
 * Mastery is NOT a quiz score. A skill moves through five stages using five kinds of evidence:
 *   accuracy      correct answers across all practice
 *   independence  first-try correct answers without hints
 *   attempts      enough practice to trust the numbers
 *   retention     success on spaced revision after a real gap (≥ 3 days)
 *   explain/apply the child explains the idea and uses it in a project or real task
 *
 *   1 Introduction   — the lesson has been opened and explored
 *   2 Recognition    — ≥ 3 scored answers and accuracy ≥ 60% (or a Check ≥ 80% already shown)
 *   3 Understanding  — an assessment ≥ 80%, independence ≥ 60%, and explained (at least with help)
 *   4 Application    — Understanding + project/real-world application done + latest assessment ≥ 80%
 *   5 Mastery        — Application + retained after ≥ 3 days (≥ 80%) + explained independently + independence ≥ 75%
 *
 * A failed retention check (< 60%) caps the stage at Understanding until it is re-earned.
 */
import type { ItemResult, Level, MasteryStage, SkillRecord } from './types.ts';

export const DAY = 24 * 60 * 60 * 1000;

export const THRESHOLDS = {
  recognitionAttempts: 3,
  recognitionAccuracy: 0.6,
  understandingScore: 0.8,
  understandingIndependence: 0.6,
  applicationScore: 0.8,
  masteryRetentionScore: 0.8,
  masteryRetentionGapDays: 3,
  masteryIndependence: 0.75,
  retentionFail: 0.6,
};

export function newSkill(skillId: string, lessonId: string, now = Date.now()): SkillRecord {
  return {
    skillId, lessonId, subjectId: lessonId.split('.')[0],
    attempts: 0, correct: 0, firstTryCorrect: 0, itemsSeen: 0, hintsUsed: 0,
    assessments: [], retention: [], explain: [], apply: [], stage: 0, updatedAt: now,
  };
}

export const accuracy = (r: SkillRecord) => (r.attempts ? r.correct / r.attempts : 0);
export const independence = (r: SkillRecord) => (r.itemsSeen ? r.firstTryCorrect / r.itemsSeen : 0);
export const bestLevel = (xs: { level: Level }[]): Level | -1 => (xs.length ? (Math.max(...xs.map((x) => x.level)) as Level) : -1);
export const latest = <T,>(xs: T[]): T | undefined => xs[xs.length - 1];

/** Retention as a 0–1 number (latest spaced check) or null if never checked. */
export function retentionScore(r: SkillRecord): number | null {
  const last = latest(r.retention);
  return last ? last.score : null;
}

export function computeStage(r: SkillRecord): MasteryStage {
  if (!r.introducedAt) return 0;
  let stage: MasteryStage = 1;
  const T = THRESHOLDS;
  // Recognition: enough practice with decent accuracy — or a strong Check already shown,
  // so one bad later session cannot erase recognition that was clearly demonstrated.
  const bestAssessment = Math.max(0, ...r.assessments.map((a) => a.score));
  if (r.attempts >= T.recognitionAttempts && (accuracy(r) >= T.recognitionAccuracy || bestAssessment >= T.understandingScore)) stage = 2;
  else return stage;

  if (bestAssessment >= T.understandingScore && independence(r) >= T.understandingIndependence && bestLevel(r.explain) >= 1) stage = 3;
  else return stage;

  const lastRet = latest(r.retention);
  const retentionFailed = lastRet !== undefined && lastRet.score < T.retentionFail;
  if (retentionFailed) return 3;

  const lastAssessment = latest(r.assessments);
  if (bestLevel(r.apply) >= 1 && lastAssessment && lastAssessment.score >= T.applicationScore) stage = 4;
  else return stage;

  const retained = r.retention.some((x) => x.gapDays >= T.masteryRetentionGapDays && x.score >= T.masteryRetentionScore);
  if (retained && bestLevel(r.explain) === 2 && independence(r) >= T.masteryIndependence) stage = 5;
  return stage;
}

/** What evidence is still missing for the next stage — shown to parents and used by the adaptive engine. */
export function nextStepHint(r: SkillRecord): string {
  const s = computeStage(r);
  const T = THRESHOLDS;
  switch (s) {
    case 0: return 'Open the lesson to begin.';
    case 1: return `Practise activities: needs ${Math.max(0, T.recognitionAttempts - r.attempts)} more answers and ≥ 60% accuracy (now ${Math.round(accuracy(r) * 100)}%).`;
    case 2: {
      const needs: string[] = [];
      if (Math.max(0, ...r.assessments.map((a) => a.score)) < T.understandingScore) needs.push('score ≥ 80% on the Check');
      if (independence(r) < T.understandingIndependence) needs.push('more first-try answers without hints');
      if (bestLevel(r.explain) < 1) needs.push('explain the idea in Think & Talk');
      return 'Next: ' + needs.join(', ') + '.';
    }
    case 3: {
      const lastRet = latest(r.retention);
      if (lastRet && lastRet.score < T.retentionFail) return 'Revise this skill — the last revision check showed it needs another look.';
      const needs: string[] = [];
      if (bestLevel(r.apply) < 1) needs.push('do the project or experiment');
      const la = latest(r.assessments);
      if (!la || la.score < T.applicationScore) needs.push('pass the Check again (≥ 80%)');
      return 'Next: ' + needs.join(', ') + '.';
    }
    case 4: {
      const needs: string[] = [];
      if (!r.retention.some((x) => x.gapDays >= T.masteryRetentionGapDays && x.score >= T.masteryRetentionScore)) needs.push('pass a revision check after at least 3 days');
      if (bestLevel(r.explain) < 2) needs.push('explain it all by themselves');
      if (independence(r) < T.masteryIndependence) needs.push('more independent answers');
      return 'Next: ' + needs.join(', ') + '.';
    }
    default: return 'Mastered — keep it fresh with occasional revision.';
  }
}

// ---------- Evidence updates (return new records; never mutate) ----------

export function markIntroduced(r: SkillRecord, now = Date.now()): SkillRecord {
  const n = { ...r, introducedAt: r.introducedAt ?? now, lastPracticedAt: now, updatedAt: now };
  return { ...n, stage: computeStage(n) };
}

/** Item-level practice: activities, arena questions. */
export function recordItems(r: SkillRecord, results: ItemResult[], now = Date.now()): SkillRecord {
  if (!results.length) return r;
  const n: SkillRecord = { ...r, introducedAt: r.introducedAt ?? now, lastPracticedAt: now, updatedAt: now };
  for (const x of results) {
    n.attempts += 1 + x.wrongTries;
    n.correct += x.correct ? 1 : 0;
    n.itemsSeen += 1;
    n.firstTryCorrect += x.correct && x.wrongTries === 0 && !x.usedHint ? 1 : 0;
    n.hintsUsed += x.usedHint ? 1 : 0;
  }
  n.stage = computeStage(n);
  return n;
}

const runOf = (results: ItemResult[], now: number) => {
  const items = results.length || 1;
  return {
    at: now,
    items: results.length,
    score: results.filter((x) => x.correct && x.wrongTries === 0).length / items,
    independence: results.filter((x) => x.correct && x.wrongTries === 0 && !x.usedHint).length / items,
  };
};

/** A full assessment ("Check") run. Score counts first-try answers only. */
export function recordAssessment(r: SkillRecord, results: ItemResult[], now = Date.now()): SkillRecord {
  const n = recordItems(r, results, now);
  const out = { ...n, assessments: [...n.assessments, runOf(results, now)].slice(-10) };
  return { ...out, stage: computeStage(out) };
}

/** A spaced revision check. Gap is measured from the last practice before this check. */
export function recordRetention(r: SkillRecord, results: ItemResult[], now = Date.now()): SkillRecord {
  const gapDays = r.lastPracticedAt ? (now - r.lastPracticedAt) / DAY : 0;
  const n = recordItems(r, results, now);
  const out = { ...n, retention: [...n.retention, { ...runOf(results, now), gapDays }].slice(-10) };
  return { ...out, stage: computeStage(out) };
}

export function recordExplain(r: SkillRecord, level: Level, now = Date.now()): SkillRecord {
  const n = { ...r, introducedAt: r.introducedAt ?? now, explain: [...r.explain, { at: now, level }].slice(-10), updatedAt: now };
  return { ...n, stage: computeStage(n) };
}

export function recordApply(r: SkillRecord, level: Level, now = Date.now()): SkillRecord {
  const n = { ...r, introducedAt: r.introducedAt ?? now, apply: [...r.apply, { at: now, level }].slice(-10), updatedAt: now };
  return { ...n, stage: computeStage(n) };
}
