/**
 * Every line IVU reads aloud, with a stable ID and its place in the hybrid narration plan.
 *
 *   tier "human"    → to be recorded by the IVU narrator: Buddy's lines, and ages 4–6
 *                     prompts, explanations and stories (youngest children read least).
 *                     Rendered as a stand-in until the recording arrives.
 *   tier "rendered" → pre-rendered voice is the intended long-term source.
 *
 * IDs are the first 12 hex chars of SHA-1 of the speakable text, so the same sentence used in two
 * lessons is recorded once, and an ID never changes unless the words change.
 */
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { speakable } from '../../src/lib/speech.ts';
import { allBuddyLines } from '../../src/lib/buddyLines.ts';

export const STAGE_ORDER = ['s4', 's5', 's6', 's7', 's9', 's12'] as const;
export const KINDS = ['buddy', 'prompt', 'explanation', 'story', 'example', 'vocab', 'thinking', 'option'] as const;
export type Kind = (typeof KINDS)[number];
export type Tier = 'human' | 'rendered';

export const HUMAN_STAGES = new Set(['s4', 's5']);
export const HUMAN_KINDS = new Set<Kind>(['buddy', 'prompt', 'explanation', 'story']);

export interface NarrationLine {
  id: string; text: string; kind: Kind; tier: Tier;
  stage: string; world: string; subject: string; lesson: string;
}

export const lineId = (text: string) => createHash('sha1').update(speakable(text)).digest('hex').slice(0, 12);
export const tierOf = (kind: Kind, stage: string): Tier => (kind === 'buddy' || (HUMAN_STAGES.has(stage) && HUMAN_KINDS.has(kind)) ? 'human' : 'rendered');

/** Recording/rendering priority: Buddy first, then youngest stage, then kind order above. */
export const priorityOf = (l: Pick<NarrationLine, 'kind' | 'stage'>) =>
  l.kind === 'buddy' ? 0 : 1 + STAGE_ORDER.indexOf(l.stage as (typeof STAGE_ORDER)[number]) * KINDS.length + KINDS.indexOf(l.kind);

/** All spoken lines, one entry per occurrence (a sentence used twice appears twice). */
export function collectLines(root: string): NarrationLine[] {
  const out: NarrationLine[] = [];
  for (const b of allBuddyLines()) {
    out.push({ id: lineId(b.text), text: speakable(b.text), kind: 'buddy', tier: 'human', stage: '', world: '', subject: '', lesson: b.id });
  }
  const idx = JSON.parse(readFileSync(join(root, 'public/curriculum/v1/index.json'), 'utf8'));
  for (const w of idx.worlds) for (const s of w.subjects) {
    if (!s.file) continue;
    const sub = JSON.parse(readFileSync(join(root, 'public/curriculum/v1', s.file), 'utf8'));
    for (const st of sub.stages) for (const u of st.units) for (const l of u.lessons) {
      const add = (kind: Kind, raw: string) => {
        const text = speakable(raw);
        if (text) out.push({ id: lineId(text), text, kind, tier: tierOf(kind, st.stage), stage: st.stage, world: w.id, subject: s.id, lesson: l.id });
      };
      l.explanation.forEach((x: string) => add('explanation', x));
      add('story', `${l.story.title}. ${l.story.text}`);
      for (const it of [...l.activities, ...l.assessment]) {
        add('prompt', it.prompt);
        if (it.kind === 'choice') it.options.forEach((o: string) => add('option', o));
      }
      l.vocabulary.forEach((v: { term: string; meaning: string }) => add('vocab', `${v.term}. ${v.meaning}`));
      l.examples.forEach((x: string) => add('example', x));
      l.thinking.forEach((x: string) => add('thinking', x));
    }
  }
  return out;
}

/** One entry per distinct text, keeping its highest-priority occurrence (and every stage it appears in). */
export function distinctLines(lines: NarrationLine[]): (NarrationLine & { stages: string[] })[] {
  const by = new Map<string, NarrationLine & { stages: string[] }>();
  for (const l of lines) {
    const cur = by.get(l.text);
    if (!cur) { by.set(l.text, { ...l, stages: l.stage ? [l.stage] : [] }); continue; }
    if (l.stage && !cur.stages.includes(l.stage)) cur.stages.push(l.stage);
    if (priorityOf(l) < priorityOf(cur)) Object.assign(cur, { ...l, stages: cur.stages });
    if (l.tier === 'human') cur.tier = 'human';
  }
  return [...by.values()].sort((a, b) => priorityOf(a) - priorityOf(b) || a.id.localeCompare(b.id));
}
