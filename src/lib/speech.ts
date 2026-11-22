/**
 * The IVU narrator — one voice, one queue, for the whole app.
 *
 *  - Hybrid voice (src/lib/narrationCatalog.ts): a human recording if one exists, else the
 *    pre-rendered IVU voice, for the whole line or every sentence of it (never mixed).
 *  - The device's computer voice (browser speech synthesis) is the explicit last fallback, used
 *    only when neither exists or the audio file fails to play.
 *  - Only one thing speaks at a time: every new line stops the previous one.
 *  - Pause, resume and replay work for both recorded and synthetic narration.
 *  - Every line spoken is counted as recorded or synthetic; lines that fell back to the computer
 *    voice are kept (bounded, on this device only) so grown-ups can see what still needs recording.
 */
import { loadNarration, resolveNarration } from './narrationCatalog.ts';

/** recorded = human voice · rendered = pre-rendered IVU voice · synth = this device's voice. */
export type NarrationSource = 'recorded' | 'rendered' | 'synth';
export interface NarrationState { status: 'idle' | 'playing' | 'paused'; text: string | null; source: NarrationSource | null }
export interface SpeakOptions { rate?: number; voiceURI?: string | null; recorded?: boolean; onEnd?: () => void }

let current: SpeechSynthesisUtterance | null = null;
let currentAudio: HTMLAudioElement | null = null;
let playToken = 0;
let state: NarrationState = { status: 'idle', text: null, source: null };
let last: { text: string; opts: SpeakOptions } | null = null;
const listeners = new Set<(s: NarrationState) => void>();
if (typeof window !== 'undefined') void loadNarration();

function setState(s: NarrationState) { state = s; for (const f of listeners) f(s); }
export function getNarration(): NarrationState { return state; }
export function subscribeNarration(f: (s: NarrationState) => void): () => void { listeners.add(f); return () => { listeners.delete(f); }; }

export const speechSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

/** Strip emoji runs so the voice doesn't read "red apple red apple red apple". */
export function speakable(text: string): string {
  return text.replace(/(\p{Extended_Pictographic}️?(‍\p{Extended_Pictographic}️?)*\s*)+/gu, ' ').replace(/\s+/g, ' ').trim();
}

/** Which source a line would use right now (no sound is played). */
export function narrationSourceFor(text: string, recorded = true): NarrationSource {
  return (recorded && resolveNarration(speakable(text))?.source) || 'synth';
}

export function speak(text: string, opts: SpeakOptions = {}): void {
  stopSpeaking();
  last = { text, opts };
  const found = opts.recorded === false || typeof Audio === 'undefined' ? null : resolveNarration(speakable(text));
  if (found) {
    const clips = found.urls;
    const token = ++playToken;
    noteCoverage(text, found.source);
    setState({ status: 'playing', text, source: found.source });
    const playAt = (i: number) => {
      if (token !== playToken) return; // stopped or replaced
      if (i >= clips.length) { currentAudio = null; setState({ status: 'idle', text: null, source: null }); opts.onEnd?.(); return; }
      const a = new Audio(clips[i]);
      currentAudio = a;
      a.onended = () => setTimeout(() => playAt(i + 1), 250);
      // If a recording can't play (e.g. missing file), fall back to the synthetic voice for the whole text.
      const fail = () => { if (token === playToken && currentAudio === a) { currentAudio = null; noteCoverage(text, 'synth'); speakSynth(text, opts); } };
      a.onerror = fail;
      a.play().catch(fail);
    };
    playAt(0);
    return;
  }
  noteCoverage(text, 'synth');
  speakSynth(text, opts);
}

