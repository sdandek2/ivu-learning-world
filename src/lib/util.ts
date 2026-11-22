export function shuffle<T>(xs: readonly T[], seed?: number): T[] {
  const a = [...xs];
  let s = seed ?? Math.floor(Math.random() * 2 ** 31);
  const rnd = () => ((s = (s * 1103515245 + 12345) % 2 ** 31) / 2 ** 31);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Shuffle but never return the original order (for ordering puzzles). */
export function shuffleNotIdentity<T>(xs: readonly T[], seed?: number): T[] {
  if (xs.length < 2) return [...xs];
  for (let k = 0; k < 10; k++) {
    const a = shuffle(xs, seed !== undefined ? seed + k : undefined);
    if (a.some((x, i) => x !== xs[i])) return a;
  }
  return [...xs].reverse();
}

export const pct = (x: number | null | undefined) => (x === null || x === undefined ? '—' : `${Math.round(x * 100)}%`);
export const cx = (...xs: (string | false | null | undefined)[]) => xs.filter(Boolean).join(' ');
export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export function relativeDay(t: number, now = Date.now()): string {
  const d = Math.round((t - now) / 86400000);
  if (d === 0) return 'today';
  if (d === 1) return 'tomorrow';
  if (d === -1) return 'yesterday';
  return d > 0 ? `in ${d} days` : `${-d} days ago`;
}
