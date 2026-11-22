import { describe, it, expect } from 'vitest';
import { join } from 'node:path';
import { collectLines, distinctLines, lineId, tierOf } from '../scripts/narration/lines.ts';

const root = join(__dirname, '..');
const lines = collectLines(root);

describe('narration line inventory', () => {
  it('covers every lesson and Buddy', () => {
    expect(new Set(lines.filter((l) => l.lesson.includes('.')).map((l) => l.lesson)).size).toBeGreaterThanOrEqual(730);
    expect(lines.filter((l) => l.kind === 'buddy').length).toBeGreaterThan(10);
  });
  it('IDs are stable and ignore emoji and spacing', () => {
    expect(lineId('Which is 3?')).toBe(lineId('Which  is 3? 🍎'));
    expect(lineId('Which is 3?')).toMatch(/^[0-9a-f]{12}$/);
  });
  it('IDs do not collide across distinct lines', () => {
    const d = distinctLines(lines);
    expect(new Set(d.map((l) => l.id)).size).toBe(d.length);
  });
  it('follows the hybrid plan: human for Buddy and ages 4–6 prompts, explanations, stories', () => {
    expect(tierOf('buddy', '')).toBe('human');
    expect(tierOf('prompt', 's4')).toBe('human');
    expect(tierOf('story', 's5')).toBe('human');
    expect(tierOf('vocab', 's4')).toBe('rendered');
    expect(tierOf('prompt', 's6')).toBe('rendered');
  });
  it('a line shared by a human-tier and a rendered-tier lesson is recorded by a human', () => {
    const d = distinctLines([
      { id: 'x', text: 'Same line.', kind: 'prompt', tier: 'rendered', stage: 's9', world: '', subject: '', lesson: 'a' },
      { id: 'x', text: 'Same line.', kind: 'prompt', tier: 'human', stage: 's4', world: '', subject: '', lesson: 'b' },
    ]);
    expect(d).toHaveLength(1);
    expect(d[0]).toMatchObject({ tier: 'human', stage: 's4', stages: ['s9', 's4'] });
  });
});

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { SCREEN_LINES, projectPieces } from '../scripts/narration/lines.ts';
import { allBuddyLines } from '../src/lib/buddyLines.ts';
import { setNarrationCatalogs, resolveNarration } from '../src/lib/narrationCatalog.ts';

describe('everything the app reads aloud is in the inventory', () => {
  const files = (d: string): string[] => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? files(join(d, f)) : f.endsWith('.tsx') ? [join(d, f)] : []));
  it('every fixed SpeakButton text on any screen is a Buddy or screen line', () => {
    const known = new Set([...SCREEN_LINES, ...allBuddyLines().map((l) => l.text)]);
    const literals = files(join(root, 'src')).flatMap((f) => [...readFileSync(f, 'utf8').matchAll(/SpeakButton text="([^"]+)"/g)].map((m) => m[1]));
    expect(literals.filter((t) => !known.has(t))).toEqual([]);
  });
  it('joined lesson text plays piece by piece from one voice', () => {
    const lesson = lines.find((l) => l.kind === 'title')!;
    const expl = lines.find((l) => l.kind === 'explanation' && l.lesson === lesson.lesson)!;
    const clips = Object.fromEntries([lesson, expl].map((l, i) => [l.text, `rendered/${i}.mp3`]));
    setNarrationCatalogs(null, { source: 'rendered', voice: 't', clips });
    expect(resolveNarration(`${lesson.text}. ${expl.text}`)?.urls).toEqual(['./narration/rendered/0.mp3', './narration/rendered/1.mp3']);
    setNarrationCatalogs(null, null);
  });
  it('project steps read as the screen builds them resolve piece by piece', () => {
    const p = { title: 'Seed Jar', materials: ['a jar', 'beans'], steps: ['Put beans in the jar.', 'Add water. Wait a day.'] };
    const clips = Object.fromEntries(projectPieces(p).map((t, i) => [t, `rendered/p${i}.mp3`]));
    setNarrationCatalogs(null, { source: 'rendered', voice: 't', clips });
    const spoken = `${p.title}. You will need: ${p.materials.join(', ')}. ${p.steps.map((s, i) => `Step ${i + 1}: ${s}`).join('. ')}`;
    expect(resolveNarration(spoken)?.urls).toHaveLength(4);
    setNarrationCatalogs(null, null);
  });
});
