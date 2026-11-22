import { describe, it, expect } from 'vitest';
import { schedule, ensureScheduled, isDue, dueSkills } from '../src/engine/revision.ts';
import { recommend, isUnlocked, readyToAdvance, openStages, placement } from '../src/engine/adaptive.ts';
import { newSkill, DAY } from '../src/engine/mastery.ts';
import { DEFAULT_SETTINGS, type SkillRecord } from '../src/engine/types.ts';
import type { Outline } from '../src/curriculum/schema.ts';

const T0 = Date.UTC(2026, 0, 1);
const iv = [1, 2, 4, 7];

describe('revision scheduling', () => {
  it('schedules the first review after the first interval', () => {
    const r = ensureScheduled(newSkill('sk.a', 'x.s4.u.a'), iv, T0);
    expect(r.revision!.box).toBe(0);
    expect(r.revision!.dueAt).toBe(T0 + 1 * DAY);
    expect(isDue(r, T0)).toBe(false);
    expect(isDue(r, T0 + DAY)).toBe(true);
  });
  it('moves up on success, back to start on failure, and caps at the last box', () => {
    let r = ensureScheduled(newSkill('sk.a', 'x.s4.u.a'), iv, T0);
    r = schedule(r, iv, 1, T0); expect(r.revision!.box).toBe(1);
    r = schedule(r, iv, 0.9, T0); expect(r.revision!.box).toBe(2);
    r = schedule(r, iv, 0.7, T0); expect(r.revision!.box).toBe(2);
    r = schedule(r, iv, 1, T0); r = schedule(r, iv, 1, T0); expect(r.revision!.box).toBe(3);
    expect(r.revision!.dueAt).toBe(T0 + 7 * DAY);
    r = schedule(r, iv, 0.2, T0); expect(r.revision!.box).toBe(0);
  });
  it('lists due skills oldest-first', () => {
    const a = { ...newSkill('sk.a', 'a'), revision: { box: 0, dueAt: T0 - 2 * DAY, intervalsDays: iv } };
    const b = { ...newSkill('sk.b', 'b'), revision: { box: 0, dueAt: T0 - 5 * DAY, intervalsDays: iv } };
    const c = { ...newSkill('sk.c', 'c'), revision: { box: 0, dueAt: T0 + 5 * DAY, intervalsDays: iv } };
    expect(dueSkills([a, b, c], T0).map((x) => x.skillId)).toEqual(['sk.b', 'sk.a']);
  });
});

const lesson = (id: string, prereq: string[] = []) => ({ id, title: id, unitId: id.split('.').slice(0, 3).join('.'), unitTitle: 'U', prereq, intervals: iv, minutes: 8 });
const outline: Outline = {
  contentVersion: '1.0.0',
  subjects: {
    math: { worldId: 'w1', stages: { s4: [lesson('math.s4.u.a'), lesson('math.s4.u.b', ['math.s4.u.a'])], s5: [lesson('math.s5.u.c')] } },
    art: { worldId: 'w2', stages: { s4: [lesson('art.s4.u.x')], s5: [lesson('art.s5.u.y')] } },
  },
};
const at = (lessonId: string, stage: SkillRecord['stage'], extra: Partial<SkillRecord> = {}): SkillRecord => ({ ...newSkill('sk.' + lessonId, lessonId), introducedAt: T0, stage, ...extra });

describe('adaptive progression', () => {
  it('locks a lesson until its prerequisite reaches Recognition', () => {
    expect(isUnlocked({ prereq: ['math.s4.u.a'] }, {})).toBe(false);
    expect(isUnlocked({ prereq: ['math.s4.u.a'] }, { 'sk.math.s4.u.a': at('math.s4.u.a', 1) })).toBe(false);
    expect(isUnlocked({ prereq: ['math.s4.u.a'] }, { 'sk.math.s4.u.a': at('math.s4.u.a', 2) })).toBe(true);
  });
  it('recommends due revisions first, then new lessons across different worlds', () => {
    const skills = { 'sk.math.s4.u.a': at('math.s4.u.a', 4, { revision: { box: 0, dueAt: T0 - DAY, intervalsDays: iv }, lastPracticedAt: T0 - 2 * DAY }) };
    const recs = recommend(outline, DEFAULT_SETTINGS, skills, { now: T0 });
    expect(recs[0]).toMatchObject({ kind: 'revise', lessonId: 'math.s4.u.a' });
    const newOnes = recs.filter((r) => r.kind === 'new');
    expect(newOnes.map((r) => r.subjectId).sort()).toEqual(['art', 'math']);
    expect(newOnes.find((r) => r.subjectId === 'math')!.lessonId).toBe('math.s4.u.b');
  });
  it('suggests the next stage once 80% of lessons reach Application', () => {
    expect(readyToAdvance(outline, DEFAULT_SETTINGS, { 'sk.math.s4.u.a': at('math.s4.u.a', 4) })).toEqual([]);
    const ready = readyToAdvance(outline, DEFAULT_SETTINGS, { 'sk.math.s4.u.a': at('math.s4.u.a', 4), 'sk.math.s4.u.b': at('math.s4.u.b', 5) });
    expect(ready).toEqual([{ subjectId: 'math', from: 's4', to: 's5' }]);
  });
  it('opens all stages up to the placement', () => {
    const s = { ...DEFAULT_SETTINGS, subjectStages: { math: 's6' as const } };
    expect(placement(s, 'math')).toBe('s6');
    expect(openStages(s, 'math')).toEqual(['s4', 's5', 's6']);
    expect(openStages(s, 'art')).toEqual(['s4']);
  });
});
