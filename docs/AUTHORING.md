# Curriculum authoring guide

Source: `curriculum/src/subjects/<subjectId>.ts`, written with the DSL in `curriculum/src/dsl.ts`.
Build + validate: `npm run build:curriculum` (writes `public/curriculum/v1/*` and the manifest).
Validate only: `npm run validate`. Require all 60 subjects: `node scripts/build-curriculum.ts --strict`.

## Required shape (enforced by `src/curriculum/schema.ts`)
- 6 stages in order: `s4` (4–5), `s5` (5–6), `s6` (6–7), `s7` (7–9), `s9` (9–12), `s12` (12+).
- Each stage ≥ 2 units; each unit ≥ 1 lesson (`U(slug, title, summary, 'Topic: sub, sub; Topic: sub', [lessons])`).
- Each lesson (`L(slug, title, {...})`) needs:
  `o` ≥2 objectives · `p` ≥1 prerequisites · `e` ≥2 explanation paragraphs (≥120 chars total) ·
  `v` ≥3 vocabulary (`term = meaning; …`) · `x` ≥2 examples · `s` story [title, ≥80 chars] ·
  `a` ≥3 activities · `t` ≥2 critical-thinking questions · `k` ≥1 speaking task ·
  `m` project/experiment `[title, 'materials, …', 'step | step', safety?]` (prefix title with `🧪 ` for experiments) ·
  `q` ≥3 assessment items · `ms` ≥2 mastery criteria · `c` context notes (required for history & heritage subjects).
- Items: `ch(prompt, 'a|*b|c', why?)`, `tf(prompt, bool, why?)`, `od(prompt, 'first|second|third')`,
  `mt(prompt, 'l=r|l=r|l=r')` (sides must be unique), `ct(prompt, n)` (0–20; emoji in the prompt become touch-countable).

## Content rules
- Ages 4–5: concrete, playful, emoji-supported prompts; short sentences; items answerable by a pre-reader with read-aloud.
- Accuracy: no invented facts, dates or quotations. When scholars disagree, say so. Use "about"/"around" for uncertain dates.
- Context labels: `evidence` (archaeology/documents), `science`, `tradition` (a story as told in a tradition),
  `belief` (what followers believe — "Many Hindus believe…"), `interpretation` (how people read a text).
- Never ask a child to adopt or reject a belief. Present traditions respectfully and in their own terms.
- IDs are derived from slugs: never rename a published slug (it would orphan saved progress). Add new slugs instead.
- Bump `CONTENT_VERSION` in `curriculum/src/catalog.ts` when changing published content.
