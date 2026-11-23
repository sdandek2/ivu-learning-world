/**
 * End-to-end smoke test of the production build (run `npm run build` first).
 *   node scripts/e2e-smoke.mjs [--shots <dir>]
 *
 * Starts `vite preview`, then drives a real browser through the main learning flows:
 * universe → world → subject → full lesson (learn, story, play, think, make, check) →
 * mastery recorded → parent gate → overview/progress/recommendations → curriculum →
 * backup export → Play hub → arena → creative studio → offline reload.
 */
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';

// Playwright is an optional tool (not a project dependency): use a local or global install.
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { console.error('Playwright is not installed. Run: npm i -D playwright && npx playwright install chromium'); process.exit(2); }

const args = process.argv.slice(2);
const shotDir = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
if (shotDir) mkdirSync(shotDir, { recursive: true });
const PORT = 4179;
const BASE = `http://localhost:${PORT}/`;

// Run Vite directly (not via npx) in its own process group so the whole server is stopped afterwards.
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'pipe', detached: true });
const stopServer = () => { try { process.kill(-server.pid, 'SIGTERM'); } catch { /* already stopped */ } };
process.on('exit', stopServer);
await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('preview server did not start')), 20000);
  server.stdout.on('data', (d) => { if (String(d).includes(String(PORT))) { clearTimeout(t); resolve(); } });
  server.stderr.on('data', (d) => { if (/already in use/i.test(String(d))) { clearTimeout(t); reject(new Error(`port ${PORT} is already in use`)); } });
  server.on('exit', (code) => { clearTimeout(t); reject(new Error(`preview server exited (${code})`)); });
});

let failures = 0;
const step = async (name, fn) => {
  try { await fn(); console.log(`  ✓ ${name}`); }
  catch (e) { failures++; console.error(`  ✗ ${name}\n    ${String(e.message).split('\n')[0]}`); }
};

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 860 }, deviceScaleFactor: 1 });
const page = await context.newPage();
page.setDefaultTimeout(12000);
page.setDefaultNavigationTimeout(12000);
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
const shot = async (name) => { if (shotDir) await page.screenshot({ path: `${shotDir}/${name}.png`, fullPage: false }); };

/** Answers whatever item is on screen correctly, reading the answer from the curriculum JSON. */
async function answerCurrentItem(items) {
  const prompt = (await page.locator('.item__text').first().textContent()).trim();
  const item = items.find((i) => i.prompt === prompt);
  if (!item) throw new Error(`item not found for prompt: ${prompt}`);
  if (item.kind === 'choice') await page.locator('.choice', { hasText: new RegExp(`^${escape(item.options[item.answer])}$`) }).first().click();
  else if (item.kind === 'truefalse') await page.locator('.choice--tf', { hasText: item.answer ? 'True' : 'False' }).click();
  else if (item.kind === 'count') await page.locator('.numpad__key', { hasText: new RegExp(`^${item.answer}$`) }).click();
  else if (item.kind === 'order') {
    for (const x of item.items) await page.locator('.order__pool .tile', { hasText: new RegExp(`^${escape(x)}$`) }).first().click();
    await page.getByRole('button', { name: /Check my order/ }).click();
  } else if (item.kind === 'match') {
    for (const [l, r] of item.pairs) {
      await page.locator('.match__col').nth(0).locator('.tile', { hasText: new RegExp(`^${escape(l)}$`) }).click();
      await page.locator('.match__col').nth(1).locator('.tile', { hasText: new RegExp(`^${escape(r)}$`) }).click();
    }
  }
  await page.locator('.item__feedback.is-right').waitFor();
  await page.getByRole('button', { name: /Next →/ }).click();
}
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

