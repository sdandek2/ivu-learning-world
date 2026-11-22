# IVU Learning World 2.0: audit and backlog

*Audit date: 22 November 2026 · Branch `feature/ivu-owl-experience-v2` (PR #2, draft) · Base `main` @ `a336910`*

Completion levels used throughout: **Implemented** (code exists) · **Tested** (automated tests
cover it) · **Seen** (checked visually in a browser by the agent) · **Device** (tested on a real
phone or tablet) · **Reviewed** (curriculum or product review by a person) · **Released** (merged
and deployed). Nothing below is *Device*, *Reviewed* or *Released* unless it says so.

## 1. What was inspected

- Git: branch is 3 commits ahead of `main` (`24e5ab8` owl home + nav styles, `1f5f58f` unused
  import, `7c84192` e2e selectors). Changed files: `src/pages/child/Explore.tsx`,
  `src/styles/child.css`, `scripts/e2e-smoke.mjs`. The PR is open and draft. The local checkout
  was on `main`, behind `origin/main`, with a regenerated curriculum that differed only by
  timestamp; it was stashed (`git stash list`), not discarded.
- Source: all of `src/` (≈3,900 lines), the build, audit and e2e scripts, the service worker,
  the curriculum schema and generated JSON, the IVU Reads clip catalogue, and the docs.
- Running app: home, lesson (Learn → Play), parent gate, parent settings, at desktop and
  375 × 812 mobile sizes, in the in-app browser.

## 2. Implementation inventory

| Area | State | Evidence |
|---|---|---|
| Curriculum: 12 worlds, 60 subjects, 6 stages, 730 lessons, 5,111 items | Implemented, Tested | Schema + semantic checks in build; 243 content tests |
| Mastery (5 stages, 5 evidence types), spaced revision, adaptive recommendations | Implemented, Tested | `engine/*`, unit tests |
| IndexedDB persistence, validated backup/restore incl. IVU Reads progress | Implemented, Tested | `storage-backup`, `ivu-reads` tests |
| Offline (service worker precaches every built file, incl. 500 recordings) | Implemented, Tested (e2e) | `vite.config.ts` precache plugin; e2e offline step |
| IVU Reads phonics app (15 levels, 500 recordings) embedded at `./ivu-reads/` | Implemented, Tested (e2e) | `import-ivu-reads.mjs`, e2e step |
| Buddy-led home with next-adventure card and 4-world strip (PR #2) | Implemented, Seen | Screenshots this session |
| Twelve-island world atlas (PR #2) | Implemented | e2e selectors updated; not re-screenshotted this session |
| World page, subject page (stage tabs, unit "stones"), lesson studio (7 steps), revision | Implemented, Tested (e2e) | Pre-redesign visual language; not yet restyled |
| Arena, Creative Studio, Journey, Achievements | Implemented, Tested (e2e) | Pre-redesign visual language |
| Parent dashboard, progress, recommendations, curriculum guide, settings, backup | Implemented, Tested (e2e) | Separate calm design |
| Narration: recorded-first with computer-voice fallback | Implemented, Tested | **Coverage 1.2%** of curriculum lines (see §4) |

## 3. Architecture and code quality

Strong foundations: a single zod schema shared by build, runtime and tests; stable IDs; a small,
pure engine; lazy parent chunk; no runtime dependencies beyond React, zod and fonts. Weaknesses
relevant to 2.0:

- **No design-system layer.** Tokens live in `child.css` (≈720 lines) as one-off classes; the
  redesign added a parallel `owl-*` vocabulary beside older `world`, `subject`, `card` styles.
  Two visual languages now coexist: owl home/atlas vs. everything else.
- **Lesson player is one fixed sequence** (Learn → Story → Play → Think → Make → Check → Yay)
  for every lesson and age. There is no template choice by objective, and the step bar reads
  like an adult wizard.
- **Activity types are five** (choice 58%, true/false 27%, match 10%, order 3%, count 2%).
  No drag-and-drop, sort/classify, listen-and-repeat or build interactions exist yet.
- **Narration had no single owner.** Each component called `speak()` directly; no state, no
  pause/resume, no measurement. *Fixed in this increment* (see §9).
- **Tests on Node ≥ 25 failed locally** (Node's built-in `localStorage` shadowed jsdom's; CI on
  Node 22 was unaffected). *Fixed in this increment* in `tests/setup.ts`.
- Minor: CI has a lockfile auto-commit step targeting a different branch
  (`feature/ivu-cinematic-redesign`); harmless here but stale.

## 4. Voice and audio coverage

From `npm run audit:audio` ([AUDIO_COVERAGE.md](AUDIO_COVERAGE.md)):

| | Lines | Recorded |
|---|---|---|
| Recordings available (IVU Reads) | 500 (39 sounds, 261 words, 151 sentences, 36 prompts, 13 questions) | — |
| Curriculum lines read aloud | 22,578 (19,851 distinct still unrecorded) | 268 (1.2%) |
| Prompts / explanations / stories | 5,111 / 2,190 / 730 | 0 / 0 / 1 |
| Buddy's own lines (after this increment) | 17 | 11 |

Root cause confirmed: the matcher is correct, the recordings are phonics-specific, so almost
every curriculum line falls back to the device voice. Before this increment, Buddy's feedback
(praise, try again, celebration) was **silent or synthetic** even though matching recordings
existed in IVU Reads. That is now fixed: activity feedback and the lesson celebration play in the
recorded voice (verified in the running app: `p-try-again`, `p-you-did-it` clips load and play).

**Scale of the gap.** Recording just the ages 4–6 prompts, explanations and stories is 2,644
distinct lines, about 40,000 words (≈4–5 hours of finished audio). All stages are ≈20,000 lines.
This needs a product decision (§8, decision D1).

## 5. Child-experience assessment

- **Home:** warm and clear; the next lesson is obvious. Buddy now speaks when tapped (welcome vs
  welcome-back). Only 4 of 12 worlds are on the home strip (by design; "See all 12").
- **Lesson start:** no Buddy-led welcome or topic introduction; it opens straight into
  explanation text. 7-step bar with text labels is heavy for ages 4–6.
- **Reading load:** explanations, vocabulary and the "For grown-ups" block are text-dense on
  the Learn step; the young child depends entirely on read-aloud, which is synthetic.
- **Feedback:** immediate and kind, with retries, hints and a taught answer after two tries.
  Now voiced. No per-world sound identity.
- **Think & Talk / Make:** rely on a grown-up rating; appropriate pedagogically, but they read as
  adult forms.
- **Consistency:** owl home/atlas and the rest of the app look like two products.

## 6. Twelve worlds and sixty subjects

All 12 worlds have 5 subjects with content files (60/60); 60–68 lessons per world. Every world
uses one shared `WorldPage`/`SubjectPage` template coloured by world tokens and SVG art, so
structure is consistent but worlds feel alike beyond colour. World guides (Olu the Owl, Kiko the
Mountain Goat, …) are named in data while Buddy is the on-screen guide everywhere — a character
decision is needed (§8, D2).

## 7. Testing and validation gaps

- No visual regression or screenshot baseline; no real-device (iOS Safari, Android Chrome,
  tablet) runs recorded.
- No accessibility audit beyond semantic markup (no axe run, no screen-reader pass).
- e2e covers one lesson; no sampled run across all 60 subjects × stages.
- Audio: no test that recorded clips actually decode on Safari/iOS (MP3 is fine, but autoplay
  rules differ); interruption (phone call, tab hidden) untested.
- No performance budget check in CI.

## 8. Decisions that need the product owner

- **D1 — How to fill 20,000 narration lines.** (a) Human narrator, ages 4–6 first (≈4–5 h of
  audio), most natural, slow and costs money; (b) offline neural TTS rendered once at build time
  to MP3 (e.g. an open-source local model), one consistent voice, free, near-instant, not human;
  (c) hybrid: human for Buddy + ages 4–6 prompts/stories, rendered voice for the rest.
  *Recommendation: (c).* The narrator and catalogue already support any of these with no code
  change — only `clips.json` grows.
- **D2 — One guide or twelve?** Keep Buddy as the only speaking character and treat world
  guides as Buddy's friends who appear in art only (recommended: one voice, one relationship), or
  give each world guide a voice.

## 9. Implemented in this increment

| Change | Level |
|---|---|
| Narrator: single queue (no overlap), state (`playing/paused/idle` + source), pause / resume / replay | Implemented, Tested, Seen |
| Buddy line catalogue (`src/lib/buddyLines.ts`) — 11 recorded lines reused from IVU Reads, 6 marked to record | Implemented, Tested |
| Spoken feedback in every activity type (praise, try again, got it, let's look together) | Implemented, Tested, Seen (recorded clips played) |
| Recorded lesson celebration ("Today's lesson is done! You did it!") | Implemented |
| Listen buttons become pause / carry-on while playing; lesson top-bar replay/pause control | Implemented, Tested, Seen |
| Tap Buddy on home to hear welcome / welcome back; atlas listen button | Implemented, Seen (desktop + mobile) |
| On-device coverage counter + grown-ups' **Voice coverage** panel with most-heard unrecorded lines | Implemented, Tested, Seen |
| `npm run audit:audio` → `docs/AUDIO_COVERAGE.md`, `--missing` recording script, CI check | Implemented, run in CI |
| Narration guidelines (`docs/NARRATION.md`) | Written |
| Node ≥ 25 test fix | Tested |

## 10. Prioritised backlog

1. **Lesson player v2 (Phase 4)** — Buddy-led lesson start (topic intro + spoken instruction),
   child-sized step indicator (icons/dots, no text wizard), lighter Learn step (vocabulary and
   grown-up notes collapsed), consistent replay. Stays on top of the existing items, mastery and
   revision calls.
2. **D1 narration decision, then first recording tranche** — Buddy's 6 lines, then ages 4–6
   prompts/explanations/stories from the `--missing` export.
3. **Design-system pass (Phase 1)** — extract tokens (colour, type, spacing, radius, shadow,
   motion) and shared components (Button, Card, Bubble, ProgressDots) so world, subject, lesson,
   play and journey pages adopt the owl language without per-page rewrites.
4. **World & subject pages in the owl language (Phase 3)** — world intro with Buddy, subject
   discovery with clearer progress.
5. **New interaction templates (Phase 6)** — sort/classify and drag-to-order built on the existing
   `order`/`match` data first (no curriculum changes), then listen-and-choose for phonics.
6. **Validation (Phase 8)** — axe accessibility run in e2e, screenshot set at 3 sizes across all
   12 worlds, real-device pass on iOS Safari and Android Chrome, sampled lesson runs across stages.
7. **Parent clarity (Phase 7)** — explain mastery stages and recommendations in plain language;
   surface curriculum audio coverage next to the on-device numbers.
