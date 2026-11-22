/**
 * IVU Learning World — curriculum schema.
 *
 * This file is the single source of truth for the shape of curriculum data.
 * It is used by:
 *  - the build script (scripts/build-curriculum.ts) to validate authored content,
 *  - the app at runtime to validate every JSON file it loads,
 *  - the test suite.
 *
 * Stable IDs:  <subjectId>.<stageId>.<unitSlug>.<lessonSlug>[.<a|q><n>]
 */
import { z } from 'zod';

export const SCHEMA_VERSION = 1;

export const STAGE_IDS = ['s4', 's5', 's6', 's7', 's9', 's12'] as const;
export type StageId = (typeof STAGE_IDS)[number];

export const StageIdSchema = z.enum(STAGE_IDS);

const id = z.string().regex(/^[a-z0-9][a-z0-9.-]*$/, 'ids are lowercase slugs separated by "." or "-"');
const text = z.string().trim().min(2);
/** Option-level text (answers like "3" or "🍎" are fine). */
const opt = z.string().trim().min(1);

// ---------- Interactive items (used for activities and assessments) ----------

const itemBase = {
  id,
  prompt: text,
  /** Optional explanation shown after answering — teaches, not just grades. */
  why: z.string().optional(),
};

export const ChoiceItemSchema = z.object({
  ...itemBase,
  kind: z.literal('choice'),
  options: z.array(opt).min(2).max(5),
  answer: z.number().int().nonnegative(),
});

export const TrueFalseItemSchema = z.object({
  ...itemBase,
  kind: z.literal('truefalse'),
  answer: z.boolean(),
});

export const OrderItemSchema = z.object({
  ...itemBase,
  kind: z.literal('order'),
  /** Items in the CORRECT order. The app shuffles them. */
  items: z.array(opt).min(3).max(6),
});

export const MatchItemSchema = z.object({
  ...itemBase,
  kind: z.literal('match'),
  pairs: z.array(z.tuple([opt, opt])).min(3).max(5),
});

export const CountItemSchema = z.object({
  ...itemBase,
  kind: z.literal('count'),
  answer: z.number().int().min(0).max(20),
});

export const ItemSchema = z.discriminatedUnion('kind', [
  ChoiceItemSchema,
  TrueFalseItemSchema,
  OrderItemSchema,
  MatchItemSchema,
  CountItemSchema,
]);
export type Item = z.infer<typeof ItemSchema>;
export type ItemKind = Item['kind'];

// ---------- Lesson ----------

/**
 * Context notes make the epistemic status of content explicit.
 *  evidence       — supported by historical/archaeological/scientific evidence
 *  science        — current scientific understanding
 *  tradition      — a traditional narrative, as told within a tradition
 *  belief         — a religious or spiritual belief held by followers
 *  interpretation — one way people (scholars, teachers, traditions) read a text or event
 */
export const CONTEXT_KINDS = ['evidence', 'science', 'tradition', 'belief', 'interpretation'] as const;
export const ContextNoteSchema = z.object({ kind: z.enum(CONTEXT_KINDS), text });
export type ContextNote = z.infer<typeof ContextNoteSchema>;

export const VocabSchema = z.object({ term: text, meaning: text });

export const ProjectSchema = z.object({
  kind: z.enum(['project', 'experiment']),
  title: text,
  materials: z.array(text).min(1),
  steps: z.array(text).min(2),
  safety: z.string().optional(),
});

export const LessonSchema = z.object({
  id,
  title: text,
  /** The skill this lesson builds; mastery is tracked per skill. */
  skillId: id,
  minutes: z.number().int().min(3).max(90),
  objectives: z.array(text).min(2),
  prerequisites: z.array(text).min(1),
  /** IDs of lessons that should reach "Recognition" before this one unlocks. */
  prerequisiteIds: z.array(id),
  explanation: z.array(text).min(2),
  context: z.array(ContextNoteSchema),
  vocabulary: z.array(VocabSchema).min(3),
  examples: z.array(text).min(2),
  story: z.object({ title: text, text: z.string().min(80) }),
  activities: z.array(ItemSchema).min(3),
  thinking: z.array(text).min(2),
  speaking: z.array(text).min(1),
  project: ProjectSchema,
  assessment: z.array(ItemSchema).min(3),
  mastery: z.array(text).min(2),
});
export type Lesson = z.infer<typeof LessonSchema>;

// ---------- Unit / Stage / Subject ----------

export const TopicSchema = z.object({ title: text, subtopics: z.array(opt).min(1) });

export const RevisionPlanSchema = z.object({
  /** Days after first learning when the unit should be revisited. */
  intervalsDays: z.array(z.number().int().positive()).min(3),
  notes: text,
});

export const UnitSchema = z.object({
  id,
  title: text,
  summary: text,
  topics: z.array(TopicSchema).min(1),
  objectives: z.array(text).min(2),
  masteryCriteria: z.array(text).min(2),
  revision: RevisionPlanSchema,
  lessons: z.array(LessonSchema).min(1),
});
export type Unit = z.infer<typeof UnitSchema>;

export const StageSyllabusSchema = z.object({
  stage: StageIdSchema,
  overview: text,
  goals: z.array(text).min(2),
  units: z.array(UnitSchema).min(2),
});
export type StageSyllabus = z.infer<typeof StageSyllabusSchema>;

export const StructureSchema = z.object({
  title: text,
  intro: text,
  sections: z.array(z.object({ name: text, summary: text })).min(3),
});

