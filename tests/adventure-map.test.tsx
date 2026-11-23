import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { worldProgress } from '../src/engine/worldProgress.ts';
import { newSkill } from '../src/engine/mastery.ts';
import { DEFAULT_SETTINGS, type SkillRecord } from '../src/engine/types.ts';
import type { Outline, World } from '../src/curriculum/schema.ts';
import { LAYOUTS, WORLD_ORDER, roadSegments } from '../src/ui/adventureScenery.tsx';

const lesson = (id: string) => ({ id, title: id, unitId: id.split('.').slice(0, 3).join('.'), unitTitle: 'U', prereq: [], intervals: [1, 2], minutes: 8 });
const outline: Outline = {
  contentVersion: '1.0.0',
  subjects: {
    a: { worldId: 'w', stages: { s4: [lesson('a.s4.u.1'), lesson('a.s4.u.2')], s5: [lesson('a.s5.u.3')] } },
    b: { worldId: 'w', stages: { s4: [lesson('b.s4.u.4')] } },
  },
};
const world = (files = true): World => ({
  id: 'w', title: 'W', domain: 'D', tagline: 'T', guide: 'G', scene: 'woods',
  colors: { sky: '#fff', land: '#0a0', accent: '#ff0', ink: '#000' },
  subjects: [{ id: 'a', title: 'A', icon: 'x', tagline: 't', units: 1, lessons: 2, file: files ? 'subjects/a.json' : undefined }, { id: 'b', title: 'B', icon: 'x', tagline: 't', units: 1, lessons: 1, file: files ? 'subjects/b.json' : undefined }],
} as unknown as World);
const at = (lessonId: string, stage: SkillRecord['stage']) => ({ ['sk.' + lessonId]: { ...newSkill('sk.' + lessonId, lessonId), stage } });

describe('world progress on the map', () => {
  it('is "new" with nothing started, measured at the learner’s current stage', () => {
    expect(worldProgress(world(), outline, DEFAULT_SETTINGS, {})).toMatchObject({ state: 'new', total: 3, understood: 0, stars: 0 });
  });
  it('is "started" once any lesson begins, with stars from lessons understood', () => {
    const p = worldProgress(world(), outline, DEFAULT_SETTINGS, { ...at('a.s4.u.1', 3), ...at('a.s4.u.2', 1) });
    expect(p).toMatchObject({ state: 'started', understood: 1, started: 2, stars: 1 });
    expect(worldProgress(world(), outline, DEFAULT_SETTINGS, { ...at('a.s4.u.1', 3), ...at('a.s4.u.2', 4) }).stars).toBe(2);
  });
  it('is "complete" with three stars when every current-stage lesson is understood', () => {
    const p = worldProgress(world(), outline, DEFAULT_SETTINGS, { ...at('a.s4.u.1', 3), ...at('a.s4.u.2', 5), ...at('b.s4.u.4', 3) });
    expect(p).toMatchObject({ state: 'complete', pct: 1, stars: 3 });
  });
  it('is "soon" (locked) only when a world has no content yet', () => {
    expect(worldProgress(world(false), outline, DEFAULT_SETTINGS, {}).state).toBe('soon');
  });
});

describe('map layouts', () => {
  const index = JSON.parse(readFileSync(join(__dirname, '../public/curriculum/v1/index.json'), 'utf8'));
  it('place every curriculum world, in curriculum order', () => {
    expect(WORLD_ORDER).toEqual(index.worlds.map((w: { id: string }) => w.id));
    for (const L of Object.values(LAYOUTS)) for (const id of WORLD_ORDER) {
      const [x, y] = L.nodes[id];
      expect(x).toBeGreaterThan(0); expect(x).toBeLessThan(L.w); expect(y).toBeGreaterThan(0); expect(y).toBeLessThan(L.h);
    }
  });
  it('keep destinations far enough apart that they never overlap', () => {
    for (const L of Object.values(LAYOUTS)) {
      const pts = WORLD_ORDER.map((id) => L.nodes[id]);
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        expect(Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1]), `${L.id} ${WORLD_ORDER[i]} / ${WORLD_ORDER[j]}`).toBeGreaterThan(L.node * 1.25);
      }
    }
  });
  it('draw one road leg from the start through each world', () => {
    const L = LAYOUTS.wide;
    expect(roadSegments([L.start, ...WORLD_ORDER.map((id) => L.nodes[id])])).toHaveLength(12);
  });
});

const navigate = vi.fn();
vi.mock('../src/lib/router.ts', () => ({ navigate: (p: string) => navigate(p) }));
vi.mock('../src/state/store.tsx', () => {
  const index = JSON.parse(require('node:fs').readFileSync(require('node:path').join(__dirname, '../public/curriculum/v1/index.json'), 'utf8'));
  return { useStore: () => ({ index, outline: null, skills: {}, settings: { ...require('../src/engine/types.ts').DEFAULT_SETTINGS, readAloud: 'off' } }) };
});

describe('AdventureMap', () => {
  it('shows all twelve worlds as buttons along the road, and opens a world when tapped', async () => {
    const { AdventureMap } = await import('../src/ui/AdventureMap.tsx');
    const { container } = render(<AdventureMap />);
    const list = screen.getByRole('list', { name: /twelve worlds/i });
    const buttons = within(list).getAllByRole('button');
    expect(buttons).toHaveLength(12);
    expect(buttons[0].getAttribute('aria-label')).toMatch(/^1\. Word Woods/);
    expect(buttons[11].getAttribute('aria-label')).toMatch(/^12\. Mind Galaxy/);
    fireEvent.click(buttons[6]);
    expect(navigate).toHaveBeenCalledWith('/world/globe-garden');
    // The landscape is decoration only.
    expect(container.querySelector('svg.am-scene')?.getAttribute('aria-hidden')).toBe('true');
  });
});
