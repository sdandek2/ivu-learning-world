# IVU Learning World

A local-first learning platform for **Ivaan** (age 4 and growing): **12 learning worlds, 60 subjects, 6 developmental stages (ages 4–5 through 12+)**, built with real, structured, versioned curriculum. It runs entirely on your own computer: there is no hosting, no account, no tracking and no mandatory external service. Progress is stored in the browser (IndexedDB) and can be backed up to a single file.

| | |
|---|---|
| Curriculum | v1.0.0: 60/60 subjects, 730 units, 730 lessons, 5,111 interactive items (see [`docs/CURRICULUM_MANIFEST.md`](docs/CURRICULUM_MANIFEST.md)) |
| Stack | React 19 + TypeScript + Vite 7, zod 4, IndexedDB, hand-written service worker |
| Language | English (Marathi and Sanskrit interfaces are planned; see [Languages](#languages)) |
| AI | None. Intentionally deferred |

---

## 1. Installation

**Requirements**

- **Node.js 22.18 or newer** (the build scripts use Node's built-in TypeScript support). Check with `node --version`.
- npm (bundled with Node).
- A modern browser: Chrome, Edge, Firefox or Safari.

```bash
git clone https://github.com/sdandek2/ivu-learning-world.git
```

```bash
cd ivu-learning-world
```

```bash
npm ci
```

`npm ci` installs the exact versions recorded in `package-lock.json` without changing it. It is the only step that needs the internet; after that, everything works offline.

### Getting updates later

```bash
git pull
```

```bash
npm ci
```

```bash
npm run build
```

If `git pull` says *"Your local changes … would be overwritten"* and you haven't edited anything yourself, those are just generated files. Discard them with `git checkout -- .` and pull again.

## 2. Running it

### Everyday use (recommended)

Build once, then serve the built app:

```bash
npm run build
```

```bash
npm run preview
```

Open **http://localhost:4173** in the browser. After the first visit, the service worker caches the whole app and all 60 subjects, so it keeps working even if the computer goes offline.

> Tip: in Chrome or Edge, use **Install app** (the icon in the address bar) to give Ivaan a full-screen app with its own icon.

### While editing code or curriculum

```bash
npm run dev
```

This starts a live-reloading dev server (the service worker is disabled in dev mode).

### Using it on a tablet on your home network (optional)

```bash
npm run preview -- --host
```

Then open the `Network:` address it prints (for example `http://192.168.1.20:4173`) on the tablet. Note: browsers only allow service workers (offline mode) on `localhost` or HTTPS, so over plain LAN HTTP the app works but needs the computer to be running. Each device keeps **its own** progress; use backup and restore to move it between devices.

> Opening `dist/index.html` directly from the file system (`file://`) will **not** work, because browsers block loading the curriculum files that way. Always use `npm run preview` or another local static server.

## 3. Using the app

**Child area** (big buttons, read-aloud, sounds, no reading required at stage 4–5):

- **Worlds**: the 12 illustrated worlds, then their subjects, units and lessons. **Today's Path** suggests what to do next: due revisions first, then the next lesson in progress, then something new.
- **Learning Studio**: every lesson runs Learn → Story → Play → Think & Talk → Make → Check → Celebrate. Context notes (evidence, belief, tradition, interpretation) appear in history and heritage lessons.
- **Arena**: quick mixed challenges from lessons already started.
- **Studio**: drawing canvas, story maker and gallery.
- **Journey**: personal progress map. **Badges**: 18 achievements.

**IVU Reads** (the big 🚗📖 card on the Word Woods page, and on the Phonics page at ages 4–6) is Ivaan's phonics flashcard app, built in as its own area:

- **Reading road:** 15 levels, from letter sounds through 2-letter, 3-letter and 4-letter words, sound pairs, star words, phrases and sentences, to short stories and vowel teams.
- **Activities:** sound-it-out blending, games, "My practice words" and mixed vowel practice.
- **Recorded voice:** its 500 recorded clips also power Learning World's read-aloud wherever there is a recording for the exact text. For example, the Phonics lessons use IVU Reads' words and its story "Ivu and the Red Car". This can be switched off in *Grown-ups → Settings*.
- **Progress:** stays inside IVU Reads (in this browser), appears on the parent dashboard, and is included in Learning World backups.
- **Getting home:** tap **🏠 Learning World** (bottom left) to come back.

**Grown-ups area** (the *Grown-ups* tab in the bottom bar, protected by a multiplication question):

- **Dashboard**: mastery stages, the evidence profile (accuracy, independence, retention, explaining, applying), per-world progress, revisions due and recent activity.
- **Curriculum**: the full curriculum guide: every stage, unit, lesson, objective, explanation, vocabulary item, activity, project, assessment, mastery criterion and revision schedule.
- **Settings**: learner name, starting stage (overall and per subject), read-aloud mode, voice and speed, sounds, reduced motion, session length and automatic stage advance.
- **Backup & restore**: see below.

### How mastery works

Mastery is **never a quiz score alone**. Each lesson is a skill that moves through five stages:

| Stage | What it takes |
|---|---|
| 1 Introduction | The lesson has been opened and explored |
| 2 Recognition | ≥ 3 scored answers and ≥ 60% accuracy (or a Check ≥ 80%) |
| 3 Understanding | Check ≥ 80%, ≥ 60% right on the first try without hints, and explained the idea (at least with help) |
| 4 Application | Understanding, plus the project or real-world task done, plus latest Check ≥ 80% |
| 5 Mastery | Application, plus retained after a gap of ≥ 3 days (≥ 80%), explained independently, and ≥ 75% independence |

A failed retention check caps the skill at Understanding until it is earned again. Revisions are scheduled at stage-appropriate spaced intervals (for example, 1, 2, 4, 7, 14 and 30 days at age 4–5).

## 4. Backup and recovery

All progress (skills, activity log, settings, artwork, and IVU Reads progress and recorded sounds) lives in this browser's storage (IndexedDB, plus localStorage for IVU Reads) **for this site address on this device**. Clearing browsing data or "site data", uninstalling the browser, or switching to a different browser or profile removes or hides it. **Back up regularly.**

**Make a backup**

1. Open **Grown-ups → Backup & restore**.
2. Click **Download backup file**. A file such as `ivu-learning-world-backup-2026-11-22.json` is saved.
3. Keep copies somewhere safe: a USB stick, an external drive or your own cloud folder. A weekly backup is a good habit.

**Restore a backup** (new computer, new browser, or after data loss)

1. Install and run the app as above.
2. Open **Grown-ups → Backup & restore → Restore from a backup** and choose the backup file.
3. The file is **fully validated before anything is changed**, and a summary is shown. If it is damaged or from an incompatible version, nothing is overwritten. Confirm with **Replace current data with this backup**; a valid restore replaces all stores in a single transaction.

**Other recovery notes**

- **The site address matters.** Progress saved at `http://localhost:4173` is separate from `http://localhost:5173` (dev) or a LAN address. Use backup and restore to move between them.
- **Persistent storage**: the Backup page shows whether the browser has granted persistent storage. If it has not, the browser may clear data when the disk is nearly full, which is one more reason to keep backups.
- **Reset**: the Backup page also has *Reset progress* (type RESET to confirm). It deletes skills, activity and badges but keeps settings and creations. Download a backup first.
- **The code and curriculum** are in Git. If the folder is lost, clone the repository again and run `npm ci`. Learning data is *not* in Git; it lives only in the backup files.
- **Curriculum updates** keep stable lesson IDs (`subject.stage.unit.lesson`), so existing progress stays attached to the right lessons after a content update.

### Updating IVU Reads

If you have a newer IVU Reads HTML file, re-import it:

```bash
npm run import:ivu-reads -- path/to/ivu_reads.html
```

Then run `npm run build`. The import extracts the embedded recordings to `public/ivu-reads/audio/`, replaces Google Fonts with local copies, and adds the home button. IVU Reads' own logic is left unchanged, and progress is kept, because the storage keys stay the same.

**Moving existing IVU Reads progress:** if Ivaan has progress in a separate copy of IVU Reads (for example, the HTML file opened on its own), export it there with *Grown-ups (press and hold) → ⬇ Download backup*. Then open IVU Reads inside Learning World and load the file with *Grown-ups → ⬆ Restore backup*.

## 5. Project structure

```
curriculum/src/          Authoring source (TypeScript DSL): catalog.ts (worlds, stages), dsl.ts, subjects/*.ts (60 files)
curriculum/MANIFEST.json Generated progress manifest (also docs/CURRICULUM_MANIFEST.md)
public/curriculum/v1/    Generated, validated JSON: index.json, outline.json, subjects/<id>.json (lazy-loaded)
public/sw.js             Service worker (precache list injected at build time)
public/ivu-reads/        IVU Reads app (imported): index.html, 500 recordings in audio/, clips.json, levels.json, local fonts
scripts/                 build-curriculum.ts, audit-curriculum-quality.ts, import-ivu-reads.mjs, tidy-imports.mjs, save-progress.sh, e2e-smoke.mjs
src/curriculum/          zod schema + semantic checks (shared by build, app and tests), loader
src/engine/              Pure logic: mastery, revision scheduling, adaptive recommendations, achievements
src/db/                  IndexedDB wrapper (stores: kv, skills, log, art)
src/lib/                 Backup, speech (read-aloud), sound, router, utilities
src/state/               App store (React context)
src/ui/                  Shared components, world illustrations, item player
src/pages/child/         Universe, worlds, subjects, Learning Studio, Arena, Studio, Journey, Badges
src/pages/parent/        Parent gate, dashboard, curriculum guide, settings, backup (lazy-loaded chunk)
tests/                   Vitest unit and integration tests
docs/                    Authoring guide, curriculum manifest, educator review guide, fact-check source register, implementation report
```

## 6. Curriculum authoring

The curriculum is written in a compact TypeScript DSL (`curriculum/src/subjects/*.ts`) and compiled into versioned JSON. Every lesson must contain objectives, prerequisites, explanation, vocabulary, examples, a story, at least 3 interactive activities, critical-thinking questions, a speaking task, a project or experiment, an assessment, mastery criteria and a revision schedule. History and heritage lessons must also carry labelled context notes. See [`docs/AUTHORING.md`](docs/AUTHORING.md).

```bash
npm run validate
```

The command above validates without writing anything. The next one rebuilds the JSON and the manifest and fails if any of the 60 subjects is missing:

```bash
node scripts/build-curriculum.ts --strict
```

## 7. Quality checks

```bash
npm run typecheck
```

```bash
npm test
```

```bash
npm run audit:curriculum
```

The curriculum audit reports interaction variety, project safety/privacy gaps, repeated prompts, and age-stage content metrics across all 60 subjects and 730 lessons. It is a deterministic screening tool, not an educator or factuality certification. Use [`docs/CURRICULUM_EDUCATOR_REVIEW_GUIDE.md`](docs/CURRICULUM_EDUCATOR_REVIEW_GUIDE.md) for human review and [`docs/CURRICULUM_FACT_CHECK_SOURCES.md`](docs/CURRICULUM_FACT_CHECK_SOURCES.md) for sources checked during targeted safety edits. CI publishes the audit report as a downloadable artifact.

```bash
npm run build && npm run e2e
```

- `npm test` runs 283 tests: the mastery engine, revision and adaptive logic, achievements, storage and backup round-trip, the item player UI, the IVU Reads bridge (mastery rule, recorded-voice lookup, backup round-trip), and validation of every generated curriculum file against the schema and the manifest.
- `npm run e2e` drives a real browser (Playwright) through the universe, a world, a subject, a full lesson, the parent gate and dashboard, the curriculum guide, backup download, the Arena, the Studio, the Journey and badges, an offline reload (including IVU Reads and its recordings), opening IVU Reads from Word Woods, recorded-voice read-aloud and the mobile layout. Add `-- --shots <dir>` to save screenshots.

## Languages

The interface strings live in `src/i18n/` (English ships in v1). Marathi (`mr`) and Sanskrit (`sa`) are registered as planned locales. The *Languages & Scripts* subject already introduces Marathi and Sanskrit words, numbers and the Devanagari script, through English. A future version can add parallel localised content files per language without changing lesson IDs.

## Privacy

There is no network traffic beyond loading the app from your own machine: no analytics, no accounts, no external APIs. Read-aloud uses the IVU Reads recordings where they exist; otherwise it uses the browser's built-in speech synthesis, whose voices depend on the operating system.
