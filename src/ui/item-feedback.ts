import type { Item } from '../curriculum/schema.ts';

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do', 'does', 'for',
  'from', 'how', 'in', 'is', 'it', 'of', 'on', 'or', 'that', 'the', 'their',
  'this', 'to', 'use', 'was', 'we', 'what', 'when', 'which', 'with', 'you',
]);

function tokens(value: string): string[] {
  return (value.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [])
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

function answerFor(item: Item): string {
  switch (item.kind) {
    case 'choice': return item.options[item.answer] ?? '';
    case 'truefalse': return item.answer ? 'true' : 'false';
    case 'count': return String(item.answer);
    case 'order': return item.items.join(' ');
    case 'match': return item.pairs.map(([left, right]) => `${left} ${right}`).join(' ');
  }
}

/**
 * Selects the lesson explanation paragraph most relevant to an item when
 * the author has not supplied item-specific feedback. This is a contextual
 * fallback, not a generated claim: the returned text is authored lesson copy.
 */
export function selectTeachingContext(item: Item, paragraphs: string[]): string | null {
  if (!paragraphs.length) return null;
  const query = new Set(tokens(`${item.prompt} ${answerFor(item)}`));
  if (!query.size) return paragraphs[0] ?? null;

  let bestIndex = 0;
  let bestScore = -1;
  paragraphs.forEach((paragraph, index) => {
    const score = tokens(paragraph).reduce((total, word) => total + (query.has(word) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });
  return paragraphs[bestIndex] ?? null;
}