try {
  console.log('E2E smoke test');
  await step('home opens and Explore shows all 12 worlds', async () => {
    await page.goto(BASE);
    await page.locator('.owl-hero').waitFor();
    await page.getByRole('button', { name: /Explore learning worlds/ }).click();
    await page.locator('.am-dest').first().waitFor();
    const n = await page.locator('.am-dest').count();
    if (n !== 12) throw new Error(`expected 12 worlds, got ${n}`);
    await shot('01-universe');
  });

  const index = await (await page.request.get(BASE + 'curriculum/v1/index.json')).json();
  const firstSubject = index.worlds.flatMap((w) => w.subjects.map((s) => ({ ...s, world: w }))).find((s) => s.file);
  const subject = await (await page.request.get(BASE + 'curriculum/v1/' + firstSubject.file)).json();
  const lesson = subject.stages[0].units[0].lessons[0];

  await step('world page shows 5 subjects', async () => {
    await page.locator('.am-dest', { hasText: firstSubject.world.title }).click();
    await page.locator('.subjectcard').first().waitFor();
    const n = await page.locator('.subjectcard').count();
    if (n !== 5) throw new Error(`expected 5 subjects, got ${n}`);
    await shot('02-world');
  });

  await step('subject page shows units and lessons', async () => {
    await page.locator('.subjectcard', { hasText: firstSubject.title }).click();
    await page.locator('.unit').first().waitFor();
    await shot('03-subject');
  });

  await step('full lesson flow records mastery evidence', async () => {
    await page.locator('.stone', { hasText: lesson.title }).click();
    await page.locator('.bubble__text').waitFor();
    await shot('04-lesson-learn');
    for (let i = 1; i < lesson.explanation.length; i++) await page.getByRole('button', { name: /^Next →$/ }).click();
    await page.getByRole('button', { name: /Story time/ }).click();
    await page.locator('.storycard__text').waitFor();
    await page.getByRole('button', { name: /Let's play/ }).click();
    for (let i = 0; i < lesson.activities.length; i++) { if (i === 0) await shot('05-lesson-play'); await answerCurrentItem(lesson.activities); }
    await page.locator('.thinkcard').waitFor();
    await page.getByRole('button', { name: /All by myself/ }).click();
    await page.getByRole('button', { name: /Let's make something/ }).click();
    await page.getByRole('button', { name: /I did it myself/ }).click();
    await page.getByRole('button', { name: /Show what I know/ }).click();
    for (const _ of lesson.assessment) await answerCurrentItem(lesson.assessment);
    await page.locator('.celebrate__title').waitFor();
    await shot('06-lesson-done');
    const label = await page.locator('.celebrate .stage-dots__label').textContent();
    if (label !== 'Application') throw new Error(`expected Application stage after a perfect lesson, got ${label}`);
  });

  await step('parent gate blocks, then unlocks dashboard', async () => {
    await page.goto(BASE + '#/parent/dashboard');
    const q = await page.locator('.gate__q').textContent();
    const [, a, b] = q.match(/(\d+) × (\d+)/);
    await page.fill('#gate', String(Number(a) * Number(b)));
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('.kpis').waitFor();
    const txt = await page.locator('.kpis').textContent();
    if (!/1\s*lessons finished/.test(txt)) throw new Error(`dashboard KPIs: ${txt}`);
    await shot('07-parent-dashboard');
  });

  await step('parent navigation separates progress and recommendations', async () => {
    await page.locator('.pnav').getByRole('button', { name: 'Progress' }).click();
    await page.locator('.dash h1').waitFor();
    await page.locator('.pnav').getByRole('button', { name: 'Recommendations' }).click();
    await page.getByRole('heading', { name: 'Recommended next steps' }).waitFor();
    await shot('08-parent-recommendations');
  });

  await step('curriculum guide shows full lesson detail', async () => {
    await page.locator('.pnav').getByRole('button', { name: 'Curriculum' }).click();
    await page.locator('.cbrowser__nav button', { hasText: firstSubject.title }).click();
    await page.locator('.plesson').first().click();
    await page.getByText('Critical-thinking questions').first().waitFor();
    await shot('08-curriculum');
  });

  await step('backup export downloads a valid file', async () => {
    await page.locator('.pnav').getByRole('button', { name: 'Settings & Backup' }).click();
    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: /Download backup/ }).click()]);
    const path = await dl.path();
    const { readFileSync } = await import('node:fs');
    const json = JSON.parse(readFileSync(path, 'utf8'));
    if (json.format !== 'ivu-learning-world-backup' || json.data.skills.length < 1) throw new Error('backup content invalid');
  });

  await step('Play hub offers both challenge and creative paths', async () => {
    await page.goto(BASE);
    await page.getByRole('button', { name: /Play/ }).click();
    await page.getByRole('heading', { name: 'What would you like to make today?' }).waitFor();
    await page.getByRole('button', { name: /Choose a challenge/ }).waitFor();
    await page.getByRole('button', { name: /Start creating/ }).waitFor();
    await shot('09-play-hub');
  });

  await step('challenge arena runs a round', async () => {
    await page.goto(BASE + '#/arena');
    await page.locator('.arena__all').click();
    await page.locator('.item').waitFor();
    await shot('09-arena');
  });

  await step('creative studio draws and saves', async () => {
    await page.goto(BASE + '#/studio/draw');
    const c = page.locator('.draw__canvas');
    const box = await c.boundingBox();
    await page.mouse.move(box.x + 100, box.y + 100); await page.mouse.down();
    await page.mouse.move(box.x + 300, box.y + 200, { steps: 8 }); await page.mouse.up();
    await page.getByRole('button', { name: /Save/ }).click();
    await page.getByRole('button', { name: /Saved/ }).waitFor();
    await shot('10-studio');
  });

  await step('journey and achievements reflect progress', async () => {
    await page.goto(BASE + '#/achievements');
    const earned = await page.locator('.badge.is-earned').count();
    if (earned < 3) throw new Error(`expected ≥3 badges, got ${earned}`);
    await page.goto(BASE + '#/journey');
    await page.locator('.stats').waitFor();
    await shot('11-journey');
  });

  await step('works offline after first load (service worker)', async () => {
    await page.goto(BASE);
    await page.locator('.owl-hero').waitFor();
    await page.evaluate(() => Promise.race([navigator.serviceWorker.ready, new Promise((_, reject) => setTimeout(() => reject(new Error('service worker did not become ready')), 12000))]));
    await page.reload();
    await page.evaluate(() => Promise.race([navigator.serviceWorker.ready, new Promise((_, reject) => setTimeout(() => reject(new Error('service worker did not become ready')), 12000))]));
    await context.setOffline(true);
    await page.reload();
    await page.getByRole('button', { name: /Explore learning worlds/ }).click();
    await page.locator('.am-dest').first().waitFor({ timeout: 8000 });
    await page.goto(BASE + '#/subject/' + firstSubject.id);
    await page.locator('.unit').first().waitFor({ timeout: 8000 });
    // IVU Reads and its recordings are precached too
    await page.goto(BASE + 'ivu-reads/index.html');
    await page.locator('.node').first().waitFor({ timeout: 8000 });
    const clipOk = await page.evaluate(async () => (await fetch(window.AUDIO_CLIPS['w:cat'])).ok);
    if (!clipOk) throw new Error('IVU Reads recording not available offline');
    await context.setOffline(false);
  });

  await step('IVU Reads opens from Word Woods and returns', async () => {
    const extReq = [];
    const onReq = (r) => { if (!r.url().startsWith(BASE)) extReq.push(r.url()); };
    page.on('request', onReq);
    await page.goto(BASE + '#/world/word-woods');
    await page.locator('.ivureads-card').click();
    await page.waitForURL(/ivu-reads\/index\.html/);
    await page.locator('.node').first().waitFor();
    await shot('13-ivu-reads');
    await page.locator('.lw-home').click();
    await page.locator('.ivureads-card').waitFor();
    page.off('request', onReq);
    if (extReq.length) throw new Error('external requests: ' + extReq.join(', '));
  });

  await step('read-aloud uses the IVU Reads recorded voice', async () => {
    const audioReqs = [];
    const onReq = (r) => { if (r.url().includes('/ivu-reads/audio/')) audioReqs.push(r.url()); };
    page.on('request', onReq);
    // "I Can Read a Story!" uses IVU Reads' own story, so every sentence has a recording
    await page.goto(BASE + '#/lesson/phonics.s5.first-stories.first-stories');
    await page.getByRole('button', { name: /Story/ }).first().click();
    await page.getByRole('button', { name: /Read me the story/ }).click();
    await page.waitForTimeout(2500);
    page.off('request', onReq);
    if (audioReqs.length < 2) throw new Error(`expected recorded clips to play, got ${audioReqs.length} audio requests`);
  });

  await step('mobile layout renders', async () => {
    const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await m.goto(BASE);
    m.setDefaultTimeout(12000);
    await m.locator('.owl-hero').waitFor();
    await m.getByRole('button', { name: /Explore learning worlds/ }).click();
    await m.locator('.am-dest').first().waitFor();
    if (shotDir) await m.screenshot({ path: `${shotDir}/12-mobile.png` });
    await m.close();
  });

  const realErrors = errors.filter((e) => !/favicon|net::ERR_INTERNET_DISCONNECTED|Failed to load resource/.test(e));
  await step('no uncaught page errors', async () => { if (realErrors.length) throw new Error(realErrors.join(' | ')); });
} finally {
  await browser.close();
  stopServer();
}
console.log(failures ? `\n${failures} step(s) failed` : '\nAll E2E steps passed');
process.exit(failures ? 1 : 0);
