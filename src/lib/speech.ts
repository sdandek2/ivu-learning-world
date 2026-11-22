/**
 * Read-aloud. Uses IVU Reads' recorded voice when there is a recording for the exact text
 * (letter sounds, practice words, phrases, sentences, story lines), otherwise the browser's
 * built-in speech synthesis (fully offline on most systems).
 */
import { clipsForPassage, loadClips } from './ivuReads.ts';

let current: SpeechSynthesisUtterance | null = null;
let currentAudio: HTMLAudioElement | null = null;
let playToken = 0;
if (typeof window !== 'undefined') void loadClips();

export const speechSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

/** Strip emoji runs so the voice doesn't read "red apple red apple red apple". */
export function speakable(text: string): string {
  return text.replace(/(\p{Extended_Pictographic}️?(‍\p{Extended_Pictographic}️?)*\s*)+/gu, ' ').replace(/\s+/g, ' ').trim();
}

export function speak(text: string, opts: { rate?: number; voiceURI?: string | null; recorded?: boolean; onEnd?: () => void } = {}): void {
  stopSpeaking();
  const clips = opts.recorded === false || typeof Audio === 'undefined' ? null : clipsForPassage(speakable(text));
  if (clips) {
    const token = ++playToken;
    const playAt = (i: number) => {
      if (token !== playToken) return; // stopped or replaced
      if (i >= clips.length) { currentAudio = null; opts.onEnd?.(); return; }
      const a = new Audio(clips[i]);
      currentAudio = a;
      a.onended = () => setTimeout(() => playAt(i + 1), 250);
      // If a recording can't play (e.g. missing file), fall back to the synthetic voice for the whole text.
      const fail = () => { if (token === playToken && currentAudio === a) { currentAudio = null; speakSynth(text, opts); } };
      a.onerror = fail;
      a.play().catch(fail);
    };
    playAt(0);
    return;
  }
  speakSynth(text, opts);
}

function speakSynth(text: string, opts: { rate?: number; voiceURI?: string | null; onEnd?: () => void }): void {
  if (!speechSupported()) return;
  const u = new SpeechSynthesisUtterance(speakable(text));
  u.rate = opts.rate ?? 0.9;
  u.pitch = 1.05;
  u.lang = 'en-IN';
  const voices = window.speechSynthesis.getVoices();
  const v = (opts.voiceURI && voices.find((x) => x.voiceURI === opts.voiceURI)) || voices.find((x) => x.lang === 'en-IN') || voices.find((x) => x.lang.startsWith('en'));
  if (v) u.voice = v;
  u.onend = () => { if (current === u) current = null; opts.onEnd?.(); };
  current = u;
  window.speechSynthesis.speak(u);
}

export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
  current = null;
  playToken++;
  if (currentAudio) { try { currentAudio.pause(); } catch { /* ignore */ } currentAudio = null; }
}

/** True when read-aloud can work at all (synthetic voice or recordings). */
export const readAloudAvailable = () => speechSupported() || typeof Audio !== 'undefined';

export function englishVoices(): SpeechSynthesisVoice[] {
  return speechSupported() ? window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en')) : [];
}
