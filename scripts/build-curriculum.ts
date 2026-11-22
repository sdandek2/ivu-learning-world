/**
 * Builds and validates the curriculum.
 *
 *   node scripts/build-curriculum.ts            build JSON + manifest
 *   node scripts/build-curriculum.ts --check    validate only (no writes), non-zero exit on error
 *   node scripts/build-curriculum.ts --strict   also fail if any of the 60 subjects is missing
 *
 * Output:
 *   public/curriculum/v1/index.json
 *   public/curriculum/v1/subjects/<subjectId>.json
 *   curriculum/MANIFEST.json and docs/CURRICULUM_MANIFEST.md  (progress tracking)
 */
import { existsSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  SCHEMA_VERSION, STAGE_IDS, SubjectSchema, CurriculumIndexSchema, semanticCheck,
  type Subject, type Item, type StageId, type CurriculumIndex,
} from '../src/curriculum/schema.ts';
import { WORLDS, STAGES, CONTENT_VERSION, SENSITIVITY } from '../curriculum/src/catalog.ts';
import type { RawSubject, RawItem, RawLesson } from '../curriculum/src/dsl.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const CHECK = args.has('--check');
const STRICT = args.has('--strict');

const MINUTES: Record<StageId, number> = { s4: 8, s5: 10, s6: 15, s7: 20, s9: 30, s12: 40 };
const REVISION: Record<StageId, number[]> = {
  s4: [1, 2, 4, 7, 14, 30], s5: [1, 2, 4, 7, 14, 30], s6: [1, 3, 7, 14, 30],
  s7: [1, 3, 7, 21, 45], s9: [2, 7, 21, 60], s12: [3, 10, 30, 90],
};
const REVISION_NOTES: Record<StageId, string> = {
  s4: 'Revisit through play: replay one activity, retell the story, and do one hands-on task. Keep revision under 5 minutes.',
  s5: 'Short playful recall: replay activities, retell in own words, spot the idea in daily life.',
  s6: 'Mixed recall: answer without looking back, explain to a family member, then re-check weak items.',
  s7: 'Retrieval first, then review notes; interleave with other units; apply in a new example.',
  s9: 'Self-test, explain the reasoning aloud, connect to other subjects, and attempt a transfer problem.',
  s12: 'Spaced retrieval with written explanations, peer-teaching, and an extension question each cycle.',
};

const split = (s: string, sep: string) => s.split(sep).map((x) => x.trim()).filter(Boolean);

function expandItem(raw: RawItem, id: string): Item {
  return { id, ...raw } as Item;
}

