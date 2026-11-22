/**
 * Pre-renders IVU's narration with a speech engine, once, into audio files the app plays like
 * recordings. Output (generated, not committed — see .gitignore):
 *   public/narration/rendered/<lineId>.m4a
 *   public/narration/rendered.json
 *
 *   node scripts/render-narration.ts [options]
 *     --engine say|piper     say = macOS built-in voices (default); piper = local neural model
 *     --voice NAME           say: voice name (default "Tara", Indian English)
 *     --model PATH           piper: path to the .onnx voice model
 *     --rate N               say: words per minute (default 165)
 *     --stages s4,s5         only lines used at these stages (Buddy's lines are always included)
 *     --tier human|rendered  only lines in this tier of the hybrid plan (default: both)
 *     --limit N              stop after N new files (for samples)
 *     --jobs N               parallel renders (default 4)
 *     --force                re-render everything (e.g. after changing voice)
 *
 * Lines that already have a human recording (IVU Reads or public/narration/human.json) are
 * skipped. Rendering is resumable: existing files for the same voice are kept. Pronunciation
 * fixes go in curriculum/narration-lexicon.json and only change what the engine hears.
 */
import { execFile } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { setClipMap } from '../src/lib/ivuReads.ts';
import { resolveNarration, setNarrationCatalogs, type NarrationCatalogFile } from '../src/lib/narrationCatalog.ts';
import { collectLines, distinctLines, type Tier } from './narration/lines.ts';

const run = promisify(execFile);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const opt = (k: string, d?: string) => (argv.includes(`--${k}`) ? argv[argv.indexOf(`--${k}`) + 1] : d);
const ENGINE = opt('engine', 'say')!;
const VOICE = opt('voice', 'Tara')!;
const RATE = Number(opt('rate', '165'));
const MODEL = opt('model');
const STAGES = opt('stages')?.split(',');
const TIER = opt('tier') as Tier | undefined;
const LIMIT = Number(opt('limit', 'Infinity'));
const JOBS = Number(opt('jobs', '4'));
const FORCE = argv.includes('--force');

if (ENGINE === 'piper' && !MODEL) { console.error('--engine piper needs --model path/to/voice.onnx'); process.exit(2); }
const voiceId = (ENGINE === 'say' ? `say:${VOICE}@${RATE}` : `piper:${MODEL!.split('/').pop()}`) + '/aac24';

const outDir = join(root, 'public/narration/rendered');
const catPath = join(root, 'public/narration/rendered.json');
const humanPath = join(root, 'public/narration/human.json');
const read = <T,>(p: string, d: T): T => (existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : d);

let cat: NarrationCatalogFile = read(catPath, { source: 'rendered', voice: voiceId, clips: {}, stageFiles: {} });
if (FORCE || cat.voice !== voiceId) {
  if (cat.voice && cat.voice !== voiceId) console.log(`Voice changed (${cat.voice} → ${voiceId}): starting a fresh render.`);
  rmSync(outDir, { recursive: true, force: true });
  cat = { source: 'rendered', voice: voiceId, clips: {}, stageFiles: {} };
}
mkdirSync(outDir, { recursive: true });

// Human recordings win: never render what a person has already recorded.
setClipMap(JSON.parse(readFileSync(join(root, 'public/ivu-reads/clips.json'), 'utf8')).clips);
setNarrationCatalogs(read<NarrationCatalogFile | null>(humanPath, null), null);

const lexicon: Record<string, string> = read(join(root, 'curriculum/narration-lexicon.json'), { words: {} }).words ?? {};
const forEngine = (text: string) => Object.entries(lexicon).reduce((t, [w, say]) => t.replace(new RegExp(`\\b${w}\\b`, 'g'), say), text);

const all = distinctLines(collectLines(root));
const todo = all.filter((l) =>
  (!TIER || l.tier === TIER) &&
  (!STAGES || l.kind === 'buddy' || l.stages.some((s) => STAGES.includes(s))) &&
  resolveNarration(l.text)?.source !== 'recorded');

/** Speech-quality AAC: mono, 22.05 kHz, 24 kbit/s (~3 KB per second of speech). */
const encode = (src: string, file: string) =>
  run('afconvert', ['-f', 'm4af', '-d', 'aac@22050', '-c', '1', '-b', '24000', src, file])
    .catch(() => run('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-ac', '1', '-ar', '22050', '-c:a', 'aac', '-b:a', '24k', file]));

async function render(text: string, file: string) {
  const tmp = file.replace(/\.m4a$/, ENGINE === 'say' ? '.aiff' : '.wav');
  try {
    if (ENGINE === 'say') {
      await run('say', ['-v', VOICE, '-r', String(RATE), '-o', tmp, forEngine(text)]);
    } else {
      await new Promise<void>((res, rej) => {
        const p = execFile('piper', ['--model', MODEL!, '--output_file', tmp], (e) => (e ? rej(e) : res()));
        p.stdin!.end(forEngine(text));
      });
    }
    await encode(tmp, file);
  } finally { rmSync(tmp, { force: true }); }
  if (!existsSync(file) || statSync(file).size < 200) throw new Error('engine produced no audio');
}

const save = () => {
  const stageFiles: Record<string, string[]> = {};
  for (const l of all) {
    const f = cat.clips[l.text];
    if (f) for (const s of l.stages.length ? l.stages : ['all']) (stageFiles[s] ??= []).push(f);
  }
  for (const k of Object.keys(stageFiles)) stageFiles[k] = [...new Set(stageFiles[k])].sort();
  const sorted = Object.fromEntries(Object.entries(cat.clips).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(catPath, JSON.stringify({ source: 'rendered', voice: voiceId, clips: sorted, stageFiles }) + '\n');
};

let made = 0, kept = 0, failed = 0;
const queue = todo.filter((l) => {
  const rel = `rendered/${l.id}.m4a`;
  if (cat.clips[l.text] === rel && existsSync(join(root, 'public/narration', rel))) { kept++; return false; }
  return true;
}).slice(0, LIMIT);

console.log(`Rendering ${queue.length} lines with ${voiceId} (${kept} already rendered, ${todo.length} in scope, ${all.length} distinct lines in total).`);
const started = Date.now();
let next = 0;
await Promise.all(Array.from({ length: Math.max(1, JOBS) }, async () => {
  while (next < queue.length) {
    const l = queue[next++];
    const rel = `rendered/${l.id}.m4a`;
    try {
      await render(l.text, join(root, 'public/narration', rel));
      cat.clips[l.text] = rel;
      made++;
      if (made % 200 === 0) { save(); console.log(`  ${made}/${queue.length} (${Math.round((Date.now() - started) / 1000)}s)`); }
    } catch (e) {
      failed++;
      console.error(`  ✗ ${l.id} "${l.text.slice(0, 60)}": ${(e as Error).message}`);
    }
  }
}));
save();
console.log(`Done: ${made} rendered, ${kept} kept, ${failed} failed in ${Math.round((Date.now() - started) / 1000)}s. Catalogue: ${Object.keys(cat.clips).length} lines.`);
if (failed) process.exit(1);
