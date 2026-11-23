/**
 * Progress through one world, as shown on the adventure map.
 *
 * Measured at each subject's current stage for this learner (the same lessons the World page
 * shows), so a 4-year-old's map reflects the 4–5 syllabus, not all six stages.
 *
 *   soon      — no subject in the world has content yet (shown locked: "coming soon")
 *   new       — nothing started yet
 *   started   — at least one lesson begun
 *   complete  — every lesson at the current stage understood (mastery stage 3+)
 *
 * No world is ever locked for learning reasons: children may explore any world, which keeps
 * the existing navigation and curriculum behaviour unchanged.
 */
import type { Outline, World } from '../curriculum/schema.ts';
import type { Settings } from './types.ts';
import { placement, stageOfSkill, type SkillMap } from './adaptive.ts';

export type WorldState = 'soon' | 'new' | 'started' | 'complete';
export interface WorldProgress {
  worldId: string;
  total: number;
  understood: number;
  started: number;
  pct: number;
  stars: 0 | 1 | 2 | 3;
  state: WorldState;
}

export function worldProgress(world: World, outline: Outline | null, settings: Settings, skills: SkillMap): WorldProgress {
  let total = 0, understood = 0, started = 0;
  const available = world.subjects.filter((s) => s.file);
  for (const s of available) {
    const lessons = outline?.subjects[s.id]?.stages[placement(settings, s.id)] ?? [];
    total += lessons.length;
    for (const l of lessons) {
      const st = stageOfSkill(skills, l.id);
      if (st >= 3) understood++;
      if (st > 0) started++;
    }
  }
  const pct = total ? understood / total : 0;
  const stars = (pct >= 1 ? 3 : pct >= 0.5 ? 2 : understood > 0 ? 1 : 0) as WorldProgress['stars'];
  const state: WorldState = !available.length ? 'soon' : total > 0 && understood === total ? 'complete' : started > 0 ? 'started' : 'new';
  return { worldId: world.id, total, understood, started, pct, stars, state };
}
