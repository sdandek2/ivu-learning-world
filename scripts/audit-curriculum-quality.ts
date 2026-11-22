/**
 * Reproducible curriculum quality screen.
 *
 * Run: npm run audit:curriculum
 *
 * The report separates measurable coverage metrics from review findings.
 * It never rewrites authored lessons or stable IDs. Automated flags are
 * prompts for human review, not judgments of pedagogical correctness.
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { WORLDS } from '../curriculum/src/catalog.ts';
import type { RawItem, RawSubject, RawLesson } from '../curriculum/src/dsl.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = join(root, 'curriculum/src/subjects');
const stageOrder = ['s4', 's5', 's6', 's7', 's9', 's12'] as const;
const SAFETY_RISK = /\\b(coin battery|button cell|batter(?:y|ies)|electric(?:ity)?|wall socket|plug|hot water|hot|boil|flame|fire|knife|needle|scissors?|cut|glass|vinegar|baking soda|blender|grater|syringe|tweezers|iron nail|first aid|real candle|diya|torch|mirror|marbles?|pebbles?)\\b/i;

type Finding = {
  subject: string;
  stage: string;
  lessonId: string;
  lessonTitle: string;
  code: string;
  severity: 'review';
  detail: string;
};

type Metric = { lessons: number; explanationWords: number[]; storyWords: number[]; items: number; itemsWithWhy: number; lessonsWithWhy: number; lessonsWithoutWhy: number };

const wordCount = (value: string) => (value.match(/[\\p{L}\\p{N}]+(?:['’-][\\p{L}\\p{N}]+)*/gu) ?? []).length;
const kindCount = (items: RawItem[]) => new Set(items.map((item) => item.kind)).size;
const average = (values: number[]) => values.length ? Math.round(values.reduce((sum, n) => sum + n, 0) / values.length) : 0;
const emptyMetric = (): Metric => ({ lessons: 0, explanationWords: [], storyWords: [], items: 0, itemsWithWhy: 0, lessonsWithWhy: 0, lessonsWithoutWhy: 0 });