function expandSubject(raw: RawSubject, meta: { worldId: string; title: string; icon: string; tagline: string }): Subject {
  const stages = raw.stages.map((st) => ({
    stage: st.stage,
    overview: st.overview,
    goals: st.goals,
    units: st.units.map((u) => {
      const unitId = `${raw.id}.${st.stage}.${u.slug}`;
      let prev: string | null = null;
      const lessons = u.lessons.map((l: RawLesson) => {
        const lessonId = `${unitId}.${l.slug}`;
        const [ptitle, pmat, psteps, psafety] = l.m;
        const lesson = {
          id: lessonId,
          title: l.title,
          skillId: `sk.${lessonId}`,
          minutes: l.min ?? MINUTES[st.stage],
          objectives: l.o,
          prerequisites: l.p,
          prerequisiteIds: prev ? [prev] : [],
          explanation: l.e,
          context: (l.c ?? []).map(([kind, text]) => ({ kind, text })),
          vocabulary: split(l.v, ';').map((pair) => {
            const i = pair.indexOf('=');
            return { term: pair.slice(0, i).trim(), meaning: pair.slice(i + 1).trim() };
          }),
          examples: l.x,
          story: { title: l.s[0], text: l.s[1] },
          activities: l.a.map((it, i) => expandItem(it, `${lessonId}.a${i + 1}`)),
          thinking: l.t,
          speaking: l.k,
          project: {
            kind: ptitle.startsWith('🧪') ? ('experiment' as const) : ('project' as const),
            title: ptitle.replace(/^🧪\s*/, ''),
            materials: split(pmat, ','),
            steps: split(psteps, '|'),
            ...(psafety ? { safety: psafety } : {}),
          },
          assessment: l.q.map((it, i) => expandItem(it, `${lessonId}.q${i + 1}`)),
          mastery: l.ms,
        };
        prev = lessonId;
        return lesson;
      });
      return {
        id: unitId,
        title: u.title,
        summary: u.summary,
        topics: split(u.topics, ';').map((t) => {
          const i = t.indexOf(':');
          return i < 0 ? { title: t, subtopics: [t] } : { title: t.slice(0, i).trim(), subtopics: split(t.slice(i + 1), ',') };
        }),
        objectives: [...new Set(lessons.flatMap((l) => l.objectives))],
        masteryCriteria: [...new Set(lessons.flatMap((l) => l.mastery))],
        revision: { intervalsDays: REVISION[st.stage], notes: REVISION_NOTES[st.stage] },
        lessons,
      };
    }),
  }));
  return {
    schemaVersion: SCHEMA_VERSION,
    id: raw.id,
    worldId: meta.worldId,
    title: meta.title,
    icon: meta.icon,
    tagline: meta.tagline,
    description: raw.description,
    contentVersion: CONTENT_VERSION,
    sensitivity: SENSITIVITY[raw.id] ?? 'none',
    ...(raw.structure
      ? { structure: { title: raw.structure.title, intro: raw.structure.intro, sections: raw.structure.sections.map(([name, summary]) => ({ name, summary })) } }
      : {}),
    stages,
  };
}

interface ManifestRow {
  subject: string; world: string; status: 'complete' | 'invalid' | 'not-started';
  stages: Record<string, { units: number; lessons: number }>; units: number; lessons: number; items: number; problems: string[];
}

