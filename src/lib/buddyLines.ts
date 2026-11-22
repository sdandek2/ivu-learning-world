/**
 * Buddy's voice — the catalogue of everything Buddy says that is not curriculum content.
 *
 * Rules (see docs/NARRATION.md):
 *  - One narrator. Lines marked `recorded: true` MUST exactly match a recording in
 *    public/ivu-reads/clips.json (a test enforces this), so feedback and praise always use the
 *    same human voice as IVU Reads.
 *  - Lines marked `recorded: false` are the recording backlog: they play in the computer voice
 *    until a narrator records them, and the audio coverage report lists them first.
 *  - Short, warm, concrete. Praise effort and strategy, never "smart". No sarcasm, no pressure.
 *  - Never put the child's name inside a line that should use a recording: names are not recorded.
 */

export interface BuddyLine { id: string; text: string; recorded: boolean; use: string }

const L = (id: string, text: string, recorded: boolean, use: string): BuddyLine => ({ id, text, recorded, use });

export const BUDDY_LINES = {
  // Feedback during activities — all recorded today (reused from IVU Reads).
  praise: [
    L('praise.brilliant', 'Brilliant!', true, 'first-try correct answer'),
    L('praise.superstar', 'Super star!', true, 'first-try correct answer'),
    L('praise.wow', 'Wow!', true, 'first-try correct answer'),
    L('praise.yay', 'Yay!', true, 'first-try correct answer'),
  ],
  gotIt: [
    L('gotit.youdidit', 'You did it!', true, 'correct after a retry or a hint'),
    L('gotit.goodtrying', 'Good trying!', true, 'correct after a retry or a hint'),
  ],
  tryAgain: [
    L('retry.tryagain', 'Try again!', true, 'wrong answer, another try allowed'),
  ],
  showAnswer: [
    L('show.together', "Let's look at it together.", false, 'answer revealed after two tries'),
  ],
  // Lesson flow.
  lessonDone: L('lesson.done', "Today's lesson is done! You did it!", true, 'lesson celebration'),
  nextActivity: L('lesson.next', 'Next activity!', true, 'moving to the next lesson step'),
  storyTime: L('lesson.story', "Let's read a story!", true, 'story step opens'),
  yourTurn: L('lesson.turn', 'Your turn!', true, 'practice/check step opens'),
  // Not yet recorded — the narration backlog, highest priority first.
  welcome: L('home.welcome', "Hi, explorer! I'm Buddy. Shall we discover something new today?", false, 'home screen, Buddy tapped'),
  welcomeBack: L('home.welcomeback', 'Welcome back, explorer! Your next adventure is ready.', false, 'home screen, returning learner'),
  atlas: L('atlas.intro', 'Where shall we go? Tap a world to visit it.', false, 'world atlas'),
  lessonIntro: L('lesson.intro', "Let's learn something new together. Listen, then tap Next.", false, 'lesson start'),
  checkIntro: L('lesson.check', 'Now show me what you know. Try these by yourself.', false, 'check step opens'),
} as const;

/** Every catalogue line, flattened (used by tests and the coverage report). */
export function allBuddyLines(): BuddyLine[] {
  const out: BuddyLine[] = [];
  for (const v of Object.values(BUDDY_LINES)) Array.isArray(v) ? out.push(...v) : out.push(v as BuddyLine);
  return out;
}

/** Picks a line from a pool without immediately repeating the previous pick. */
let lastPick = '';
export function pick(pool: readonly BuddyLine[], rand: () => number = Math.random): BuddyLine {
  const choices = pool.length > 1 ? pool.filter((l) => l.id !== lastPick) : pool;
  const line = choices[Math.floor(rand() * choices.length)] ?? pool[0];
  lastPick = line.id;
  return line;
}
