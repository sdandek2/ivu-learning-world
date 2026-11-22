/**
 * Spaced revision (Leitner-style boxes) driven by each unit's revision plan.
 *
 * After a lesson's Check, the skill enters box 0 and is due after intervalsDays[0].
 * A revision check ≥ 80% moves it up a box (longer gap); < 60% sends it back to box 0;
 * in between it stays in the same box. A skill that has been through every box stays
 * on the last (longest) interval.
 */
import { DAY } from './mastery.ts';
import type { SkillRecord } from './types.ts';

export function schedule(r: SkillRecord, intervalsDays: number[], score: number | null, now = Date.now()): SkillRecord {
  const prev = r.revision;
  let box = prev?.box ?? -1;
  if (score === null) box = Math.max(box, 0);
  else if (score >= 0.8) box = box + 1;
  else if (score < 0.6) box = 0;
  else box = Math.max(box, 0);
  box = Math.min(Math.max(box, 0), intervalsDays.length - 1);
  return { ...r, revision: { box, intervalsDays, dueAt: now + intervalsDays[box] * DAY }, updatedAt: now };
}

/** Start the schedule after a first Check, without resetting an existing schedule. */
export function ensureScheduled(r: SkillRecord, intervalsDays: number[], now = Date.now()): SkillRecord {
  return r.revision ? r : schedule(r, intervalsDays, null, now);
}

export function isDue(r: SkillRecord, now = Date.now()): boolean {
  return !!r.revision && r.revision.dueAt <= now;
}

export function dueSkills(records: SkillRecord[], now = Date.now()): SkillRecord[] {
  return records.filter((r) => isDue(r, now)).sort((a, b) => a.revision!.dueAt - b.revision!.dueAt);
}

export function daysUntilDue(r: SkillRecord, now = Date.now()): number | null {
  return r.revision ? Math.ceil((r.revision.dueAt - now) / DAY) : null;
}