export const SubjectSchema = z.object({
  schemaVersion: z.literal(SCHEMA_VERSION),
  id,
  worldId: id,
  title: text,
  icon: z.string().min(1),
  tagline: text,
  description: text,
  contentVersion: z.string().regex(/^\d+\.\d+\.\d+$/),
  /** Subjects that must label historical evidence vs belief vs tradition. */
  sensitivity: z.enum(['none', 'history', 'heritage']),
  /** Optional companion structure, e.g. the Kandas of the Ramayana. */
  structure: StructureSchema.optional(),
  stages: z.array(StageSyllabusSchema).length(STAGE_IDS.length),
});
export type Subject = z.infer<typeof SubjectSchema>;

// ---------- Index (loaded first, small) ----------

export const StageMetaSchema = z.object({
  id: StageIdSchema,
  label: text,
  minAge: z.number(),
  maxAge: z.number(),
  description: text,
});
export type StageMeta = z.infer<typeof StageMetaSchema>;

export const SubjectSummarySchema = z.object({
  id,
  title: text,
  icon: z.string(),
  tagline: text,
  units: z.number().int().nonnegative(),
  lessons: z.number().int().nonnegative(),
  file: z.string(),
});
export type SubjectSummary = z.infer<typeof SubjectSummarySchema>;

export const WorldSchema = z.object({
  id,
  title: text,
  domain: text,
  tagline: text,
  guide: text,
  motif: z.string(),
  colors: z.object({ sky: z.string(), land: z.string(), accent: z.string(), ink: z.string() }),
  subjects: z.array(SubjectSummarySchema).length(5),
});
export type World = z.infer<typeof WorldSchema>;

export const CurriculumIndexSchema = z.object({
  schemaVersion: z.literal(SCHEMA_VERSION),
  contentVersion: z.string(),
  generatedAt: z.string(),
  stages: z.array(StageMetaSchema).length(STAGE_IDS.length),
  worlds: z.array(WorldSchema).length(12),
});
export type CurriculumIndex = z.infer<typeof CurriculumIndexSchema>;

// ---------- Semantic checks beyond shape ----------

const BANNED = /\b(lorem|ipsum|todo|tbd|placeholder|fixme)\b/i;

/** Returns a list of human-readable problems. Empty list = valid. */
export function semanticCheck(subject: Subject): string[] {
  const problems: string[] = [];
  const seen = new Set<string>();
  const add = (i: string) => {
    if (seen.has(i)) problems.push(`duplicate id ${i}`);
    seen.add(i);
  };
  const stagesInOrder = subject.stages.map((s) => s.stage).join(',');
  if (stagesInOrder !== STAGE_IDS.join(',')) problems.push(`stages must be ${STAGE_IDS.join(',')} in order`);

  const checkItem = (it: Item, where: string) => {
    add(it.id);
    if (it.kind === 'choice') {
      if (it.answer >= it.options.length) problems.push(`${where}: answer index out of range`);
      if (new Set(it.options).size !== it.options.length) problems.push(`${where}: duplicate options`);
    }
    if (it.kind === 'order' && new Set(it.items).size !== it.items.length) problems.push(`${where}: duplicate order items`);
    if (it.kind === 'match') {
      const l = it.pairs.map((p) => p[0]);
      const r = it.pairs.map((p) => p[1]);
      if (new Set(l).size !== l.length || new Set(r).size !== r.length) problems.push(`${where}: duplicate match sides`);
    }
  };

  for (const st of subject.stages) {
    for (const u of st.units) {
      add(u.id);
      if (!u.id.startsWith(`${subject.id}.${st.stage}.`)) problems.push(`unit ${u.id} has unstable id prefix`);
      for (const l of u.lessons) {
        add(l.id);
        if (!l.id.startsWith(u.id + '.')) problems.push(`lesson ${l.id} not under unit ${u.id}`);
        const blob = JSON.stringify(l);
        if (BANNED.test(blob)) problems.push(`${l.id}: contains placeholder text`);
        if (l.explanation.join(' ').length < 120) problems.push(`${l.id}: explanation too thin`);
        if (subject.sensitivity !== 'none' && l.context.length === 0)
          problems.push(`${l.id}: ${subject.sensitivity} subject lessons must label evidence/belief/tradition`);
        l.activities.forEach((it) => checkItem(it, it.id));
        l.assessment.forEach((it) => checkItem(it, it.id));
      }
    }
  }
  // prerequisite references must resolve
  for (const st of subject.stages)
    for (const u of st.units)
      for (const l of u.lessons)
        for (const p of l.prerequisiteIds) if (!seen.has(p)) problems.push(`${l.id}: unknown prerequisite ${p}`);
  return problems;
}

export function* allLessons(subject: Subject): Generator<{ stage: StageSyllabus; unit: Unit; lesson: Lesson }> {
  for (const stage of subject.stages) for (const unit of stage.units) for (const lesson of unit.lessons) yield { stage, unit, lesson };
}

// ---------- Outline (lightweight map of every lesson; used by the adaptive engine & parent views) ----------

export const OutlineLessonSchema = z.object({
  id,
  title: text,
  unitId: id,
  unitTitle: text,
  prereq: z.array(id),
  intervals: z.array(z.number().int().positive()),
  minutes: z.number().int(),
});
export type OutlineLesson = z.infer<typeof OutlineLessonSchema>;
export const OutlineSchema = z.object({
  contentVersion: z.string(),
  subjects: z.record(z.string(), z.object({ worldId: id, stages: z.record(z.string(), z.array(OutlineLessonSchema)) })),
});
export type Outline = z.infer<typeof OutlineSchema>;
