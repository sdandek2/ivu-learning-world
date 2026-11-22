/**
 * Validates every built curriculum file against the schema and semantic rules,
 * and checks that the index, outline and subject files agree with each other.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CurriculumIndexSchema, OutlineSchema, SubjectSchema, semanticCheck, STAGE_IDS, allLessons } from '../src/curriculum/schema.ts';

const dir = join(__dirname, '..', 'public', 'curriculum', 'v1');
const read = (p: string) => JSON.parse(readFileSync(join(dir, p), 'utf8'));
const index = CurriculumIndexSchema.parse(read('index.json'));
const outline = OutlineSchema.parse(read('outline.json'));
const subjects = index.worlds.flatMap((w) => w.subjects.map((s) => ({ ...s, worldId: w.id })));

describe('curriculum index', () => {
  it('has 12 worlds × 5 subjects = 60 subjects with unique ids', () => {
    expect(index.worlds).toHaveLength(12);
    expect(new Set(subjects.map((s) => s.id)).size).toBe(60);
  });
  it('declares the six developmental stages in order', () => {
    expect(index.stages.map((s) => s.id)).toEqual([...STAGE_IDS]);
  });
});

describe.each(subjects.filter((s) => s.file))('subject $id', (meta) => {
  const subject = SubjectSchema.parse(read(meta.file));
  it('passes semantic validation', () => expect(semanticCheck(subject)).toEqual([]));
  it('matches the index and outline', () => {
    expect(subject.worldId).toBe(meta.worldId);
    const lessons = [...allLessons(subject)];
    expect(lessons.length).toBe(meta.lessons);
    for (const st of STAGE_IDS) expect(outline.subjects[subject.id].stages[st].map((l) => l.id)).toEqual(subject.stages.find((s) => s.stage === st)!.units.flatMap((u) => u.lessons.map((l) => l.id)));
  });
  it('covers every stage with at least two units', () => {
    for (const st of subject.stages) expect(st.units.length).toBeGreaterThanOrEqual(2);
  });
  it('has interactive items whose answers are valid', () => {
    for (const { lesson } of allLessons(subject))
      for (const it of [...lesson.activities, ...lesson.assessment]) {
        if (it.kind === 'choice') expect(it.answer).toBeLessThan(it.options.length);
        if (it.kind === 'count') expect(it.answer).toBeGreaterThanOrEqual(0);
      }
  });
});

describe('manifest', () => {
  it('exists and agrees with the index', () => {
    const p = join(__dirname, '..', 'curriculum', 'MANIFEST.json');
    expect(existsSync(p)).toBe(true);
    const m = JSON.parse(readFileSync(p, 'utf8'));
    const complete = m.subjects.filter((s: { status: string }) => s.status === 'complete').map((s: { subject: string }) => s.subject).sort();
    expect(complete).toEqual(subjects.filter((s) => s.file).map((s) => s.id).sort());
  });
});
