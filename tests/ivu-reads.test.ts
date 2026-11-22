import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { clipFor, clipsForPassage, sentences, isItemMastered, setClipsForTest, summarise, exportIvuReads, IVU_READS_STATE_KEY, IVU_READS_SOUNDS_KEY, type IvuReadsLevel } from '../src/lib/ivuReads.ts';
import { createBackup, parseBackup, restoreBackup } from '../src/lib/backup.ts';

const LEVELS: IvuReadsLevel[] = [
  { name: 'Letter sounds', sticker: '🔤', type: 'letter', items: ['0:a', '0:b'] },
  { name: '2-letter words', sticker: '🐣', type: 'word', items: ['1:at', '1:in', '1:up'] },
];

describe('IVU Reads mastery rule (same as IVU Reads itself)', () => {
  it('letter sounds: mastered after one correct read', () => {
    expect(isItemMastered(0, { c: 1, last: 'c', cd: ['d1'] }, 3, true)).toBe(true);
    expect(isItemMastered(0, { c: 1, last: 'h', cd: ['d1'] }, 3, true)).toBe(false);
  });
  it('words: need N correct reads on two different days, and a last miss resets', () => {
    expect(isItemMastered(1, { c: 3, last: 'c', cd: ['d1'] }, 3, true)).toBe(false);
    expect(isItemMastered(1, { c: 3, last: 'c', cd: ['d1', 'd2'] }, 3, true)).toBe(true);
    expect(isItemMastered(1, { c: 3, last: 'c', cd: ['d1'] }, 3, false)).toBe(true);
    expect(isItemMastered(1, { c: 5, last: 'x', cd: ['d1', 'd2'] }, 3, true)).toBe(false);
  });
  it('summarises levels, current level and totals', () => {
    const s = summarise(LEVELS, {
      currentLevel: 1, unlocked: [0, 1], stars: 7, stickers: [0],
      items: { '0:a': { c: 1, last: 'c' }, '0:b': { c: 1, last: 'c' }, '1:at': { c: 3, last: 'c', cd: ['d1', 'd2'] } },
      sessions: [{ date: '2026-11-20' }, { date: '2026-11-21' }],
      settings: { masteryReads: 3, twoDays: true },
    });
    expect(s.started).toBe(true);
    expect(s.levels.map((l) => l.mastered)).toEqual([2, 1]);
    expect(s.wordsMastered).toBe(3);
    expect(s.wordsTotal).toBe(5);
    expect(s.lastSession).toBe('2026-11-21');
    expect(s.levels[1].current).toBe(true);
  });
  it('treats missing state as not started', () => {
    const s = summarise(LEVELS, null);
    expect(s.started).toBe(false);
    expect(s.levels[0].unlocked).toBe(true);
    expect(s.levels[1].unlocked).toBe(false);
  });
});

