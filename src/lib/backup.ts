/**
 * Backup & restore. A backup is a single JSON file containing every IndexedDB store.
 * Restores are validated before anything is overwritten, and are atomic.
 */
import { z } from 'zod';
import { getAll, getAllKV, replaceAll } from '../db/db.ts';
import { SCHEMA_VERSION } from '../curriculum/schema.ts';

export const BACKUP_FORMAT = 'ivu-learning-world-backup';
export const BACKUP_VERSION = 1;

const SkillRecordSchema = z.object({
  skillId: z.string(), lessonId: z.string(), subjectId: z.string(),
  attempts: z.number(), correct: z.number(), firstTryCorrect: z.number(), itemsSeen: z.number(), hintsUsed: z.number(),
  assessments: z.array(z.object({ at: z.number(), score: z.number(), independence: z.number(), items: z.number() })),
  retention: z.array(z.object({ at: z.number(), score: z.number(), independence: z.number(), items: z.number(), gapDays: z.number() })),
  explain: z.array(z.object({ at: z.number(), level: z.union([z.literal(0), z.literal(1), z.literal(2)]) })),
  apply: z.array(z.object({ at: z.number(), level: z.union([z.literal(0), z.literal(1), z.literal(2)]) })),
  stage: z.number().int().min(0).max(5),
  updatedAt: z.number(),
}).loose();

export const BackupSchema = z.object({
  format: z.literal(BACKUP_FORMAT),
  backupVersion: z.number().int().max(BACKUP_VERSION),
  curriculumSchemaVersion: z.number(),
  createdAt: z.string(),
  app: z.string(),
  data: z.object({
    kv: z.record(z.string(), z.unknown()),
    skills: z.array(SkillRecordSchema),
    log: z.array(z.object({ at: z.number(), type: z.string() }).loose()),
    art: z.array(z.object({ id: z.string(), kind: z.string(), title: z.string(), createdAt: z.number() }).loose()),
  }),
});
export type Backup = z.infer<typeof BackupSchema>;

export async function createBackup(): Promise<Backup> {
  const [kv, skills, log, art] = await Promise.all([getAllKV(), getAll('skills'), getAll('log'), getAll('art')]);
  return {
    format: BACKUP_FORMAT,
    backupVersion: BACKUP_VERSION,
    curriculumSchemaVersion: SCHEMA_VERSION,
    createdAt: new Date().toISOString(),
    app: 'IVU Learning World 1.0',
    data: { kv, skills: skills as Backup['data']['skills'], log: log as Backup['data']['log'], art: art as Backup['data']['art'] },
  };
}

export function backupFileName(d = new Date()): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `ivu-learning-world-backup-${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}.json`;
}

export function downloadJSON(obj: unknown, filename: string): void {
  const blob = new Blob([JSON.stringify(obj, null, 1)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export type ParseResult = { ok: true; backup: Backup; summary: string } | { ok: false; error: string };

export function parseBackup(json: string): ParseResult {
  let raw: unknown;
  try { raw = JSON.parse(json); } catch { return { ok: false, error: 'This file is not valid JSON.' }; }
  const r = BackupSchema.safeParse(raw);
  if (!r.success) {
    const i = r.error.issues[0];
    return { ok: false, error: `This is not an IVU Learning World backup (${i.path.join('.') || 'file'}: ${i.message}).` };
  }
  const d = r.data.data;
  return { ok: true, backup: r.data, summary: `${d.skills.length} skills, ${d.log.length} activity entries, ${d.art.length} creations — saved ${new Date(r.data.createdAt).toLocaleString()}` };
}

export async function restoreBackup(b: Backup): Promise<void> {
  await replaceAll(b.data);
}
