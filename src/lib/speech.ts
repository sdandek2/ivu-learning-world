/** Read-aloud using the browser's built-in speech synthesis (fully offline on most systems). */
let current: SpeechSynthesisUtterance | null = null;

export const speechSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

/** Strip emoji runs so the voice doesn't read "red apple red apple red apple". */
export function speakable(text: string): string {
  return text.replace(/(\p{Extended_Pictographic}️?(‍\p{Extended_Pictographic}️?)*\s*)+/gu, ' ').replace(/\s+/g, ' ').trim();
}

export function speak(text: string, opts: { rate?: number; voiceURI?: string | null; onEnd?: () => void } = {}): void {
  if (!speechSupported()) return;
  stopSpeaking();
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
}

export function englishVoices(): SpeechSynthesisVoice[] {
  return speechSupported() ? window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en')) : [];
}
