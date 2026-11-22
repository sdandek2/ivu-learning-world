#!/usr/bin/env node
/**
 * Imports the stand-alone IVU Reads app (a single HTML file with ~500 embedded MP3 clips)
 * into IVU Learning World as public/ivu-reads/.
 *
 *   node scripts/import-ivu-reads.mjs <path/to/ivu_reads.html>
 *
 * What it does
 *  - extracts every embedded clip (window.AUDIO_CLIPS) to public/ivu-reads/audio/*.mp3
 *    and writes public/ivu-reads/clips.json (clip key -> file) for Learning World's read-aloud;
 *  - rewrites the page so clips load from those files instead of 2.8 MB of inline base64;
 *  - replaces Google Fonts with local copies (Andika + Fredoka), so it works fully offline;
 *  - adds a small "IVU Learning World" home button.
 * IVU Reads' own logic, levels, progress (localStorage) and recordings are left untouched.
 * Re-run it whenever a newer IVU Reads file is available; the output is fully regenerated.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import vm from 'node:vm';

const src = process.argv[2];
if (!src) { console.error('Usage: node scripts/import-ivu-reads.mjs <ivu_reads.html>'); process.exit(1); }
let html = readFileSync(src, 'utf8');

const OUT = join(process.cwd(), 'public', 'ivu-reads');
rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, 'audio'), { recursive: true });
mkdirSync(join(OUT, 'fonts'), { recursive: true });

// 1. Audio clips --------------------------------------------------------------------
// The script holds window.AUDIO_CLIPS={...} and, in newer versions, window.CLIP_TIMES={...}
// (per-word timings used to highlight words while a sentence plays). Keep everything after the clips.
const m = html.match(/<script id="audio-data">window\.AUDIO_CLIPS=([\s\S]*?)<\/script>/);
if (!m) throw new Error('Could not find window.AUDIO_CLIPS in the source file');
const body = m[1];
const cut = body.indexOf('};window.');
const clipsJson = cut === -1 ? body.replace(/;\s*$/, '') : body.slice(0, cut + 1);
const restOfScript = cut === -1 ? '' : body.slice(cut + 2);
const clips = JSON.parse(clipsJson);
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'clip';
const map = {};
const used = new Set();
for (const [key, dataUrl] of Object.entries(clips)) {
  const mm = /^data:audio\/mpeg;base64,(.+)$/.exec(dataUrl);
  if (!mm) throw new Error(`Clip ${key} is not base64 MP3`);
  const [prefix, ...rest] = key.split(':');
  const text = rest.join(':');
  let name = `${prefix}-${slug(text)}`;
  if (prefix === 't' || prefix === 'p' || prefix === 'q' || used.has(name)) name += '-' + createHash('sha1').update(key).digest('hex').slice(0, 6);
  used.add(name);
  writeFileSync(join(OUT, 'audio', name + '.mp3'), Buffer.from(mm[1], 'base64'));
  map[key] = `audio/${name}.mp3`;
}
html = html.replace(m[0], () => `<script id="audio-data">window.AUDIO_CLIPS=${JSON.stringify(map)};${restOfScript}</script>`);
writeFileSync(join(OUT, 'clips.json'), JSON.stringify({ source: 'IVU Reads', clips: map }, null, 0));

// 1b. Level summary (names, stickers, item ids) so Learning World's parent dashboard can show IVU Reads progress.
const lv = html.match(/const LEVELS = (\[[\s\S]*?\n\]);/);
if (!lv) throw new Error('Could not find LEVELS in the source file');
const LEVELS = vm.runInNewContext('(' + lv[1] + ')');
const levels = LEVELS.map((L, li) => ({
  name: L.name, sticker: L.sticker, type: L.type,
  items: L.items.map((it) => `${li}:${typeof it === 'string' ? it : it.title}`),
}));
writeFileSync(join(OUT, 'levels.json'), JSON.stringify({ source: 'IVU Reads', storageKey: 'ivu_reads_v1', soundsKey: 'ivu_sounds_v1', levels }));

// 2. Local fonts instead of Google Fonts ---------------------------------------------
const nm = join(process.cwd(), 'node_modules');
copyFileSync(join(nm, '@fontsource/andika/files/andika-latin-400-normal.woff2'), join(OUT, 'fonts/andika-400.woff2'));
copyFileSync(join(nm, '@fontsource/andika/files/andika-latin-700-normal.woff2'), join(OUT, 'fonts/andika-700.woff2'));
copyFileSync(join(nm, '@fontsource-variable/fredoka/files/fredoka-latin-wght-normal.woff2'), join(OUT, 'fonts/fredoka.woff2'));
writeFileSync(join(OUT, 'fonts/fonts.css'), [
  `@font-face{font-family:'Andika';font-style:normal;font-weight:400;font-display:swap;src:url(andika-400.woff2) format('woff2')}`,
  `@font-face{font-family:'Andika';font-style:normal;font-weight:700;font-display:swap;src:url(andika-700.woff2) format('woff2')}`,
  `@font-face{font-family:'Fredoka';font-style:normal;font-weight:300 700;font-display:swap;src:url(fredoka.woff2) format('woff2')}`,
].join('\n') + '\n');
const before = html.length;
html = html
  .replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*/g, '')
  .replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]*" rel="stylesheet">/, '<link href="fonts/fonts.css" rel="stylesheet">')
  // printable word cards open in a new window: point it at the local font file by absolute URL
  .replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]*" rel="stylesheet">/g, '<link href="${new URL(\'fonts/fonts.css\', location.href)}" rel="stylesheet">');
if (/fonts\.googleapis/.test(html)) throw new Error('A Google Fonts reference was left behind');
if (html.length === before) throw new Error('Font replacement did not apply');

// 3. Home button back to IVU Learning World --------------------------------------------
const homeBtn = `
<a class="lw-home" href="../index.html#/world/word-woods" aria-label="Back to IVU Learning World">🏠 Learning World</a>
<style>.lw-home{position:fixed;left:14px;bottom:14px;z-index:30;background:rgba(255,255,255,.92);color:#23264a;font:600 16px var(--ui);text-decoration:none;padding:10px 16px;border-radius:999px;box-shadow:0 4px 14px rgba(35,50,120,.15)}.lw-home:hover{background:#fff}</style>
`;
html = html.replace(/<body([^>]*)>/, (b) => b + homeBtn);
html = html.replace(/<title>[^<]*<\/title>/, '<title>IVU Reads! · IVU Learning World</title>');

writeFileSync(join(OUT, 'index.html'), html);
console.log(`IVU Reads imported: ${levels.length} levels, ${Object.keys(map).length} audio clips, page ${(html.length / 1024).toFixed(0)} KB → public/ivu-reads/`);
