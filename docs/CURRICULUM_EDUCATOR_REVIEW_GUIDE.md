# IVU Curriculum Educator Review Guide

## Purpose

The automated curriculum audit is a screening tool. It checks structural completeness, interaction variety, item-specific feedback coverage, project safety/privacy prompts and repeated prompts. It does **not** certify factual accuracy, age fit, inclusion or instructional effectiveness.

Use this guide for human review of each lesson. Do not pad content to meet word counts. Preserve lesson IDs, item IDs, unit relationships and prerequisite references.

## Lesson review rubric

Score each dimension from 0 to 2:

- **0 — Not ready:** missing, incorrect, unsafe, confusing or mismatched to the objective.
- **1 — Needs revision:** partly effective, but a child or caregiver would need significant help or clarification.
- **2 — Ready:** accurate, clear, age-appropriate and usable as written.

| Dimension | What the reviewer checks |
|---|---|
| Accuracy and evidence | Claims are correct, appropriately qualified and supported by reliable sources where needed. |
| Objective alignment | Explanation, story, practice, project and assessment teach or assess the stated objectives. |
| Developmental fit | Vocabulary, reading demand, abstraction, duration and independence match the selected stage. |
| Explanation quality | The concept is explained clearly, with useful examples and misconceptions addressed. |
| Story and context | The story is coherent, memorable and connected to the concept without adding misleading claims. |
| Practice design | Activities require meaningful thinking and include more than repeated recognition where appropriate. |
| Feedback | Wrong answers receive an explanation or a useful pointer to the relevant lesson explanation. |
| Assessment and transfer | Assessment checks understanding in a new context, not only repeated recall. |
| Safety and accessibility | Projects account for tools, heat, electricity, water, choking, allergies, privacy, mobility and supervision. |
| Cultural respect and inclusion | Examples avoid stereotypes; traditions are represented with appropriate nuance and clear evidence/belief/tradition distinctions. |

## Approval rule

A lesson is **ready for release** only when:

1. Accuracy and evidence score 2.
2. Safety and accessibility score 2.
3. No dimension scores 0.
4. Total score is at least 16/20.
5. Any factual claim that may change over time has a dated source check.
6. The reviewer records the lesson ID, reviewer, date, scores, sources and any edits.

If a reviewer cannot verify a claim, mark it **needs expert review** rather than guessing. Health, safety, science, history, heritage, religion and legal/civic claims should receive subject-matter review where material.

## Stage-specific prompts

- **s4 (ages 4–5):** concrete objects, short spoken directions, adult-supported activities, safe large materials, one idea at a time.
- **s5 (ages 5–6):** early reading and number, sorting and comparing, simple explanations, adult-prepared tools.
- **s6 (ages 6–7):** simple independent reading, first experiments, explicit steps, observation and retelling.
- **s7 (ages 7–9):** multi-step reasoning, fair tests, timelines, comparing viewpoints and explaining choices.
- **s9 (ages 9–12):** evidence, abstraction, systems, source evaluation, structured argument and responsible data collection.
- **s12 (ages 12+):** formal reasoning, independent research, critique, uncertainty, ethics and extended projects.

## Review workflow

1. Run `npm run validate` and `npm run audit:curriculum`.
2. Resolve every `project-safety`, `project-privacy`, `repeated-prompt`, `activity-variety` and `assessment-variety` finding.
3. Review descriptive stage metrics; use them to select candidates, not as hard pass/fail word-count limits.
4. Review factual claims against primary or authoritative sources.
5. Score the lesson with this rubric and record the result in the educator review register.
6. Re-run validation, tests and production build after edits.

## Stable-data rules

- Never change a lesson or item ID just to rewrite its text or interaction type.
- Do not remove or repoint prerequisite IDs without a deliberate migration plan.
- Keep authored curriculum source files as the source of truth; regenerate JSON through the existing build process.
- Do not alter IndexedDB progress structures or backup compatibility as part of content editing.
- Keep the curriculum and app offline-capable; no required network or AI dependency may be introduced into lesson playback.
