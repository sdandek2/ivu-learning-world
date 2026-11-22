/**
 * Bridge to IVU Reads — the phonics flashcard app that lives at ./ivu-reads/ (imported with
 * scripts/import-ivu-reads.mjs). IVU Reads keeps its own progress in localStorage on this same
 * origin; this module reads it for the parent dashboard, includes it in backups, and exposes its
 * recorded voice clips so Learning World's read-aloud can use the same voice.
 */

export const IVU_READS_URL = './ivu-reads/index.html';
export const IVU_READS_STATE_KEY = 'ivu_reads_v1';
export const IVU_READS_SOUNDS_KEY = 'ivu_sounds_v1';

// ---------- Recorded clips ----------

let clipMap: Record<string, string> | null = null;
let clipLoad: Promise<void> | null = null;

/** Loads ./ivu-reads/clips.json once. Safe to call repeatedly; failures just mean "no clips". */
export function loadClips(): Promise<void> {
  if (!clipLoad) {
    clipLoad = fetch('./ivu-reads/clips.json')
      .then((r) => (r.ok ? r.json() : { clips: {} }))
      .then((d: { clips?: Record<string, string> }) => { clipMap = d.clips ?? {}; })
      .catch(() => { clipMap = {}; });
  }
  return clipLoad;
}

/** Test hook. */
export function setClipsForTest(map: Record<string, string> | null): void { clipMap = map; clipLoad = map ? Promise.resolve() : null; }

const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

/**
 * URL of a recorded clip for this exact text, if IVU Reads has one:
 * full sentences / phrases / story lines / prompts / questions first, then single words.
 */
export function clipFor(text: string): string | null {
  if (!clipMap) return null;
  const t = norm(text);
  if (!t) return null;
  const bare = t.replace(/[.]$/, '');
  const hit = clipMap[`t:${t}`] ?? clipMap[`p:${t}`] ?? clipMap[`q:${t}`] ?? (bare !== t ? clipMap[`t:${bare}`] : undefined);
  if (hit) return './ivu-reads/' + hit;
  if (/^[A-Za-z]+[.!?]?$/.test(t)) {
    const w = clipMap[`w:${t.replace(/[.!?]$/, '').toLowerCase()}`];
    if (w) return './ivu-reads/' + w;
  }
  return null;
}

// ---------- Progress summary (read-only) ----------

export interface IvuReadsLevel { name: string; sticker: string; type: string; items: string[] }
export interface IvuReadsLevelProgress { index: number; name: string; sticker: string; mastered: number; total: number; unlocked: boolean; current: boolean }
export interface IvuReadsSummary {
  started: boolean;
  stars: number;
  stickers: number;
  sessions: number;
  lastSession: string | null;
  currentLevel: number;
  levels: IvuReadsLevelProgress[];
  wordsMastered: number;
  wordsTotal: number;
}

interface ItemStat { c?: number; cd?: unknown[]; last?: string | null }
interface IvuReadsState {
  currentLevel?: number; unlocked?: number[]; items?: Record<string, ItemStat>;
  sessions?: { date?: string; start?: number }[]; stars?: number; stickers?: number[];
  settings?: { masteryReads?: number; twoDays?: boolean };
}

export function readIvuReadsState(storage: Storage | undefined = globalThis.localStorage): IvuReadsState | null {
  try {
    const raw = storage?.getItem(IVU_READS_STATE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as IvuReadsState;
    return s && typeof s === 'object' ? s : null;
  } catch { return null; }
}

/** Same mastery rule IVU Reads itself uses (isMastered in IVU Reads). */
export function isItemMastered(level: number, stat: ItemStat | undefined, masteryReads: number, twoDays: boolean): boolean {
  if (!stat) return false;
  if (stat.last === 'x') return false;
  const c = stat.c ?? 0;
  if (level === 0) return c >= 1 && stat.last === 'c';
  if (c < masteryReads) return false;
  if (twoDays && (stat.cd?.length ?? 0) < 2) return false;
  return true;
}

export function summarise(levels: IvuReadsLevel[], state: IvuReadsState | null): IvuReadsSummary {
  const s = state ?? {};
  const reads = s.settings?.masteryReads ?? 3;
  const twoDays = s.settings?.twoDays ?? true;
  const unlocked = new Set(s.unlocked ?? [0]);
  const current = s.currentLevel ?? 0;
  let wordsMastered = 0, wordsTotal = 0;
  const lv = levels.map((L, i) => {
    const mastered = L.items.filter((id) => isItemMastered(i, s.items?.[id], reads, twoDays)).length;
    wordsMastered += mastered; wordsTotal += L.items.length;
    return { index: i, name: L.name, sticker: L.sticker, mastered, total: L.items.length, unlocked: unlocked.has(i), current: i === current };
  });
  const sessions = s.sessions ?? [];
  const last = sessions.length ? sessions[sessions.length - 1] : null;
  const lastSession = last ? (last.date ?? (last.start ? new Date(last.start).toISOString().slice(0, 10) : null)) : null;
  return {
    started: !!state && (Object.keys(s.items ?? {}).length > 0 || sessions.length > 0),
    stars: s.stars ?? 0, stickers: (s.stickers ?? []).length, sessions: sessions.length, lastSession,
    currentLevel: current, levels: lv, wordsMastered, wordsTotal,
  };
}

let levelsCache: Promise<IvuReadsLevel[]> | null = null;
export function loadLevels(): Promise<IvuReadsLevel[]> {
  if (!levelsCache) {
    levelsCache = fetch('./ivu-reads/levels.json').then((r) => (r.ok ? r.json() : { levels: [] })).then((d) => d.levels ?? []).catch(() => []);
  }
  return levelsCache;
}

// ---------- Backup ----------

export interface IvuReadsBackup { state: string | null; sounds: string | null }

export function exportIvuReads(storage: Storage | undefined = globalThis.localStorage): IvuReadsBackup | null {
  if (!storage) return null;
  const state = storage.getItem(IVU_READS_STATE_KEY);
  const sounds = storage.getItem(IVU_READS_SOUNDS_KEY);
  return state || sounds ? { state, sounds } : null;
}

export function importIvuReads(data: IvuReadsBackup | null | undefined, storage: Storage | undefined = globalThis.localStorage): void {
  if (!storage || !data) return;
  if (data.state) storage.setItem(IVU_READS_STATE_KEY, data.state); else storage.removeItem(IVU_READS_STATE_KEY);
  if (data.sounds) storage.setItem(IVU_READS_SOUNDS_KEY, data.sounds); else storage.removeItem(IVU_READS_SOUNDS_KEY);
}

/** Splits text into sentences ("Ivu has a red car. The car is fast." → two sentences). */
export function sentences(text: string): string[] {
  return (norm(text).match(/[^.!?]+[.!?]+["”’)]*|[^.!?]+$/g) ?? []).map((x) => x.trim()).filter(Boolean);
}

/**
 * Recorded clips for a whole passage: the passage itself if recorded, otherwise one clip per
 * sentence — but only if EVERY sentence has a recording (never mix two voices in one passage).
 */
export function clipsForPassage(text: string): string[] | null {
  const whole = clipFor(text);
  if (whole) return [whole];
  const parts = sentences(text);
  if (parts.length < 2) return null;
  const urls = parts.map(clipFor);
  return urls.every((u): u is string => !!u) ? urls : null;
}
