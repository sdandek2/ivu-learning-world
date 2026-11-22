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
    fireEvent.click(screen.getByRole('button', { name: /Hint/ }));
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
