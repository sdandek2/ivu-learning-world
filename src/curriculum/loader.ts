/**
 * Lazy curriculum loader. The small index loads first; each subject's full content
 * loads on demand and is validated against the schema before use. Results are memoised;
 * the service worker caches the files for offline use.
 */
import {
  CurriculumIndexSchema, OutlineSchema, SubjectSchema, semanticCheck,
  type CurriculumIndex, type Outline, type Subject, type Lesson, type Unit, type StageSyllabus,
} from './schema.ts';

const BASE = `${import.meta.env.BASE_URL ?? './'}curriculum/v1/`;
const cache = new Map<string, Promise<unknown>>();

async function fetchJSON(path: string): Promise<unknown> {
  const res = await fetch(BASE + path);
  if (!res.ok) throw new Error(`Could not load ${path} (${res.status})`);
  return res.json();
}

function memo<T>(key: string, fn: () => Promise<T>): Promise<T> {
  if (!cache.has(key)) {
    const p = fn().catch((e) => { cache.delete(key); throw e; });
    cache.set(key, p);
  }
  return cache.get(key) as Promise<T>;
}

export const loadIndex = () => memo('index', async (): Promise<CurriculumIndex> => CurriculumIndexSchema.parse(await fetchJSON('index.json')));
export const loadOutline = () => memo('outline', async (): Promise<Outline> => OutlineSchema.parse(await fetchJSON('outline.json')));

export const loadSubject = (subjectId: string) =>
  memo(`subject:${subjectId}`, async (): Promise<Subject> => {
    const subject = SubjectSchema.parse(await fetchJSON(`subjects/${subjectId}.json`));
    const problems = semanticCheck(subject);
    if (problems.length) throw new Error(`Curriculum file for ${subjectId} failed validation: ${problems[0]}`);
    return subject;
  });

export const subjectIdOfLesson = (lessonId: string) => lessonId.split('.')[0];

export interface LessonContext { subject: Subject; stage: StageSyllabus; unit: Unit; lesson: Lesson; index: number; siblings: Lesson[] }

export async function loadLesson(lessonId: string): Promise<LessonContext> {
  const subject = await loadSubject(subjectIdOfLesson(lessonId));
  for (const stage of subject.stages)
    for (const unit of stage.units) {
      const index = unit.lessons.findIndex((l) => l.id === lessonId);
      if (index >= 0) return { subject, stage, unit, lesson: unit.lessons[index], index, siblings: unit.lessons };
    }
  throw new Error(`Lesson ${lessonId} not found`);
}
