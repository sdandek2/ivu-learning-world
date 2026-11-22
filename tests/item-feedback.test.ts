import { describe, expect, it } from 'vitest';
import { selectTeachingContext } from '../src/ui/item-feedback.ts';
import type { Item } from '../src/curriculum/schema.ts';

const choice: Item = {
  id: 'animals.s4.test.a1',
  kind: 'choice',
  prompt: 'Which animal lives in a hive?',
  options: ['bee', 'cow', 'fish'],
  answer: 0,
};

describe('selectTeachingContext', () => {
  it('selects the authored explanation paragraph most relevant to the prompt and answer', () => {
    const paragraphs = [
      'Fish live in rivers, ponds and the sea.',
      'Bees live in hives and make honey there.',
      'Rabbits dig burrows underground.',
    ];
    expect(selectTeachingContext(choice, paragraphs)).toBe(paragraphs[1]);
  });

  it('returns the first authored paragraph when no words overlap', () => {
    const paragraphs = ['First lesson paragraph.', 'Second lesson paragraph.'];
    expect(selectTeachingContext(choice, paragraphs)).toBe(paragraphs[0]);
  });

  it('returns null when no lesson context is available', () => {
    expect(selectTeachingContext(choice, [])).toBeNull();
  });

  it('uses ordered and matched answers when selecting context', () => {
    const order: Item = {
      id: 'history.s5.test.a1',
      kind: 'order',
      prompt: 'Put the historical events in order',
      items: ['ancient city', 'iron tools', 'modern city'],
    };
    const paragraphs = ['Modern cities grew much later.', 'Iron tools appeared after earlier ancient settlements.'];
    expect(selectTeachingContext(order, paragraphs)).toBe(paragraphs[1]);
  });
});
