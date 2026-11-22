/** Tiny synthesized feedback sounds (no audio files, no network). */
let ctx: AudioContext | null = null;

function tone(freqs: number[], dur = 0.12, type: OscillatorType = 'sine', gain = 0.06) {
  try {
    ctx ??= new AudioContext();
    let t = ctx.currentTime;
    for (const f of freqs) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(gain, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(ctx.destination);
      o.start(t); o.stop(t + dur);
      t += dur * 0.85;
    }
  } catch { /* audio unavailable */ }
}

export const sounds = {
  correct: () => tone([660, 880], 0.12, 'triangle'),
  tryAgain: () => tone([330, 294], 0.14, 'sine', 0.04),
  celebrate: () => tone([523, 659, 784, 1047], 0.13, 'triangle'),
  tap: () => tone([520], 0.05, 'sine', 0.03),
};
