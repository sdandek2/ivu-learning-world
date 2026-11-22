import 'fake-indexeddb/auto';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Node 25+ ships its own (file-backed, usually disabled) global localStorage, which can shadow
// jsdom's. Make sure tests always use a working in-memory Storage, whatever the local Node is.
if (typeof globalThis.localStorage?.clear !== 'function') {
  const mem = new Map<string, string>();
  const storage: Storage = {
    get length() { return mem.size; },
    clear: () => mem.clear(),
    getItem: (k) => (mem.has(k) ? mem.get(k)! : null),
    key: (i) => [...mem.keys()][i] ?? null,
    removeItem: (k) => { mem.delete(k); },
    setItem: (k, v) => { mem.set(k, String(v)); },
  };
  Object.defineProperty(globalThis, 'localStorage', { value: storage, configurable: true, writable: true });
}

afterEach(() => cleanup());
