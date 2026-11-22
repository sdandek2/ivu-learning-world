import { describe, it, expect, beforeEach } from 'vitest';
import { IDBFactory } from 'fake-indexeddb';
import * as db from '../src/db/db.ts';
import { createBackup, parseBackup, restoreBackup } from '../src/lib/backup.ts';
import { newSkill, markIntroduced } from '../src/engine/mastery.ts';

beforeEach(async () => {
  await db.closeDB();
  (globalThis as { indexedDB: IDBFactory }).indexedDB = new IDBFactory();
});

describe('IndexedDB storage', () => {
  it('persists and reads back skills, kv and log entries', async () => {
    const s = markIntroduced(newSkill('sk.a.s4.u.l', 'a.s4.u.l'));
    await db.put('skills', s);
    await db.put('kv', { learnerName: 'Ivaan' }, 'settings');
    await db.put('log', { at: 1, type: 'lesson-open', lessonId: 'a.s4.u.l' });
    expect(await db.get('skills', s.skillId)).toEqual(s);
    expect((await db.getAllKV()).settings).toEqual({ learnerName: 'Ivaan' });
    expect(await db.getAll('log')).toHaveLength(1);
  });
});

describe('backup and restore', () => {
  it('round-trips all data through a JSON backup', async () => {
    await db.put('skills', markIntroduced(newSkill('sk.a.s4.u.l', 'a.s4.u.l')));
    await db.put('kv', { learnerName: 'Ivaan' }, 'settings');
    await db.put('art', { id: 'x', kind: 'story', title: 'T', createdAt: 1, text: 'Once…' });
    const backup = await createBackup();
    const json = JSON.stringify(backup);

    await db.clear('skills'); await db.clear('kv'); await db.clear('art');
    expect(await db.getAll('skills')).toHaveLength(0);

    const parsed = parseBackup(json);
    expect(parsed.ok).toBe(true);
    if (parsed.ok) await restoreBackup(parsed.backup);
    expect(await db.getAll('skills')).toHaveLength(1);
    expect((await db.getAllKV()).settings).toEqual({ learnerName: 'Ivaan' });
    expect(await db.getAll('art')).toHaveLength(1);
  });

  it('rejects files that are not backups, without touching data', async () => {
    await db.put('kv', { learnerName: 'Ivaan' }, 'settings');
    expect(parseBackup('not json').ok).toBe(false);
    expect(parseBackup('{"format":"something-else"}').ok).toBe(false);
    expect((await db.getAllKV()).settings).toEqual({ learnerName: 'Ivaan' });
  });
});
