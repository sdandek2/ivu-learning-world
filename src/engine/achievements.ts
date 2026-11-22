/**
 * Achievements — rule-based badges computed from skills, activity log and artworks.
 * Badges celebrate effort, breadth, explaining and remembering — not just right answers.
 */
import type { SkillRecord, LogEntry } from './types.ts';
import { DAY } from './mastery.ts';

export interface AchievementDef { id: string; title: string; icon: string; description: string }
export interface AchievementContext { skills: SkillRecord[]; log: LogEntry[]; artCount: number; worldOfSubject: (s: string) => string | undefined; worldIds: string[] }

export const ACHIEVEMENTS: (AchievementDef & { test: (c: AchievementContext) => boolean })[] = [
  { id: 'first-step', title: 'First Step', icon: '👣', description: 'Opened your very first lesson.', test: (c) => c.skills.some((s) => s.introducedAt) },
  { id: 'five-lessons', title: 'Curious Explorer', icon: '🧭', description: 'Finished 5 lessons.', test: (c) => completedLessons(c.log) >= 5 },
  { id: 'twenty-lessons', title: 'Brave Adventurer', icon: '🏕️', description: 'Finished 20 lessons.', test: (c) => completedLessons(c.log) >= 20 },
  { id: 'three-worlds', title: 'World Hopper', icon: '🪐', description: 'Learned something in 3 different worlds.', test: (c) => worldsVisited(c).size >= 3 },
  { id: 'all-worlds', title: 'Universe Voyager', icon: '🌌', description: 'Learned something in all 12 worlds.', test: (c) => worldsVisited(c).size >= c.worldIds.length },
  { id: 'explainer', title: 'Great Explainer', icon: '🗣️', description: 'Explained an idea all by yourself.', test: (c) => c.skills.some((s) => s.explain.some((e) => e.level === 2)) },
  { id: 'maker', title: 'Maker', icon: '🛠️', description: 'Finished a project or experiment.', test: (c) => c.skills.some((s) => s.apply.some((e) => e.level >= 1)) },
  { id: 'five-makes', title: 'Inventor', icon: '🔧', description: 'Finished 5 projects or experiments.', test: (c) => c.skills.filter((s) => s.apply.some((e) => e.level >= 1)).length >= 5 },
  { id: 'rememberer', title: 'Super Memory', icon: '🧠', description: 'Remembered a lesson after a few days.', test: (c) => c.skills.some((s) => s.retention.some((r) => r.gapDays >= 1 && r.score >= 0.8)) },
  { id: 'understood', title: 'Lightbulb', icon: '💡', description: 'Reached Understanding in a skill.', test: (c) => c.skills.some((s) => s.stage >= 3) },
  { id: 'first-mastery', title: 'Master', icon: '🏆', description: 'Mastered a skill.', test: (c) => c.skills.some((s) => s.stage === 5) },
  { id: 'artist', title: 'Artist', icon: '🎨', description: 'Saved a creation in the Creative Studio.', test: (c) => c.artCount >= 1 },
  { id: 'gallery', title: 'Gallery Owner', icon: '🖼️', description: 'Saved 10 creations.', test: (c) => c.artCount >= 10 },
  { id: 'arena', title: 'Challenger', icon: '⚔️', description: 'Played in the Challenge Arena.', test: (c) => c.log.some((l) => l.type === 'arena') },
  { id: 'arena-star', title: 'Arena Star', icon: '🌟', description: 'Scored 100% in a Challenge Arena round.', test: (c) => c.log.some((l) => l.type === 'arena' && (l.score ?? 0) >= 1) },
  { id: 'streak-3', title: 'Three in a Row', icon: '🔥', description: 'Learned on 3 days in a row.', test: (c) => streakDays(c.log) >= 3 },
  { id: 'streak-7', title: 'Week of Wonder', icon: '📅', description: 'Learned on 7 days in a row.', test: (c) => streakDays(c.log) >= 7 },
  { id: 'level-up', title: 'Level Up', icon: '⬆️', description: 'Moved up to the next age stage in a subject.', test: (c) => c.log.some((l) => l.type === 'stage-up') },
];

export const completedLessons = (log: LogEntry[]) => new Set(log.filter((l) => l.type === 'lesson-complete').map((l) => l.lessonId)).size;

function worldsVisited(c: AchievementContext): Set<string> {
  const s = new Set<string>();
  for (const k of c.skills) if (k.introducedAt) { const w = c.worldOfSubject(k.subjectId); if (w) s.add(w); }
  return s;
}

const dayKey = (t: number) => { const d = new Date(t); return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; };

/** Consecutive days with learning activity, ending today or yesterday. */
export function streakDays(log: LogEntry[], now = Date.now()): number {
  const days = new Set(log.filter((l) => l.type !== 'art').map((l) => dayKey(l.at)));
  let t = now;
  if (!days.has(dayKey(t))) t -= DAY;
  let n = 0;
  while (days.has(dayKey(t))) { n++; t -= DAY; }
  return n;
}

export function evaluate(c: AchievementContext, already: Record<string, number>, now = Date.now()): Record<string, number> {
  const out = { ...already };
  for (const a of ACHIEVEMENTS) if (!out[a.id] && a.test(c)) out[a.id] = now;
  return out;
}