async function main() {
  const srcDir = join(root, 'curriculum/src/subjects');
  const outDir = join(root, 'public/curriculum/v1');
  const available = new Set(existsSync(srcDir) ? readdirSync(srcDir).filter((f) => f.endsWith('.ts')).map((f) => f.replace(/\.ts$/, '')) : []);
  const manifest: ManifestRow[] = [];
  const built: Subject[] = [];
  let failed = false;

  for (const w of WORLDS) {
    for (const s of w.subjects) {
      const row: ManifestRow = { subject: s.id, world: w.id, status: 'not-started', stages: {}, units: 0, lessons: 0, items: 0, problems: [] };
      manifest.push(row);
      if (!available.has(s.id)) {
        if (STRICT) { row.problems.push('subject file missing'); failed = true; }
        continue;
      }
      try {
        const mod = await import(pathToFileURL(join(srcDir, `${s.id}.ts`)).href);
        const raw: RawSubject = mod.default;
        if (raw.id !== s.id) throw new Error(`file ${s.id}.ts declares id ${raw.id}`);
        const subj = expandSubject(raw, { worldId: w.id, title: s.title, icon: s.icon, tagline: s.tagline });
        const parsed = SubjectSchema.safeParse(subj);
        if (!parsed.success) {
          row.problems.push(...parsed.error.issues.slice(0, 15).map((i) => `${i.path.join('.')}: ${i.message}`));
        } else {
          row.problems.push(...semanticCheck(parsed.data));
        }
        for (const st of subj.stages) {
          const lessons = st.units.reduce((n, u) => n + u.lessons.length, 0);
          row.stages[st.stage] = { units: st.units.length, lessons };
          row.units += st.units.length;
          row.lessons += lessons;
          row.items += st.units.reduce((n, u) => n + u.lessons.reduce((m, l) => m + l.activities.length + l.assessment.length, 0), 0);
        }
        if (row.problems.length) { row.status = 'invalid'; failed = true; }
        else { row.status = 'complete'; built.push(parsed.data!); }
      } catch (e) {
        row.status = 'invalid';
        row.problems.push(String((e as Error).message ?? e));
        failed = true;
      }
    }
  }

  const index: CurriculumIndex = {
    schemaVersion: SCHEMA_VERSION,
    contentVersion: CONTENT_VERSION,
    generatedAt: new Date().toISOString(),
    stages: STAGES,
    worlds: WORLDS.map((w) => ({
      id: w.id, title: w.title, domain: w.domain, tagline: w.tagline, guide: w.guide, motif: w.motif, colors: w.colors,
      subjects: w.subjects.map((s) => {
        const b = built.find((x) => x.id === s.id);
        const m = manifest.find((x) => x.subject === s.id)!;
        return { ...s, units: b ? m.units : 0, lessons: b ? m.lessons : 0, file: b ? `subjects/${s.id}.json` : '' };
      }),
    })),
  };
  const idx = CurriculumIndexSchema.safeParse(index);
  if (!idx.success) { console.error(idx.error.issues); failed = true; }

  // Report
  const done = manifest.filter((m) => m.status === 'complete');
  const bad = manifest.filter((m) => m.status === 'invalid');
  for (const b of bad) console.error(`✗ ${b.subject}\n   ${b.problems.slice(0, 12).join('\n   ')}`);
  const totals = done.reduce((a, m) => ({ units: a.units + m.units, lessons: a.lessons + m.lessons, items: a.items + m.items }), { units: 0, lessons: 0, items: 0 });
  console.log(`Curriculum v${CONTENT_VERSION}: ${done.length}/60 subjects complete, ${bad.length} invalid, ${60 - done.length - bad.length} not started`);
  console.log(`  ${totals.units} units · ${totals.lessons} lessons · ${totals.items} interactive items`);

  if (!CHECK) {
    mkdirSync(join(outDir, 'subjects'), { recursive: true });
    for (const s of built) writeFileSync(join(outDir, 'subjects', `${s.id}.json`), JSON.stringify(s));
    writeFileSync(join(outDir, 'index.json'), JSON.stringify(index, null, 1));
    writeFileSync(join(root, 'curriculum/MANIFEST.json'), JSON.stringify({ contentVersion: CONTENT_VERSION, generatedAt: index.generatedAt, totals: { ...totals, subjectsComplete: done.length, subjectsInvalid: bad.length, subjectsRemaining: 60 - done.length }, subjects: manifest }, null, 1));
    mkdirSync(join(root, 'docs'), { recursive: true });
    const lines = [
      `# Curriculum Manifest`, '',
      `Generated by \`npm run build:curriculum\` — do not edit by hand. Content version **${CONTENT_VERSION}**.`, '',
      `**${done.length}/60 subjects complete** · ${totals.units} units · ${totals.lessons} lessons · ${totals.items} interactive items`, '',
      `A subject is *complete* only when all six stages are present, every stage has at least two units, and every lesson passes schema + semantic validation (objectives, prerequisites, explanation, vocabulary, examples, story, ≥3 activities, critical-thinking questions, speaking tasks, project/experiment, ≥3 assessment items, mastery criteria; evidence/belief/tradition labels for history & heritage subjects).`, '',
      `| World | Subject | Status | ${STAGE_IDS.join(' | ')} | Lessons | Items |`,
      `|---|---|---|${STAGE_IDS.map(() => '---').join('|')}|---|---|`,
      ...manifest.map((m) => `| ${m.world} | ${m.subject} | ${m.status === 'complete' ? '✅ complete' : m.status === 'invalid' ? '❌ invalid' : '⏳ not started'} | ${STAGE_IDS.map((s) => (m.stages[s] ? `${m.stages[s].units}u/${m.stages[s].lessons}l` : '—')).join(' | ')} | ${m.lessons} | ${m.items} |`),
      '',
    ];
    writeFileSync(join(root, 'docs/CURRICULUM_MANIFEST.md'), lines.join('\n'));
  }
  if (failed) process.exit(1);
}

main();
