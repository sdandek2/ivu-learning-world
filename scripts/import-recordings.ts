/**
 * Adds the IVU narrator's human recordings to the app.
 *
 *   node scripts/import-recordings.ts <folder> [--voice "IVU narrator"] [--dry-run]
 *
 * Each file in <folder> must be named by its line ID from the recording script
 * (npm run narration:script → recording-script.csv, column "id"), e.g. 3f9a0c2b7d11.mp3.
 * Accepted: .mp3 .m4a .wav (wav is converted to m4a with afconvert or ffmpeg).
 *
 * Files are copied to public/narration/human/ and mapped in public/narration/human.json, which
 * are committed. From then on the app plays the human recording instead of the rendered stand-in.
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { NarrationCatalogFile } from '../src/lib/narrationCatalog.ts';
import { collectLines } from './narration/lines.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const folder = argv.find((a) => !a.startsWith('--'));
const voice = argv.includes('--voice') ? argv[argv.indexOf('--voice') + 1] : 'IVU narrator';
const DRY = argv.includes('--dry-run');
if (!folder || !existsSync(folder)) { console.error('Usage: node scripts/import-recordings.ts <folder-of-recordings>'); process.exit(2); }

const byId = new Map<string, string>();
for (const l of collectLines(root)) byId.set(l.id, l.text);

const catPath = join(root, 'public/narration/human.json');
const cat: NarrationCatalogFile = existsSync(catPath) ? JSON.parse(readFileSync(catPath, 'utf8')) : { source: 'human', voice, clips: {} };
if (cat.voice && cat.voice !== voice) console.warn(`note: catalogue voice is "${cat.voice}", importing as "${voice}" — keep one narrator.`);
cat.voice = cat.voice || voice;
const outDir = join(root, 'public/narration/human');
if (!DRY) mkdirSync(outDir, { recursive: true });

let added = 0, replaced = 0;
const unknown: string[] = [];
for (const f of readdirSync(folder).sort()) {
  const ext = extname(f).toLowerCase();
  if (!['.mp3', '.m4a', '.wav'].includes(ext)) continue;
  const id = basename(f, extname(f)).toLowerCase();
  const text = byId.get(id);
  if (!text) { unknown.push(f); continue; }
  const outName = `${id}${ext === '.wav' ? '.m4a' : ext}`;
  if (!DRY) {
    if (ext === '.wav') {
      try { execFileSync('afconvert', ['-f', 'm4af', '-d', 'aac@22050', join(folder, f), join(outDir, outName)]); }
      catch { execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', join(folder, f), '-ac', '1', '-b:a', '48k', join(outDir, outName)]); }
    } else copyFileSync(join(folder, f), join(outDir, outName));
  }
  if (cat.clips[text]) replaced++; else added++;
  cat.clips[text] = `human/${outName}`;
}
const sorted = Object.fromEntries(Object.entries(cat.clips).sort(([a], [b]) => a.localeCompare(b)));
if (!DRY) writeFileSync(catPath, JSON.stringify({ source: 'human', voice: cat.voice, clips: sorted }, null, 1) + '\n');
console.log(`${DRY ? '[dry run] ' : ''}Human recordings: ${added} added, ${replaced} replaced, ${Object.keys(sorted).length} in catalogue.`);
if (unknown.length) {
  console.error(`✗ ${unknown.length} file(s) do not match any current line ID (text changed, or a typo): ${unknown.slice(0, 10).join(', ')}${unknown.length > 10 ? ' …' : ''}`);
  process.exit(1);
}
