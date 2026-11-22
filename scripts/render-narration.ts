/**
 * Pre-renders IVU's narration with a speech engine, once, into audio files the app plays like
 * recordings. Output (generated, not committed — see .gitignore):
 *   public/narration/rendered/<lineId>.m4a|.mp3
 *   public/narration/rendered.json
 *
 *   node scripts/render-narration.ts [options]
 *     --engine say|piper|elevenlabs
 *                            say = macOS built-in voices (default, free); piper = local neural
 *                            model (free); elevenlabs = the IVU Reads voice service (paid, online)
 *     --voice NAME|ID        say: voice name (default "Tara"); elevenlabs: voice ID
 *                            (default ELEVENLABS_VOICE_ID from .env.local)
 *     --model PATH|ID        piper: path to the .onnx model; elevenlabs: model ID
 *                            (default ELEVENLABS_MODEL_ID or eleven_multilingual_v2)
 *     --rate N               say: words per minute (default 165)
 *     --list-voices          elevenlabs: list the voices on your account and stop
 *     --dry-run              show what would be rendered and the character count, then stop
 *     --yes                  allow a paid render over 2,000 characters (otherwise it stops after
 *                            printing the estimate, so nothing is spent by accident)
 *     --stages s4,s5         only lines used at these stages (Buddy's lines are always included)
 *     --tier human|rendered  only lines in this tier of the hybrid plan (default: both)
 *     --lessons a,b          only lines used in these lessons (lesson IDs; Buddy's lines included)
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

// Secrets and per-machine settings live in .env.local (git-ignored), never in the repository.
const env: Record<string, string> = { ...process.env } as Record<string, string>;
if (existsSync(join(root, '.env.local'))) {
  for (const line of readFileSync(join(root, '.env.local'), 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/);
    if (m && !env[m[1]]) env[m[1]] = m[2];
  }
}

const ENGINE = opt('engine', 'say')!;
const PAID = ENGINE === 'elevenlabs';
const VOICE = opt('voice', ENGINE === 'elevenlabs' ? env.ELEVENLABS_VOICE_ID : 'Tara')!;
const RATE = Number(opt('rate', '165'));
const MODEL = opt('model', ENGINE === 'elevenlabs' ? (env.ELEVENLABS_MODEL_ID || 'eleven_multilingual_v2') : undefined);
const EXT = ENGINE === 'elevenlabs' ? 'mp3' : 'm4a';
const DRY = argv.includes('--dry-run');
const YES = argv.includes('--yes');
const XI = 'https://api.elevenlabs.io/v1';

if (PAID && !env.ELEVENLABS_API_KEY && !DRY) {
  console.error('ElevenLabs needs ELEVENLABS_API_KEY. Put it in .env.local (git-ignored) — see docs/NARRATION.md.');
  process.exit(2);
}
if (PAID && argv.includes('--list-voices')) {
  const r = await fetch(`${XI}/voices`, { headers: { 'xi-api-key': env.ELEVENLABS_API_KEY } });
  if (!r.ok) { console.error(`ElevenLabs said ${r.status}: ${(await r.text()).slice(0, 200)}`); process.exit(1); }
  const { voices } = (await r.json()) as { voices: { voice_id: string; name: string; category: string; labels?: Record<string, string> }[] };
  for (const v of voices) console.log(`${v.voice_id}  ${v.name.padEnd(28)} ${v.category.padEnd(12)} ${Object.values(v.labels ?? {}).join(', ')}`);
  process.exit(0);
}
if (PAID && !VOICE && !DRY) { console.error('Choose the IVU Reads voice: --voice <voice id>, or ELEVENLABS_VOICE_ID in .env.local (find it with --list-voices).'); process.exit(2); }
const STAGES = opt('stages')?.split(',');
const LESSONS = opt('lessons')?.split(',');
const TIER = opt('tier') as Tier | undefined;
const LIMIT = Number(opt('limit', 'Infinity'));
const JOBS = Number(opt('jobs', opt('engine') === 'elevenlabs' ? '2' : '4'));
const FORCE = argv.includes('--force');

if (ENGINE === 'piper' && !MODEL) { console.error('--engine piper needs --model path/to/voice.onnx'); process.exit(2); }
const voiceId = ENGINE === 'elevenlabs' ? `elevenlabs:${VOICE}:${MODEL}/mp3_22050_32`
  : (ENGINE === 'say' ? `say:${VOICE}@${RATE}` : `piper:${MODEL!.split('/').pop()}`) + '/aac24';

const outDir = join(root, 'public/narration/rendered');
const catPath = join(root, 'public/narration/rendered.json');
const humanPath = join(root, 'public/narration/human.json');
const read = <T,>(p: string, d: T): T => (existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : d);

let cat: NarrationCatalogFile = read(catPath, { source: 'rendered', voice: voiceId, clips: {}, stageFiles: {} });
if (!DRY && (FORCE || cat.voice !== voiceId)) {
  if (cat.voice && cat.voice !== voiceId) console.log(`Voice changed (${cat.voice} → ${voiceId}): starting a fresh render.`);
  rmSync(outDir, { recursive: true, force: true });
  cat = { source: 'rendered', voice: voiceId, clips: {}, stageFiles: {} };
}
if (!DRY) mkdirSync(outDir, { recursive: true });

// Human recordings win: never render what a person has already recorded.
setClipMap(JSON.parse(readFileSync(join(root, 'public/ivu-reads/clips.json'), 'utf8')).clips);
setNarrationCatalogs(read<NarrationCatalogFile | null>(humanPath, null), null);

const lexicon: Record<string, string> = read(join(root, 'curriculum/narration-lexicon.json'), { words: {} }).words ?? {};
const forEngine = (text: string) => Object.entries(lexicon).reduce((t, [w, say]) => t.replace(new RegExp(`\\b${w}\\b`, 'g'), say), text);

const occurrences = collectLines(root);
const all = distinctLines(occurrences);
const inLessons = LESSONS ? new Set(occurrences.filter((o) => LESSONS.includes(o.lesson)).map((o) => o.text)) : null;
const todo = all.filter((l) =>
  (!inLessons || l.kind === 'buddy' || inLessons.has(l.text)) &&
  (!TIER || l.tier === TIER) &&
  (!STAGES || l.kind === 'buddy' || l.stages.some((s) => STAGES.includes(s))) &&
  resolveNarration(l.text)?.source !== 'recorded');

/** Speech-quality AAC: mono, 22.05 kHz, 24 kbit/s (~3 KB per second of speech). */
const encode = (src: string, file: string) =>
  run('afconvert', ['-f', 'm4af', '-d', 'aac@22050', '-c', '1', '-b', '24000', src, file])
    .catch(() => run('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-ac', '1', '-ar', '22050', '-c:a', 'aac', '-b:a', '24k', file]));

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** ElevenLabs text-to-speech, MP3 22.05 kHz 32 kbit/s, retrying politely when rate-limited. */
async function renderElevenLabs(text: string, file: string) {
  for (let attempt = 0; ; attempt++) {
    const r = await fetch(`${XI}/text-to-speech/${encodeURIComponent(VOICE)}?output_format=mp3_22050_32`, {
      method: 'POST',
      headers: { 'xi-api-key': env.ELEVENLABS_API_KEY, 'content-type': 'application/json', accept: 'audio/mpeg' },
      body: JSON.stringify({ text: forEngine(text), model_id: MODEL }),
    });
    if (r.ok) { writeFileSync(file, Buffer.from(await r.arrayBuffer())); return; }
    const body = (await r.text()).slice(0, 300);
    if ((r.status === 429 || r.status >= 500) && attempt < 5) { await sleep(2000 * 2 ** attempt); continue; }
    if (r.status === 401 || r.status === 402 || /quota|credits/i.test(body)) { stopAll = `ElevenLabs refused (${r.status}): ${body}`; }
    throw new Error(`ElevenLabs ${r.status}: ${body}`);
  }
}