async function main() {
  if (!existsSync(sourceDir)) throw new Error(`Curriculum source directory not found: ${sourceDir}`);
  const available = new Set(readdirSync(sourceDir).filter((file) => file.endsWith('.ts')).map((file) => file.replace(/\\.ts$/, '')));
  const findings: Finding[] = [];
  const subjectStats: { subject: string; lessons: number; reviewFindings: number; feedbackCoverage: string }[] = [];
  const stageStats = Object.fromEntries(stageOrder.map((stage) => [stage, emptyMetric()])) as Record<(typeof stageOrder)[number], Metric>;
  const total = emptyMetric();

  for (const world of WORLDS) {
    for (const meta of world.subjects) {
      if (!available.has(meta.id)) {
        findings.push({ subject: meta.id, stage: 'all', lessonId: meta.id, lessonTitle: meta.title, code: 'missing-source', severity: 'review', detail: 'Subject is listed in the catalog but its authored source file is missing.' });
        continue;
      }
      const module = await import(pathToFileURL(join(sourceDir, `${meta.id}.ts`)).href);
      const subject: RawSubject = module.default;
      const before = findings.length;
      let subjectLessons = 0;
      let subjectItems = 0;
      let subjectItemsWithWhy = 0;

      for (const stage of subject.stages) {
        const stageId = stage.stage;
        for (const unit of stage.units) {
          for (const lesson of unit.lessons as RawLesson[]) {
            const lessonId = `${meta.id}.${stageId}.${unit.slug}.${lesson.slug}`;
            const activities = lesson.a ?? [];
            const assessments = lesson.q ?? [];
            const items = [...activities, ...assessments];
            const explained = items.filter((item) => Boolean(item.why?.trim())).length;
            const explanationWords = wordCount((lesson.e ?? []).join(' '));
            const storyWords = wordCount(lesson.s?.[1] ?? '');
            const projectMaterials = lesson.m?.[1] ?? '';
            const projectSteps = lesson.m?.[2] ?? '';
            const projectSafety = lesson.m?.[3]?.trim() ?? '';
            const projectText = `${projectMaterials} ${projectSteps}`;
            const add = (code: string, detail: string) => findings.push({
              subject: meta.id, stage: stageId, lessonId, lessonTitle: lesson.title, code, severity: 'review', detail,
            });

            subjectLessons += 1;
            subjectItems += items.length;
            subjectItemsWithWhy += explained;
            for (const metric of [total, stageStats[stageId]]) {
              metric.lessons += 1;
              metric.explanationWords.push(explanationWords);
              metric.storyWords.push(storyWords);
              metric.items += items.length;
              metric.itemsWithWhy += explained;
              if (explained > 0) metric.lessonsWithWhy += 1;
              else metric.lessonsWithoutWhy += 1;
            }

            if (activities.length >= 3 && kindCount(activities) === 1) {
              add('activity-variety', `All ${activities.length} practice activities use the same interaction type (${activities[0].kind}). Review whether a different mode would deepen learning.`);
            }
            if (assessments.length >= 3 && kindCount(assessments) === 1) {
              add('assessment-variety', `All ${assessments.length} assessment items use the same interaction type (${assessments[0].kind}). Consider another way to demonstrate understanding.`);
            }
            if (SAFETY_RISK.test(projectText) && !projectSafety) {
              add('project-safety', 'Project materials or steps mention a potential hazard but have no explicit safety guidance. Add age-appropriate adult-supervision and handling instructions.');
            }
            const steps = projectSteps.split('|').map((step) => step.trim()).filter(Boolean);
            if (steps.length < 3) {
              add('project-steps', `Project/experiment has only ${steps.length} actionable steps; check that a child or caregiver can follow it.`);
            }
            const prompts = items.map((item) => item.prompt.trim().toLowerCase());
            if (new Set(prompts).size !== prompts.length) {
              add('repeated-prompt', 'An activity and assessment repeat the same prompt. Consider assessing transfer rather than repeating the practice question.');
            }
          }
        }
      }

      subjectStats.push({
        subject: meta.id,
        lessons: subjectLessons,
        reviewFindings: findings.length - before,
        feedbackCoverage: subjectItems ? `${Math.round(subjectItemsWithWhy / subjectItems * 100)}% of interactive items` : 'no items',
      });
    }
  }

  const metricSummary = (metric: Metric) => ({
    lessons: metric.lessons,
    averageExplanationWords: average(metric.explanationWords),
    minExplanationWords: metric.explanationWords.length ? Math.min(...metric.explanationWords) : 0,
    averageStoryWords: average(metric.storyWords),
    minStoryWords: metric.storyWords.length ? Math.min(...metric.storyWords) : 0,
    interactiveItems: metric.items,
    itemsWithExplanatoryFeedback: metric.itemsWithWhy,
    feedbackCoveragePercent: metric.items ? Math.round(metric.itemsWithWhy / metric.items * 100) : 0,
    lessonsWithAnyExplanatoryFeedback: metric.lessonsWithWhy,
    lessonsWithNoExplanatoryFeedback: metric.lessonsWithoutWhy,
  });

  const countsByCode = Object.fromEntries([...new Set(findings.map((finding) => finding.code))].sort().map((code) => [code, findings.filter((finding) => finding.code === code).length]));
  const report = {
    reportVersion: 2,
    method: 'Deterministic structural and coverage screen. Metrics such as word counts are descriptive, not quality thresholds. Findings are human-review prompts, not expert judgments or factuality certification.',
    totals: {
      subjects: subjectStats.length,
      lessons: total.lessons,
      interactiveItems: total.items,
      findings: findings.length,
      findingsByCode: countsByCode,
      feedbackCoveragePercent: total.items ? Math.round(total.itemsWithWhy / total.items * 100) : 0,
      lessonsWithNoExplanatoryFeedback: total.lessonsWithoutWhy,
    },
    stages: Object.fromEntries(stageOrder.map((stage) => [stage, metricSummary(stageStats[stage])])),
    overall: metricSummary(total),
    subjects: subjectStats,
    findings,
  };

  const docsDir = join(root, 'docs');
  const dataDir = join(root, 'curriculum');
  mkdirSync(docsDir, { recursive: true });
  writeFileSync(join(dataDir, 'QUALITY_AUDIT.json'), JSON.stringify(report, null, 2) + '\\n');

  const lines = [
    '# Curriculum Quality Audit', '',
    '> Reproducible report. Word counts and feedback coverage are descriptive metrics, not pass/fail judgments. Findings are human-review prompts; they do not certify factual accuracy or pedagogical quality.', '',
    `**${subjectStats.length} subjects · ${total.lessons} lessons · ${total.items} interactive items · ${findings.length} review findings**`, '',
    '## Review findings by category', '',
    '| Category | Count |', '|---|---:|',
    ...Object.entries(countsByCode).map(([code, count]) => `| ${code} | ${count} |`), '',
    '## Curriculum-wide metrics', '',
    `- Explanatory feedback is present on ${report.totals.feedbackCoveragePercent}% of interactive items.`,
    `- ${total.lessonsWithoutWhy} lessons have no item-level explanatory feedback.`,
    `- Average explanation length: ${report.overall.averageExplanationWords} words; average story length: ${report.overall.averageStoryWords} words.`, '',
    '## Developmental-stage metrics', '',
    '| Stage | Lessons | Avg explanation words | Avg story words | Feedback coverage |', '|---|---:|---:|---:|---:|',
    ...stageOrder.map((stage) => {
      const m = report.stages[stage];
      return `| ${stage} | ${m.lessons} | ${m.averageExplanationWords} | ${m.averageStoryWords} | ${m.feedbackCoveragePercent}% |`;
    }), '',
    '## Subject metrics', '',
    '| Subject | Lessons | Review findings | Feedback coverage |', '|---|---:|---:|---:|',
    ...subjectStats.map((row) => `| ${row.subject} | ${row.lessons} | ${row.reviewFindings} | ${row.feedbackCoverage} |`), '',
    '## Findings', '',
    ...(findings.length
      ? findings.map((finding) => `- **[${finding.code}] ${finding.subject} / ${finding.stage} — ${finding.lessonTitle}** (${finding.lessonId}): ${finding.detail}`)
      : ['No structural review findings. Educator and factual review are still required.']),
    '',
    '## Required human review', '',
    '- Verify factual claims against authoritative, current sources, especially science, health, safety, history, economics and cultural/religious material.',
    '- Check developmental appropriateness, cognitive load, reading demand and lesson duration for each age stage.',
    '- Review stories for meaningful context, agency and connection to the lesson objective; do not pad to a word-count target.',
    '- Check whether practice and assessment test understanding and transfer, not only repeated recall.',
    '- Check all project risks and accessibility, including allergies, choking hazards, tools, heat, water, electricity and privacy.',
    '- Preserve stable lesson/item IDs and prerequisite relationships for all content edits.', '',
  ];
  writeFileSync(join(docsDir, 'CURRICULUM_QUALITY_AUDIT.md'), lines.join('\\n'));
  console.log(`Curriculum quality screen: ${subjectStats.length} subjects, ${total.lessons} lessons, ${total.items} items, ${findings.length} review findings.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