describe('recorded clips', () => {
  afterEach(() => setClipsForTest(null));
  it('finds sentences, prompts and single words; ignores anything else', () => {
    setClipsForTest({ 't:The cat sat on a mat.': 'audio/t.mp3', 'p:Your turn!': 'audio/p.mp3', 'w:cat': 'audio/w-cat.mp3' });
    expect(clipFor('The cat sat on a mat.')).toBe('./ivu-reads/audio/t.mp3');
    expect(clipFor('  The cat  sat on a mat. ')).toBe('./ivu-reads/audio/t.mp3');
    expect(clipFor('Your turn!')).toBe('./ivu-reads/audio/p.mp3');
    expect(clipFor('Cat')).toBe('./ivu-reads/audio/w-cat.mp3');
    expect(clipFor('cat.')).toBe('./ivu-reads/audio/w-cat.mp3');
    expect(clipFor('The dog sat.')).toBeNull();
    expect(clipFor('')).toBeNull();
  });
  it('plays a story sentence by sentence only when every sentence is recorded', () => {
    setClipsForTest({ 't:Ivu and the Red Car': 'audio/title.mp3', 't:Ivu has a red car.': 'audio/1.mp3', 't:The car is fast.': 'audio/2.mp3' });
    expect(sentences('Ivu and the Red Car. Ivu has a red car. The car is fast.')).toEqual(['Ivu and the Red Car.', 'Ivu has a red car.', 'The car is fast.']);
    expect(clipsForPassage('Ivu and the Red Car. Ivu has a red car. The car is fast.')).toEqual(['./ivu-reads/audio/title.mp3', './ivu-reads/audio/1.mp3', './ivu-reads/audio/2.mp3']);
    expect(clipsForPassage('Ivu has a red car. The car is slow.')).toBeNull(); // never mix recorded and synthetic voices
    expect(clipsForPassage('The car is fast.')).toEqual(['./ivu-reads/audio/2.mp3']);
  });
  it('every sentence of the Phonics story lesson has a recording', () => {
    const path = 'public/ivu-reads/clips.json';
    if (!existsSync(path)) return;
    setClipsForTest(JSON.parse(readFileSync(path, 'utf8')).clips);
    const subject = JSON.parse(readFileSync('public/curriculum/v1/subjects/phonics.json', 'utf8'));
    const lesson = subject.stages.find((s: { stage: string }) => s.stage === 's5').units.find((u: { id: string }) => u.id.endsWith('first-stories')).lessons[0];
    expect(clipsForPassage(`${lesson.story.title}. ${lesson.story.text}`)?.length).toBe(7);
    for (const x of lesson.examples) expect(clipFor(x), x).not.toBeNull();
  });
  it('the imported clip map points at files that exist', () => {
    const path = 'public/ivu-reads/clips.json';
    if (!existsSync(path)) return; // IVU Reads not imported in this checkout
    const { clips } = JSON.parse(readFileSync(path, 'utf8')) as { clips: Record<string, string> };
    const files = Object.values(clips);
    expect(files.length).toBeGreaterThan(400);
    for (const f of files) expect(existsSync('public/ivu-reads/' + f), f).toBe(true);
    expect(clips['s:a'] && clips['w:cat'] && clips['t:The cat sat on a mat.']).toBeTruthy();
  });
  it('the imported page is fully local (no Google Fonts or other external URLs)', () => {
    const path = 'public/ivu-reads/index.html';
    if (!existsSync(path)) return;
    const html = readFileSync(path, 'utf8');
    expect(html).not.toMatch(/fonts\.googleapis|fonts\.gstatic/);
    expect(html).not.toMatch(/(src|href)="https?:\/\//);
    expect(html).not.toMatch(/data:audio\/mpeg;base64/);
  });
});

describe('backups include IVU Reads', () => {
  beforeEach(() => localStorage.clear());
  it('round-trips IVU Reads progress and recordings through a Learning World backup', async () => {
    const state = JSON.stringify({ v: 1, currentLevel: 2, items: { '1:at': { c: 3 } } });
    localStorage.setItem(IVU_READS_STATE_KEY, state);
    localStorage.setItem(IVU_READS_SOUNDS_KEY, JSON.stringify({ a: 'data:audio/webm;base64,AAAA' }));
    const backup = await createBackup();
    expect(backup.data.ivuReads?.state).toBe(state);
    const parsed = parseBackup(JSON.stringify(backup));
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.summary).toContain('IVU Reads');
    localStorage.clear();
    await restoreBackup(parsed.backup);
    expect(localStorage.getItem(IVU_READS_STATE_KEY)).toBe(state);
    expect(JSON.parse(localStorage.getItem(IVU_READS_SOUNDS_KEY)!).a).toContain('webm');
  });
  it('an older backup without IVU Reads leaves current IVU Reads progress alone', async () => {
    const backup = await createBackup();
    delete (backup.data as { ivuReads?: unknown }).ivuReads;
    localStorage.setItem(IVU_READS_STATE_KEY, '{"v":1}');
    const parsed = parseBackup(JSON.stringify(backup));
    expect(parsed.ok).toBe(true);
    if (parsed.ok) await restoreBackup(parsed.backup);
    expect(localStorage.getItem(IVU_READS_STATE_KEY)).toBe('{"v":1}');
  });
  it('rejects a backup whose IVU Reads data is not valid JSON', async () => {
    const backup = await createBackup();
    (backup.data as { ivuReads?: unknown }).ivuReads = { state: '{broken', sounds: null };
    expect(parseBackup(JSON.stringify(backup)).ok).toBe(false);
  });
  it('exports nothing when IVU Reads has never been used', () => {
    expect(exportIvuReads()).toBeNull();
  });
});
