/**
 * Audio coverage report: what a child hears for every spoken line, under the hybrid plan
 * (human recording → pre-rendered IVU voice → device voice). See docs/NARRATION.md.
 *
 *   node scripts/audit-audio-coverage.ts            write docs/AUDIO_COVERAGE.md
 *   node scripts/audit-audio-coverage.ts --check    also fail if a catalogue points at a missing
 *                                                   file, or a Buddy line marked "recorded" has no
 *                                                   human recording
 *   node scripts/audit-audio-coverage.ts --script recording-script.csv [--tier human|rendered|all]
 *                                                   export lines with no human recording yet, by
 *                                                   ID and priority, for a narration session
 *                                                   (default tier: human)
 *
 * Matching uses the app's own resolver (src/lib/narrationCatalog.ts), so the report shows
 * exactly what the app would play. The rendered catalogue is generated and not committed, so the
 * committed report is produced without it unless it exists locally; the "rendered" column then
 * shows what the current checkout has rendered.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setClipMap } from '../src/lib/ivuReads.ts';
import { resolveNarration, setNarrationCatalogs, type NarrationCatalogFile } from '../src/lib/narrationCatalog.ts';
import { allBuddyLines } from '../src/lib/buddyLines.ts';
import { collectLines, distinctLines, STAGE_ORDER, type Kind, type NarrationLine } from './narration/lines.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const CHECK = argv.includes('--check');
const scriptOut = argv.includes('--script') ? argv[argv.indexOf('--script') + 1] : null;
const scriptTier = argv.includes('--tier') ? argv[argv.indexOf('--tier') + 1] : 'human';
const WITH_RENDERED = !argv.includes('--no-rendered');

const read = <T,>(p: string): T | null => (existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : null);
const reads = read<{ clips: Record<string, string> }>(join(root, 'public/ivu-reads/clips.json'))!;
const human = read<NarrationCatalogFile>(join(root, 'public/narration/human.json'));
const rendered = WITH_RENDERED ? read<NarrationCatalogFile>(join(root, 'public/narration/rendered.json')) : null;
const renderedLocal = WITH_RENDERED ? read<NarrationCatalogFile>(join(root, 'public/narration/rendered-local.json')) : null;
setClipMap(reads.clips);
setNarrationCatalogs(human, rendered, renderedLocal);

// ---- Catalogue integrity ----
const problems: string[] = [];
const readsFiles = Object.values(reads.clips);
const onDisk = new Set(readdirSync(join(root, 'public/ivu-reads/audio')).map((f) => 'audio/' + f));
for (const f of new Set(readsFiles)) if (!onDisk.has(f)) problems.push(`ivu-reads/clips.json points at a missing file: ${f}`);
for (const [name, cat] of [['human', human], ['rendered', rendered], ['rendered-local', renderedLocal]] as const) {
  if (cat) for (const f of new Set(Object.values(cat.clips))) if (!existsSync(join(root, 'public/narration', f))) problems.push(`narration/${name}.json points at a missing file: ${f}`);
}
const orphans = [...onDisk].filter((f) => !readsFiles.includes(f));
for (const l of allBuddyLines()) if (l.recorded && resolveNarration(l.text)?.source !== 'recorded') problems.push(`Buddy line "${l.id}" is marked recorded but has no human recording: "${l.text}"`);

// ---- Lines ----
const lines = collectLines(root);
const src = new Map<string, 'recorded' | 'rendered' | 'device'>();
const sourceOf = (t: string) => { let s = src.get(t); if (!s) { s = resolveNarration(t)?.source ?? 'device'; src.set(t, s); } return s; };
const pct = (a: number, b: number) => (b ? ((100 * a) / b).toFixed(1) + '%' : '—');
const n = (x: number) => x.toLocaleString('en');
const row = (label: string, ls: NarrationLine[]) => {
  const h = ls.filter((l) => sourceOf(l.text) === 'recorded').length;
  const r = ls.filter((l) => sourceOf(l.text) === 'rendered').length;
  return `| ${label} | ${n(ls.length)} | ${n(h)} (${pct(h, ls.length)}) | ${n(r)} (${pct(r, ls.length)}) | ${pct(ls.length - h - r, ls.length)} |`;
};
const HEAD = '| | Lines | Human voice | Rendered voice | Device voice |\n|---|---|---|---|---|';
const KIND_LABEL: Record<Kind, string> = {
  buddy: "Buddy's lines", prompt: 'Questions and instructions', explanation: 'Lesson explanations', story: 'Stories',
  example: 'Examples', vocab: 'Vocabulary', thinking: 'Think & talk questions', option: 'Answer choices',
};
const distinct = distinctLines(lines);
const humanPlan = distinct.filter((l) => l.tier === 'human');
const humanDone = humanPlan.filter((l) => sourceOf(l.text) === 'recorded').length;
const words = (ls: { text: string }[]) => ls.reduce((a, l) => a + l.text.split(/\s+/).length, 0);
const humanTodo = humanPlan.filter((l) => sourceOf(l.text) !== 'recorded');
const idx = JSON.parse(readFileSync(join(root, 'public/curriculum/v1/index.json'), 'utf8'));
const buddy = allBuddyLines();

const md = `# Audio coverage report

*Generated by \`npm run audit:audio\`. Do not edit by hand.*

What a child hears for each line read aloud, under the hybrid plan in [NARRATION.md](NARRATION.md):
a **human** recording (IVU Reads or the IVU narrator) if there is one, otherwise the **rendered**
IVU voice (pre-rendered once by \`npm run narration:render\`), otherwise the **device** voice.
Counts are per occurrence; the plan section counts distinct lines.

Rendered voice in this report: ${rendered ? `\`${rendered.voice}\`, ${n(Object.keys(rendered.clips).length)} lines` : 'none rendered in this checkout (rendered audio is generated, not committed)'}.

## Summary

${HEAD}
${row('**All lines**', lines)}

## Hybrid plan progress

| Plan | Distinct lines | Words | Done |
|---|---|---|---|
| Human voice (Buddy + ages 4–6 questions, explanations, stories) | ${n(humanPlan.length)} | ${n(words(humanPlan))} | ${n(humanDone)} recorded (${pct(humanDone, humanPlan.length)}) |
| Human recording still to do | ${n(humanTodo.length)} | ${n(words(humanTodo))} (≈${Math.round(words(humanTodo) / 150 / 60 * 10) / 10} h at 150 wpm) | — |
| Rendered voice (everything else) | ${n(distinct.length - humanPlan.length)} | ${n(words(distinct) - words(humanPlan))} | rendered when \`npm run narration:render\` runs |

IVU Reads recordings: ${readsFiles.length} (${orphans.length} audio files not referenced). IVU narrator recordings: ${human ? Object.keys(human.clips).length : 0}.

## Buddy's lines

| Line | Used for | Human recording |
|---|---|---|
${buddy.map((l) => `| ${l.text.replace(/\|/g, '\\|')} | ${l.use} | ${resolveNarration(l.text)?.source === 'recorded' ? 'yes' : '**to record**'} |`).join('\n')}

## By kind of line

${HEAD}
${(Object.keys(KIND_LABEL) as Kind[]).map((k) => row(KIND_LABEL[k], lines.filter((l) => l.kind === k))).join('\n')}

## By world

${HEAD}
${idx.worlds.map((w: { id: string; title: string }) => row(w.title, lines.filter((l) => l.world === w.id))).join('\n')}

## By stage

${HEAD}
${STAGE_ORDER.map((s) => row(idx.stages.find((x: { id: string }) => x.id === s)?.label ?? s, lines.filter((l) => l.stage === s))).join('\n')}
${problems.length ? `\n## Problems\n\n${problems.map((p) => `- ${p}`).join('\n')}\n` : ''}`;

writeFileSync(join(root, 'docs/AUDIO_COVERAGE.md'), md);
const all = lines.length, hum = lines.filter((l) => sourceOf(l.text) === 'recorded').length, ren = lines.filter((l) => sourceOf(l.text) === 'rendered').length;
console.log(`Audio coverage: human ${pct(hum, all)}, rendered ${pct(ren, all)}, device ${pct(all - hum - ren, all)} of ${n(all)} lines; human plan ${humanDone}/${humanPlan.length}; ${problems.length} problems.`);

if (scriptOut) {
  const pick = distinct.filter((l) => (scriptTier === 'all' || l.tier === scriptTier) && sourceOf(l.text) !== 'recorded');
  const q = (c: string) => `"${c.replace(/"/g, '""')}"`;
  const rows = [['id', 'tier', 'kind', 'stages', 'world', 'subject', 'first_used_in', 'text'].join(',')];
  for (const l of pick) rows.push([l.id, l.tier, l.kind, l.stages.join(' '), l.world, l.subject, l.lesson, l.text].map(q).join(','));
  writeFileSync(scriptOut, rows.join('\n') + '\n');
  console.log(`Recording script: ${pick.length} lines (${n(words(pick))} words) → ${scriptOut}`);
}

if (CHECK && problems.length) { for (const p of problems) console.error('✗ ' + p); process.exit(1); }
