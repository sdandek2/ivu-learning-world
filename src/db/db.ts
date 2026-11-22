/**
 * Minimal promise-based IndexedDB layer (no dependencies).
 *
 * Stores:
 *   kv      — key/value documents (profile, settings, achievements, streak, meta)
 *   skills  — one SkillRecord per skill (keyPath: skillId)
 *   log     — append-only activity log (autoIncrement)
 *   art     — Creative Studio artworks and stories (keyPath: id)
 */
export const DB_NAME = 'ivu-learning-world';
export const DB_VERSION = 1;
export const STORES = ['kv', 'skills', 'log', 'art'] as const;
export type StoreName = (typeof STORES)[number];

let dbPromise: Promise<IDBDatabase> | null = null;

export function openDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('kv')) db.createObjectStore('kv');
      if (!db.objectStoreNames.contains('skills')) db.createObjectStore('skills', { keyPath: 'skillId' });
      if (!db.objectStoreNames.contains('log')) db.createObjectStore('log', { keyPath: 'id', autoIncrement: true });
      if (!db.objectStoreNames.contains('art')) db.createObjectStore('art', { keyPath: 'id' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onblocked = () => reject(new Error('Database upgrade blocked — close other tabs of IVU Learning World.'));
  });
  return dbPromise;
}

/** For tests: forget the cached connection. */
export async function closeDB(): Promise<void> {
  if (dbPromise) (await dbPromise).close();
  dbPromise = null;
}

function wrap<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function store(name: StoreName, mode: IDBTransactionMode) {
  const db = await openDB();
  return db.transaction(name, mode).objectStore(name);
}

export async function get<T>(name: StoreName, key: IDBValidKey): Promise<T | undefined> {
  return wrap((await store(name, 'readonly')).get(key)) as Promise<T | undefined>;
}
export async function getAll<T>(name: StoreName): Promise<T[]> {
  return wrap((await store(name, 'readonly')).getAll()) as Promise<T[]>;
}
export async function put<T>(name: StoreName, value: T, key?: IDBValidKey): Promise<void> {
  await wrap((await store(name, 'readwrite')).put(value, key));
}
export async function del(name: StoreName, key: IDBValidKey): Promise<void> {
  await wrap((await store(name, 'readwrite')).delete(key));
}
export async function clear(name: StoreName): Promise<void> {
  await wrap((await store(name, 'readwrite')).clear());
}
export async function getAllKV(): Promise<Record<string, unknown>> {
  const s = await store('kv', 'readonly');
  const [keys, values] = await Promise.all([wrap(s.getAllKeys()), wrap(s.getAll())]);
  const out: Record<string, unknown> = {};
  keys.forEach((k, i) => (out[String(k)] = values[i]));
  return out;
}

/** Replace the entire contents of all stores atomically (used by restore). */
export async function replaceAll(data: { kv: Record<string, unknown>; skills: unknown[]; log: unknown[]; art: unknown[] }): Promise<void> {
  const db = await openDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction([...STORES], 'readwrite');
    for (const n of STORES) tx.objectStore(n).clear();
    for (const [k, v] of Object.entries(data.kv)) tx.objectStore('kv').put(v, k);
    for (const s of data.skills) tx.objectStore('skills').put(s);
    for (const l of data.log) tx.objectStore('log').put(l);
    for (const a of data.art) tx.objectStore('art').put(a);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error ?? new Error('restore aborted'));
  });
}

/** Ask the browser not to evict our data under storage pressure. */
export async function requestPersistence(): Promise<boolean> {
  try {
    if (navigator.storage?.persist) return await navigator.storage.persist();
  } catch { /* not supported */ }
  return false;
}