async function render(text: string, file: string) {
  if (ENGINE === 'elevenlabs') {
    await renderElevenLabs(text, file);
    if (!existsSync(file) || statSync(file).size < 200) throw new Error('engine produced no audio');
    return;
  }
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
let stopAll: string | null = null;
const queue = todo.filter((l) => {
  const rel = `rendered/${l.id}.${EXT}`;
  if (cat.clips[l.text] === rel && existsSync(join(root, 'public/narration', rel))) { kept++; return false; }
  return true;
}).slice(0, LIMIT);

const chars = queue.reduce((a, l) => a + forEngine(l.text).length, 0);
console.log(`${DRY ? '[dry run] Would render' : 'Rendering'} ${queue.length} lines, ${chars.toLocaleString('en')} characters, with ${voiceId} (${kept} already rendered, ${todo.length} in scope, ${all.length} distinct lines in total).`);
if (PAID) console.log(`ElevenLabs bills by character: expect about ${chars.toLocaleString('en')} credits (fewer on half-price models such as Flash/Turbo). Check your plan's balance.`);
if (DRY) process.exit(0);
if (PAID && chars > 2000 && !YES) {
  console.error('Stopped before spending anything: this is a paid render over 2,000 characters. Re-run with --yes to go ahead.');
  process.exit(3);
}
const started = Date.now();
let next = 0;
await Promise.all(Array.from({ length: Math.max(1, JOBS) }, async () => {
  while (next < queue.length && !stopAll) {
    const l = queue[next++];
    const rel = `rendered/${l.id}.${EXT}`;
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
if (stopAll) console.error(`Stopped early — ${stopAll}`);
console.log(`Done: ${made} rendered, ${kept} kept, ${failed} failed in ${Math.round((Date.now() - started) / 1000)}s. Catalogue: ${Object.keys(cat.clips).length} lines.`);
if (failed || stopAll) process.exit(1);
