import { describe, it, expect } from 'vitest';
import { newSkill, markIntroduced, recordItems, recordAssessment, recordExplain, recordApply, recordRetention, computeStage, nextStepHint, DAY } from '../src/engine/mastery.ts';
import type { ItemResult } from '../src/engine/types.ts';

const right = (n: number): ItemResult[] => Array.from({ length: n }, (_, i) => ({ itemId: `i${i}`, correct: true, wrongTries: 0, usedHint: false }));
const wrong = (n: number): ItemResult[] => Array.from({ length: n }, (_, i) => ({ itemId: `w${i}`, correct: false, wrongTries: 2, usedHint: true }));
const L = 'number-sense.s4.counting-to-ten.touch-and-count';
const T0 = Date.UTC(2026, 0, 1);

describe('mastery stages', () => {
  it('starts at 0 and becomes Introduction when opened', () => {
    const r = newSkill('sk.' + L, L, T0);
    expect(r.stage).toBe(0);
    expect(markIntroduced(r, T0).stage).toBe(1);
  });

  it('reaches Recognition only with enough accurate practice', () => {
    let r = markIntroduced(newSkill('sk.' + L, L, T0), T0);
    r = recordItems(r, right(2), T0);
    expect(r.stage).toBe(1); // too few attempts
    r = recordItems(r, right(2), T0);
    expect(r.stage).toBe(2);
  });

  it('does not grant Understanding for a perfect quiz without an explanation', () => {
    let r = markIntroduced(newSkill('sk.' + L, L, T0), T0);
    r = recordItems(r, right(4), T0);
    r = recordAssessment(r, right(3), T0);
    expect(r.stage).toBe(2);
    r = recordExplain(r, 1, T0);
    expect(r.stage).toBe(3);
  });

  it('requires application for stage 4 and retention + independent explanation for Mastery', () => {
    let r = markIntroduced(newSkill('sk.' + L, L, T0), T0);
    r = recordItems(r, right(4), T0);
    r = recordAssessment(r, right(3), T0);
    r = recordExplain(r, 1, T0);
    r = recordApply(r, 1, T0);
    expect(r.stage).toBe(4);
    // retention too soon does not count
    r = recordRetention(r, right(4), T0 + 1 * DAY);
    expect(r.stage).toBe(4);
    r = recordRetention(r, right(4), T0 + 5 * DAY);
    expect(r.stage).toBe(4); // still needs an independent explanation
    r = recordExplain(r, 2, T0 + 5 * DAY);
    expect(r.stage).toBe(5);
  });

  it('hint-heavy correct answers lower independence and block Understanding', () => {
    let r = markIntroduced(newSkill('sk.' + L, L, T0), T0);
    const hinted: ItemResult[] = Array.from({ length: 6 }, (_, i) => ({ itemId: `h${i}`, correct: true, wrongTries: 0, usedHint: true }));
    r = recordItems(r, hinted, T0);
    r = recordAssessment(r, right(2).concat(wrong(0)), T0);
    r = recordExplain(r, 2, T0);
    expect(r.stage).toBe(2);
    expect(nextStepHint(r)).toMatch(/first-try/);
  });

  it('a failed retention check caps the skill at Understanding', () => {
    let r = markIntroduced(newSkill('sk.' + L, L, T0), T0);
    r = recordItems(r, right(5), T0);
    r = recordAssessment(r, right(3), T0);
    r = recordExplain(r, 2, T0);
    r = recordApply(r, 2, T0);
    expect(r.stage).toBe(4);
    r = recordRetention(r, wrong(4), T0 + 7 * DAY);
    expect(r.stage).toBe(3);
    expect(computeStage(r)).toBe(3);
  });

  it('never mutates the input record', () => {
    const r = markIntroduced(newSkill('sk.' + L, L, T0), T0);
    const copy = JSON.stringify(r);
    recordItems(r, right(3), T0);
    recordExplain(r, 2, T0);
    expect(JSON.stringify(r)).toBe(copy);
  });
});
