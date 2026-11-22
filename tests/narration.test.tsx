import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { render, screen, fireEvent } from '@testing-library/react';
import { setClipMap } from '../src/lib/ivuReads.ts';
import { allBuddyLines, BUDDY_LINES, pick } from '../src/lib/buddyLines.ts';
import {
  speak, stopSpeaking, pauseSpeaking, resumeSpeaking, replaySpeaking, getNarration, narrationSourceFor,
  noteCoverage, readNarrationCoverage, resetNarrationCoverage, NARRATION_COVERAGE_KEY,
} from '../src/lib/speech.ts';

const realClips = () => JSON.parse(readFileSync(join(__dirname, '../public/ivu-reads/clips.json'), 'utf8')).clips;

/** Minimal Audio stand-in: records what was played, lets the test finish a clip. */
class FakeAudio {
  static played: FakeAudio[] = [];
  paused = true; onended: (() => void) | null = null; onerror: (() => void) | null = null;
  src: string;
  constructor(src: string) { this.src = src; FakeAudio.played.push(this); }
  play() { this.paused = false; return Promise.resolve(); }
  pause() { this.paused = true; }
}

describe("Buddy's line catalogue", () => {
  afterEach(() => setClipMap(null));
  it('every line marked recorded really has an IVU Reads recording (same voice as IVU Reads)', () => {
    setClipMap(realClips());
    const broken = allBuddyLines().filter((l) => l.recorded && narrationSourceFor(l.text) !== 'recorded');
    expect(broken.map((l) => l.id)).toEqual([]);
  });
  it('lines marked to-record are honest: they have no recording yet', () => {
    setClipMap(realClips());
    const stale = allBuddyLines().filter((l) => !l.recorded && narrationSourceFor(l.text) === 'recorded');
    expect(stale.map((l) => l.id)).toEqual([]);
  });
  it('line ids are unique', () => {
    const ids = allBuddyLines().map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it('does not repeat the same praise twice in a row', () => {
    const seq = [0, 0, 0, 0].map(() => pick(BUDDY_LINES.praise, () => 0).id);
    for (let i = 1; i < seq.length; i++) expect(seq[i]).not.toBe(seq[i - 1]);
  });
});

describe('narrator', () => {
  beforeEach(() => { FakeAudio.played = []; vi.stubGlobal('Audio', FakeAudio); localStorage.clear(); });
  afterEach(() => { stopSpeaking(); setClipMap(null); vi.unstubAllGlobals(); });

  it('plays the recording, reports state, and supports pause, resume and replay', () => {
    setClipMap({ 'p:Brilliant!': 'audio/b.mp3' });
    speak('Brilliant!');
    expect(FakeAudio.played.map((a) => a.src)).toEqual(['./ivu-reads/audio/b.mp3']);
    expect(getNarration()).toMatchObject({ status: 'playing', source: 'recorded', text: 'Brilliant!' });
    pauseSpeaking();
    expect(getNarration().status).toBe('paused');
    expect(FakeAudio.played[0].paused).toBe(true);
    resumeSpeaking();
    expect(getNarration().status).toBe('playing');
    expect(FakeAudio.played[0].paused).toBe(false);
    expect(replaySpeaking()).toBe(true);
    expect(FakeAudio.played).toHaveLength(2);
    expect(FakeAudio.played[0].paused).toBe(true); // the old one never keeps talking
  });

  it('never overlaps: a new line stops the previous one', () => {
    setClipMap({ 'p:Wow!': 'audio/w.mp3', 'p:Yay!': 'audio/y.mp3' });
    speak('Wow!');
    speak('Yay!');
    expect(FakeAudio.played[0].paused).toBe(true);
    expect(FakeAudio.played[1].paused).toBe(false);
    expect(getNarration().text).toBe('Yay!');
  });

  it('returns to idle when the recording ends', async () => {
    setClipMap({ 'p:Wow!': 'audio/w.mp3' });
    const onEnd = vi.fn();
    speak('Wow!', { onEnd });
    vi.useFakeTimers();
    FakeAudio.played[0].onended?.();
    vi.runAllTimers();
    vi.useRealTimers();
    expect(onEnd).toHaveBeenCalled();
    expect(getNarration().status).toBe('idle');
  });

  it('counts recorded and computer-voice lines, and remembers which lines still need recording', () => {
    setClipMap({ 'p:Wow!': 'audio/w.mp3' });
    speak('Wow!');
    speak('Plants need light to grow.'); // no recording, no speechSynthesis in jsdom
    const c = readNarrationCoverage();
    expect(c.recorded).toBe(1);
    expect(c.synth).toBe(1);
    expect(c.misses['Plants need light to grow.']).toBe(1);
    resetNarrationCoverage();
    expect(localStorage.getItem(NARRATION_COVERAGE_KEY)).toBeNull();
  });

  it('keeps the missing-lines list bounded', () => {
    for (let i = 0; i < 400; i++) noteCoverage(`line ${i}`, 'synth');
    expect(Object.keys(readNarrationCoverage().misses).length).toBeLessThanOrEqual(150);
  });
});

vi.mock('../src/state/store.tsx', () => ({ useStore: () => ({ settings: { sounds: true, readAloud: 'tap', speechRate: 1, voiceURI: null, recordedVoice: true } }) }));

describe('spoken feedback in activities', () => {
  beforeEach(() => { FakeAudio.played = []; vi.stubGlobal('Audio', FakeAudio); vi.stubGlobal('AudioContext', undefined); });
  afterEach(() => { stopSpeaking(); setClipMap(null); vi.unstubAllGlobals(); });

  it('praises a right answer and encourages a wrong one, in the recorded voice', async () => {
    setClipMap(realClips());
    const { ItemPlayer } = await import('../src/ui/ItemPlayer.tsx');
    render(<ItemPlayer item={{ id: 'x.q', kind: 'choice', prompt: 'Which is 3?', options: ['2', '3', '4'], answer: 1 }} onDone={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    expect(getNarration()).toMatchObject({ text: 'Try again!', source: 'recorded' });
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    expect(BUDDY_LINES.gotIt.map((l) => l.text)).toContain(getNarration().text);
    expect(getNarration().source).toBe('recorded');
  });

  it('the Listen button pauses and carries on', async () => {
    setClipMap({ 'p:Your turn!': 'audio/t.mp3' });
    const { SpeakButton } = await import('../src/ui/common.tsx');
    render(<SpeakButton text="Your turn!" />);
    fireEvent.click(screen.getByRole('button', { name: /read aloud/ }));
    expect(getNarration().status).toBe('playing');
    fireEvent.click(screen.getByRole('button', { name: /Pause reading/ }));
    expect(getNarration().status).toBe('paused');
    fireEvent.click(screen.getByRole('button', { name: /Carry on reading/ }));
    expect(getNarration().status).toBe('playing');
  });
});