function speakSynth(text: string, opts: SpeakOptions): void {
  if (!speechSupported()) { setState({ status: 'idle', text: null, source: null }); return; }
  const u = new SpeechSynthesisUtterance(speakable(text));
  u.rate = opts.rate ?? 0.9;
  u.pitch = 1.05;
  u.lang = 'en-IN';
  const voices = window.speechSynthesis.getVoices();
  const v = (opts.voiceURI && voices.find((x) => x.voiceURI === opts.voiceURI)) || voices.find((x) => x.lang === 'en-IN') || voices.find((x) => x.lang.startsWith('en'));
  if (v) u.voice = v;
  u.onend = () => { if (current === u) { current = null; setState({ status: 'idle', text: null, source: null }); } opts.onEnd?.(); };
  current = u;
  setState({ status: 'playing', text, source: 'synth' });
  window.speechSynthesis.speak(u);
}

export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
  current = null;
  playToken++;
  if (currentAudio) { try { currentAudio.pause(); } catch { /* ignore */ } currentAudio = null; }
  if (state.status !== 'idle') setState({ status: 'idle', text: null, source: null });
}

export function pauseSpeaking(): void {
  if (state.status !== 'playing') return;
  if (currentAudio) { try { currentAudio.pause(); } catch { /* ignore */ } }
  else if (speechSupported()) window.speechSynthesis.pause();
  setState({ ...state, status: 'paused' });
}

export function resumeSpeaking(): void {
  if (state.status !== 'paused') return;
  if (currentAudio) { currentAudio.play().catch(() => { /* handled by onerror */ }); }
  else if (speechSupported()) window.speechSynthesis.resume();
  setState({ ...state, status: 'playing' });
}

/** Plays the last line again from the start. Returns false if nothing has been spoken yet. */
export function replaySpeaking(): boolean {
  if (!last) return false;
  speak(last.text, last.opts);
  return true;
}

/** True when read-aloud can work at all (synthetic voice or recordings). */
export const readAloudAvailable = () => speechSupported() || typeof Audio !== 'undefined';

export function englishVoices(): SpeechSynthesisVoice[] {
  return speechSupported() ? window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en')) : [];
}

// ---------- Coverage (this device) ----------

export const NARRATION_COVERAGE_KEY = 'ivu_narration_coverage_v1';
const MAX_MISSES = 150;
export interface NarrationCoverage { recorded: number; rendered: number; synth: number; misses: Record<string, number> }

export function readNarrationCoverage(storage: Storage | undefined = globalThis.localStorage): NarrationCoverage {
  try {
    const raw = storage?.getItem(NARRATION_COVERAGE_KEY);
    const c = raw ? (JSON.parse(raw) as NarrationCoverage) : null;
    if (c && typeof c.recorded === 'number' && typeof c.synth === 'number' && c.misses && typeof c.misses === 'object') return { ...c, rendered: c.rendered ?? 0 };
  } catch { /* ignore */ }
  return { recorded: 0, rendered: 0, synth: 0, misses: {} };
}

export function noteCoverage(text: string, source: NarrationSource, storage: Storage | undefined = globalThis.localStorage): void {
  if (!storage) return;
  try {
    const c = readNarrationCoverage(storage);
    if (source === 'recorded') c.recorded++;
    else if (source === 'rendered') c.rendered++;
    else {
      c.synth++;
      const line = speakable(text).slice(0, 160);
      if (line) {
        c.misses[line] = (c.misses[line] ?? 0) + 1;
        const keys = Object.keys(c.misses);
        if (keys.length > MAX_MISSES) {
          // Drop the least-heard lines so the list stays small.
          keys.sort((a, b) => c.misses[a] - c.misses[b]).slice(0, keys.length - MAX_MISSES).forEach((k) => delete c.misses[k]);
        }
      }
    }
    storage.setItem(NARRATION_COVERAGE_KEY, JSON.stringify(c));
  } catch { /* storage full or unavailable: coverage is best-effort */ }
}

export function resetNarrationCoverage(storage: Storage | undefined = globalThis.localStorage): void {
  try { storage?.removeItem(NARRATION_COVERAGE_KEY); } catch { /* ignore */ }
}
