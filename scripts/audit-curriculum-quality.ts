/**
 * Heuristic curriculum quality audit.
 *
 * Run: npm run audit:curriculum
 *
 * This is deliberately separate from schema validation: it surfaces review
 * candidates without declaring a lesson pedagogically incorrect. It never
 * rewrites curriculum content or changes stable lesson IDs.
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { WORLDS } from '../curriculum/src/catalog.ts';
import type { RawItem, RawSubject, RawLesson } from '../curriculum/src/dsl.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = join(root, 'curriculum/src/subjects');
const stageOrder = ['s4', 's5', 's6', 's7', 's9', 's12'] as const;
const storyWordFloor: Record<(typeof stageOrder)[number], number> = {
  s4: 25, s5: 35, s6: 45, s7: 55, s9: 65, s12: 75,
};
const explanationWordFloor: Record<(typeof stageOrder)[number], number> = {
  s4: 35, s5: 45, s6: 60, s7: 80, s9: 105, s12: 130,
};

type Finding = {
  subject: string;
  stage: string;
  lessonId: string;
  lessonTitle: string;
  code: string;
  severity: 'review' | 'suggestion';
  detail: string;
};

const wordCount = (value: string) => (value.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu) ?? []).length;
const kindCounts = (items: RawItem[]) => {
  const counts: Record<string, number> = {};
  for (const item of items) counts[item.kind] = (counts[item.kind] ?? 0) + 1;
  return counts;
};
const uniqueKinds = (items: RawItem[]) => new Set(items.map((item) => item.kind)).size;
const dominantRatio = (counts: Record<string, number>, total: number) =>
  total ? Math.max(...Object.values(counts)) / total : 0;

async function main() {
  if (!existsSync(sourceDir)) throw new Error(`Curriculum source directory not found: ${sourceDir}`);
  const available = new Set(readdirSync(sourceDir).filter((file) => file.endsWith('.ts').map((file) => file.replace(/\.ts$/, ''))));
  const findings: Finding[] = [];
  const subjectStats: { subject: string; lessons: number; review: number; suggestions: number }[] = [];
  const stageStats = Object.fromEntries(stageOrder.map((stage) => [stage, { lessons: 0, findings: 0 }])) as Record<string, { lessons: number; findings: number }>;
  let lessonCount = 0;

  for (const world of WORLDS) {
    for (const meta of world.subjects) {
      if (!available.has(meta.id)) continue;
      const module = await import(pathToFileURL(join(sourceDir, `${meta.id}.ts`)).href);
      const subject: RawSubject = module.default;
      let subjectLessons = 0;
      const before = findings.length;

      for (const stage of subject.stages) {
        const stageId = stage.stage;
        for (const unit of stage.units) {
          for (const lesson of unit.lessons as RawLesson[]) {
            lessonCount += 1;
            subjectLessons += 1;
            stageStats[stageId].lessons += 1;
            const add = (code: string, severity: Finding['severity'], detail: string) => {
              findings.push({
                subject: meta.id, stage: stageId, lessonId: `${meta.id}.${stageId}.${unit.slug}.${lesson.slug}`,
                lessonTitle: lesson.title, code, severity, detail,
              });
              stageStats[stageId].findings += 1;
            };

            const activities = lesson.a ?? [];
            const assessments = lesson.q ?? [];
            const allItems = [...activities, ...assessments];
            const activityKinds = kindCounts(activities);
            const assessmentKinds = kindCounts(assessments);
            const activityRatio = dominantRatio(activityKinds, activities.length);
            const activityKindsLabel = Object.keys(activityKinds).join(', ') || 'none';

            if (uniqueKinds(activities) < 2) {
              add('activity-variety', 'review', `Activities use only ${activityKindsLabel}; consider adding a different interaction such as ordering, matching, counting or a hands-on response.`);
            } else if (activityRatio >= 0.8) {
              add('activity-concentration', 'suggestion', `One activity type makes up ${Math.round(activityRatio * 100)}% of activities (${activityKindsLabel}); consider a more balanced mix.`);
            }

            if (uniqueKinds(assessments) < 2) {
              add('assessment-variety', 'suggestion', 'Assessment uses a single interaction type; consider checking understanding in a second way.');
            }

            const withFeedback = allItems.filter((item) => Boolean(item.why?.trim())).length;
            if (allItems.length > 0 && withFeedback === 0) {
              add('answer-feedback', 'review', 'No activity or assessment item has an explanatory “why” response; add feedback that teaches the idea, not only whether the answer is right.');
            } else if (allItems.length > 0 && withFeedback / allItems.length < 0.25) {
              add('answer-feedback-coverage', 'suggestion', `Only ${withFeedback} of ${allItems.length} interactive items include explanatory feedback.`);
            }

            const storyWords = wordCount(lesson.s?.[1] ?? '');
            if (storyWords < storyWordFloor[stageId]) {
              add('story-depth', 'suggestion', `Story is ${storyWords} words; the stage review guide uses ${storyWordFloor[stageId]} words as a prompt to check for a meaningful setup, choice or discovery.`);
            }

            const explanationWords = wordCount((lesson.e ?? []).join(' '));
            if (explanationWords < explanationWordFloor[stageId]) {
              add('explanation-depth', 'review', `Explanation is ${explanationWords} words; check whether it provides enough teaching, examples and reasoning for ${stageId}.`);
            }

            const steps = (lesson.m?.[2] ?? '').split('|').map((step) => step.trim()).filter(Boolean);
            if (steps.length < 3) {
              add('project-steps', 'suggestion', `Project/experiment has ${steps.length} steps; consider a clearer sequence with at least three actionable steps.`);
            }

            const normalizedPrompts = allItems.map((item) => item.prompt.trim().toLowerCase());
            if (new Set(normalizedPrompts).size !== normalizedPrompts.length) {
              add('repeated-prompt', 'suggestion', 'An activity and assessment reuse the same prompt; consider assessing transfer rather than repeating the practice question.');
            }
          }
        }
      }

      const subjectFindings = findings.slice(before);
      subjectStats.push({
        subject: meta.id,
        lessons: subjectLessons,
        review: subjectFindings.filter((finding) => finding.severity === 'review').length,
        suggestions: subjectFindings.filter((finding) => finding.severity === 'suggestion').length,
      });
    }
  }

  const reviewCount = findings.filter((finding) => finding.severity === 'review').length;
  const suggestionCount = findings.length - reviewCount;
  const report = {
    generatedAt: new Date().toISOString(),
    method: 'Heuristic screening only; findings are review prompts, not automated judgments of pedagogical correctness.',
    totals: { subjects: subjectStats.length, lessons: lessonCount, findings: findings.length, review: reviewCount, suggestions: suggestionCount },
    stages: stageStats,
    subjects: subjectStats,
    findings,
  };

  const docsDir = join(root, 'docs');
  const dataDir = join(root, 'curriculum');
  mkdirSync(docsDir, { recursive: true });
  writeFileSync(join(dataDir, 'QUALITY_AUDIT.json'), JSON.stringify(report, null, 2) + '\n');

  const lines = [
    '# Curriculum Quality Audit', '',
    `Generated: ${report.generatedAt}`, '',
    '> This is a heuristic screening report, not an expert review or a factuality certification. Findings identify lessons worth examining; they do not prove a lesson is wrong. The audit does not modify curriculum content or IDs.', '',
    `**${subjectStats.length} subjects · ${lessonCount} lessons · ${reviewCount} review flags · ${suggestionCount} suggestions**`, '',
    '## What is checked', '',
    '- Activity interaction variety and over-concentration in one interaction type.',
    '- Variety of assessment interaction types.',
    '- Explanatory feedback (“why”) attached to interactive items.',
    '- Story and explanation depth relative to the authored age stage.',
    '- Project/experiment step clarity.',
    '- Repeated activity/assessment prompts that may test recall twice instead of transfer.', '',
    '## Stage summary', '',
    '| Stage | Lessons | Findings |', '|---|---:|---:|',
    ...stageOrder.map((stage) => `| ${stage} | ${stageStats[stage].lessons} | ${stageStats[stage].findings} |`), '',
    '## Subject summary', '',
    '| Subject | Lessons | Review flags | Suggestions |', '|---|---:|---:|---:|',
    ...subjectStats.map((row) => `| ${row.subject} | ${row.lessons} | ${row.review} | ${row.suggestions} |`), '',
    '## Findings', '',
    ...(findings.length
      ? findings.map((finding) => `- **[${finding.severity}] ${finding.subject} / ${finding.stage} — ${finding.lessonTitle}** (${finding.lessonId}) — ${finding.code}: ${finding.detail}`)
      : ['No heuristic findings. This does not replace educator review.']),
    '',
    '## Review policy', '',
    'Prioritize review flags first, then suggestions. Before changing a lesson, check factual accuracy, age appropriateness, cultural context, accessibility, and whether the activity actually measures the stated objective. Preserve all stable IDs and prerequisite relationships. Use qualified educator review for science, health, history, heritage, and safety content.', '',
  ];
  writeFileSync(join(docsDir, 'CURRICULUM_QUALITY_AUDIT.md'), lines.join('\n'));
  console.log(`Curriculum quality audit: ${subjectStats.length} subjects, ${lessonCount} lessons, ${reviewCount} review flags, ${suggestionCount} suggestions.`);
  console.log(`Reports written to docs/CURRICULUM_QUALITY_AUDIT.md and curriculum/QUALITY_AUDIT.json`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
