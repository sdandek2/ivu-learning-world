import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ItemPlayer } from '../src/ui/ItemPlayer.tsx';
import type { Item } from '../src/curriculum/schema.ts';

vi.mock('../src/state/store.tsx', () => ({ useStore: () => ({ settings: { sounds: false, readAloud: 'off', speechRate: 1, voiceURI: null } }) }));

describe('ItemPlayer', () => {
  it('scores a first-try correct choice as independent', () => {
    const item: Item = { id: 'x.a1', kind: 'choice', prompt: 'Which is 3?', options: ['2', '3', '4'], answer: 1 };
    const done = vi.fn();
    render(<ItemPlayer item={item} onDone={done} />);
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: /Next/ }));
    expect(done).toHaveBeenCalledWith({ itemId: 'x.a1', correct: true, wrongTries: 0, usedHint: false });
  });
  it('reveals the answer after two wrong tries and records it as not correct', () => {
    const item: Item = { id: 'x.a2', kind: 'choice', prompt: 'Which is 3?', options: ['2', '3', '4'], answer: 1 };
    const done = vi.fn();
    render(<ItemPlayer item={item} onDone={done} />);
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    expect(screen.getByText(/The answer is/)).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Next/ }));
    expect(done).toHaveBeenCalledWith({ itemId: 'x.a2', correct: false, wrongTries: 2, usedHint: false });
  });
  it('records hint use', () => {
    const item: Item = { id: 'x.a3', kind: 'count', prompt: 'How many? 🍎🍎', answer: 2 };
    const done = vi.fn();
    render(<ItemPlayer item={item} onDone={done} />);
    fireEvent.click(screen.getByRole('button', { name: /hint/i }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: /Next/ }));
    expect(done).toHaveBeenCalledWith({ itemId: 'x.a3', correct: true, wrongTries: 0, usedHint: true });
  });
  it('checks true/false', () => {
    const item: Item = { id: 'x.a4', kind: 'truefalse', prompt: 'Fish can swim.', answer: true };
    const done = vi.fn();
    render(<ItemPlayer item={item} onDone={done} />);
    fireEvent.click(screen.getByRole('button', { name: /True/ }));
    fireEvent.click(screen.getByRole('button', { name: /Next/ }));
    expect(done).toHaveBeenCalledWith({ itemId: 'x.a4', correct: true, wrongTries: 0, usedHint: false });
  });
});


describe('age-aware activity scaffolding', () => {
  it('offers immediate Buddy coaching to early-stage learners', () => {
    const item: Item = { id: 'x.early', kind: 'classify', prompt: 'Sort the things.', categories: ['Fruit', 'Vegetables'], items: [{ label: 'Apple', category: 0 }, { label: 'Pear', category: 0 }, { label: 'Carrot', category: 1 }] };
    render(<ItemPlayer item={item} ageBand="early" onDone={vi.fn()} />);
    expect(screen.getByText('One little step at a time. You can do it!')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Let Buddy help/ }));
    expect(screen.getByText(/Think about what the items in each group/)).toBeTruthy();
  });
  it('keeps the assessment hint-free for advanced learners', () => {
    const item: Item = { id: 'x.advanced', kind: 'choice', prompt: 'Which is 3?', options: ['2', '3', '4'], answer: 1 };
    render(<ItemPlayer item={item} ageBand="advanced" allowHints={false} onDone={vi.fn()} />);
    expect(screen.queryByRole('button', { name: /hint/i })).toBeNull();
    expect(screen.queryByText(/One little step at a time/)).toBeNull();
  });
});


describe('phonics word rehearsal', () => {
  it('keeps early-stage words hidden until revealed and tracks practice without scoring', async () => {
    const { PhonicsWordPractice } = await import('../src/pages/child/LessonStudio.tsx');
    render(<PhonicsWordPractice vocabulary={[{ term: 'blend', meaning: 'push sounds together to say a word' }, { term: 'sound', meaning: 'what we hear' }]} ageBand="early" />);
    expect(screen.getAllByText('A word to discover')).toHaveLength(2);
    fireEvent.click(screen.getAllByRole('button', { name: 'Reveal word & meaning' })[0]);
    expect(screen.getByText('push sounds together to say a word')).toBeTruthy();
    fireEvent.click(screen.getAllByRole('button', { name: 'I said it' })[0]);
    expect(screen.getByRole('button', { name: '✓ Practised' })).toBeTruthy();
    expect(screen.getByText(/not a scored reading test/)).toBeTruthy();
  });
});


describe('story listening reflection', () => {
  it('offers open-ended recall without creating a scored result', async () => {
    const { StoryStep } = await import('../src/pages/child/LessonStudio.tsx');
    render(<StoryStep title="A small story" text="A character goes on an adventure and finds a friend." ageBand="early" onNext={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /I've listened — let's remember/i }));
    expect(screen.getByText('What happened in the story?')).toBeTruthy();
    expect(screen.getByText(/There is no score here/)).toBeTruthy();
  });
});
