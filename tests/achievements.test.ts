import { describe, it, expect } from 'vitest';
import { evaluate, streakDays } from '../src/engine/achievements.ts';
import { newSkill, markIntroduced, recordExplain } from '../src/engine/mastery.ts';
import type { LogEntry } from '../src/engine/types.ts';

const DAY = 86400000;
const NOW = Date.UTC(2026, 5, 10, 12);

describe('achievements', () => {
  it('awards first-step and explainer from evidence, and never re-awards', () => {
    const s = recordExplain(markIntroduced(newSkill('sk.a.s4.u.l', 'a.s4.u.l')), 2);
    const ctx = { skills: [s], log: [], artCount: 0, worldOfSubject: () => 'w', worldIds: ['w'] };
    const got = evaluate(ctx, {}, NOW);
    expect(got['first-step']).toBe(NOW);
    expect(got['explainer']).toBe(NOW);
    expect(got['all-worlds']).toBe(NOW);
    const again = evaluate(ctx, got, NOW + 1000);
    expect(again['first-step']).toBe(NOW);
  });
  it('counts consecutive learning days', () => {
    const log: LogEntry[] = [0, 1, 2, 4].map((d) => ({ at: NOW - d * DAY, type: 'lesson-open' }));
    expect(streakDays(log, NOW)).toBe(3);
    expect(streakDays([{ at: NOW - DAY, type: 'lesson-open' }], NOW)).toBe(1);
    expect(streakDays([], NOW)).toBe(0);
  });
});
