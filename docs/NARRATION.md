# IVU narration: Buddy's voice and the audio system

This is the contract every screen follows when it speaks. Code lives in `src/lib/speech.ts` (the
narrator), `src/lib/buddyLines.ts` (Buddy's catalogue) and `src/ui/common.tsx` (`SpeakButton`,
`NarrationControl`, `useBuddyVoice`, `useNarration`).

## 1. Who is speaking

- **One narrator.** The IVU Reads recordings are the voice of IVU. Buddy's lines, praise and
  encouragement reuse those recordings wherever the exact words exist.
- **Buddy's personality.** Warm, curious, patient, a little playful. Buddy praises effort and
  strategy ("You did it!", "Good trying!"), never labels the child ("clever", "smart"), never
  hurries, never uses sarcasm or loss language. After a wrong answer Buddy encourages first and
  then teaches; it never says "wrong".
- **Dialogue style.** One idea per line. Short sentences a 4-year-old can follow. Say what to do
  ("Tap a world to visit it."), not how the interface works. No names inside recordable lines —
  names cannot be pre-recorded.

## 2. Where the voice comes from

1. **Recorded voice (normal).** A line plays as a recording if `clips.json` has the exact text,
   or if *every* sentence of a passage has a recording (played sentence by sentence). Two voices
   are never mixed in one passage.
2. **Computer voice (fallback).** Browser speech synthesis, `en-IN` preferred, at the grown-up's
   chosen voice and speed. Used only when no recording exists, or a recording fails to load.
3. Grown-ups can turn the recorded voice off, or all read-aloud off (Settings → Reading aloud).

## 3. Playback behaviour

- **No overlap.** Every new line stops the one before. Leaving a lesson step stops narration.
- **Pause / carry on / replay.** A `SpeakButton` that is playing becomes a pause button, then a
  "carry on" button. Lesson and revision screens have a top-bar control that pauses, resumes, or
  replays the last line.
- **Automatic vs tap.** Content (explanations, prompts, stories) auto-plays only when the grown-up
  picked "Automatically read each screen". Buddy's short feedback lines (praise, "Try again!",
  the lesson celebration) play whenever read-aloud is not off *and* feedback sounds are on.
- **Offline.** All recordings are in the service-worker precache (every file in `dist/` is), so
  recorded narration works offline after the first visit.
- **Failure.** If a recording cannot play, the same line is spoken in the computer voice; if
  neither is available the screen still works silently — no step ever depends on audio.

## 4. Coverage is measured, not guessed

- `npm run audit:audio` writes [AUDIO_COVERAGE.md](AUDIO_COVERAGE.md): recorded vs computer-voice
  coverage for Buddy's lines and for every spoken curriculum line, by kind, world and stage.
- `node scripts/audit-audio-coverage.ts --missing recording-script.csv` exports every unrecorded
  line, de-duplicated and in priority order (Buddy first, then youngest stages, prompts before
  explanations before stories), ready for a narration session.
- `--check` (run in CI) fails if `clips.json` points at a missing file, or if a Buddy line marked
  `recorded: true` has no recording. A unit test enforces the same and also fails if a line
  marked "to record" has since been recorded, so the catalogue stays honest.
- On each device the narrator counts recorded vs computer-voice lines and remembers the
  most-heard unrecorded lines; grown-ups see this under Settings → Voice coverage.

## 5. Adding recordings

1. Record lines from the exported CSV (same narrator as IVU Reads, same mic and room).
2. Add the MP3s to `public/ivu-reads/audio/` and map the exact text in `clips.json`
   (`p:` prompts/phrases, `t:` sentences and story lines, `q:` questions, `w:` words, `s:` sounds).
3. If a Buddy line is now recorded, set `recorded: true` in `buddyLines.ts`.
4. Run `npm run audit:audio` and commit the updated report.

Do not regenerate or re-encode existing IVU Reads clips; add new files only.
