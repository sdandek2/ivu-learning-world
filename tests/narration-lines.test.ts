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
