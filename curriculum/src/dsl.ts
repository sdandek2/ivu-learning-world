/**
 * Compact authoring DSL for curriculum content.
 *
 * Authors write subjects with these helpers; scripts/build-curriculum.ts expands them
 * into the full, validated, versioned JSON in public/curriculum/v1/.
 *
 * Item shorthands (activities `a` and assessments `q`):
 *   ch(prompt, 'opt|*correct|opt', why?)   multiple choice — `*` marks the answer
 *   tf(prompt, true|false, why?)            true / false
 *   od(prompt, 'first|second|third', why?)  put in order (authored in correct order)
 *   mt(prompt, 'left=right|left=right', why?) match pairs
 *   ct(prompt, n, why?)                     count / number answer (0–20)
 */
import type { StageId } from '../../src/curriculum/schema.ts';

export type ContextKind = 'evidence' | 'science' | 'tradition' | 'belief' | 'interpretation';

export type RawItem =
  | { kind: 'choice'; prompt: string; options: string[]; answer: number; why?: string }
  | { kind: 'truefalse'; prompt: string; answer: boolean; why?: string }
  | { kind: 'order'; prompt: string; items: string[]; why?: string }
  | { kind: 'match'; prompt: string; pairs: [string, string][]; why?: string }
  | { kind: 'count'; prompt: string; answer: number; why?: string };

export const ch = (prompt: string, opts: string, why?: string): RawItem => {
  const parts = opts.split('|').map((s) => s.trim());
  const answer = parts.findIndex((p) => p.startsWith('*'));
  if (answer < 0) throw new Error(`choice without * answer: ${prompt}`);
  return { kind: 'choice', prompt, options: parts.map((p) => p.replace(/^\*/, '').trim()), answer, why };
};
export const tf = (prompt: string, answer: boolean, why?: string): RawItem => ({ kind: 'truefalse', prompt, answer, why });
export const od = (prompt: string, items: string, why?: string): RawItem => ({
  kind: 'order', prompt, items: items.split('|').map((s) => s.trim()), why,
});
export const mt = (prompt: string, pairs: string, why?: string): RawItem => ({
  kind: 'match', prompt, why,
  pairs: pairs.split('|').map((p) => {
    const [l, r] = p.split('=').map((s) => s.trim());
    if (!l || !r) throw new Error(`bad match pair "${p}" in ${prompt}`);
    return [l, r] as [string, string];
  }),
});
export const ct = (prompt: string, answer: number, why?: string): RawItem => ({ kind: 'count', prompt, answer, why });

export interface RawLesson {
  slug: string;
  title: string;
  /** minutes (default by stage) */
  min?: number;
  /** objectives */
  o: string[];
  /** prerequisites (plain-language) */
  p: string[];
  /** explanation paragraphs */
  e: string[];
  /** context notes: [kind, text] */
  c?: [ContextKind, string][];
  /** vocabulary: 'term = meaning; term = meaning' */
  v: string;
  /** examples */
  x: string[];
  /** story [title, text] */
  s: [string, string];
  /** interactive activities */
  a: RawItem[];
  /** critical-thinking questions */
  t: string[];
  /** speaking / explaining tasks */
  k: string[];
  /** project or experiment: [title, 'material, material', 'step | step | step', safety?] — prefix title with '🧪 ' for an experiment */
  m: [string, string, string, string?];
  /** assessment items */
  q: RawItem[];
  /** mastery criteria */
  ms: string[];
}

export const L = (slug: string, title: string, body: Omit<RawLesson, 'slug' | 'title'>): RawLesson => ({ slug, title, ...body });

export interface RawUnit { slug: string; title: string; summary: string; topics: string; lessons: RawLesson[] }
/** topics: 'Topic: sub, sub; Topic: sub, sub' */
export const U = (slug: string, title: string, summary: string, topics: string, lessons: RawLesson[]): RawUnit => ({ slug, title, summary, topics, lessons });

export interface RawStage { stage: StageId; overview: string; goals: string[]; units: RawUnit[] }
export const S = (stage: StageId, overview: string, goals: string[], units: RawUnit[]): RawStage => ({ stage, overview, goals, units });

export interface RawSubject {
  id: string;
  description: string;
  structure?: { title: string; intro: string; sections: [string, string][] };
  stages: RawStage[];
}
export const subject = (s: RawSubject): RawSubject => s;
