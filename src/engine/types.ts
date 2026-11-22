import type { StageId } from '../curriculum/schema.ts';

/** The five mastery stages (0 = not started). */
export const MASTERY_STAGES = ['Not started', 'Introduction', 'Recognition', 'Understanding', 'Application', 'Mastery'] as const;
export type MasteryStage = 0 | 1 | 2 | 3 | 4 | 5;

/** 0 = not yet, 1 = with help, 2 = independently */
export type Level = 0 | 1 | 2;

export interface ScoredRun { at: number; score: number; independence: number; items: number }

export interface SkillRecord {
  skillId: string;
  lessonId: string;
  subjectId: string;
  introducedAt?: number;
  lastPracticedAt?: number;
  /** Every scored answer (activities, assessments, revision, arena). */
  attempts: number;
  correct: number;
  /** Items answered correctly on the first try without a hint. */
  firstTryCorrect: number;
  /** Items seen (each item counts once per run, regardless of retries). */
  itemsSeen: number;
  hintsUsed: number;
  assessments: ScoredRun[];
  retention: (ScoredRun & { gapDays: number })[];
  explain: { at: number; level: Level }[];
  apply: { at: number; level: Level }[];
  stage: MasteryStage;
  /** Spaced revision state. */
  revision?: { box: number; dueAt: number; intervalsDays: number[] };
  updatedAt: number;
}

export interface ItemResult {
  itemId: string;
  correct: boolean;
  /** Number of wrong tries before the final answer. */
  wrongTries: number;
  usedHint: boolean;
}

export interface Settings {
  learnerName: string;
  birthYear: number | null;
  defaultStage: StageId;
  subjectStages: Record<string, StageId>;
  readAloud: 'off' | 'tap' | 'auto';
  speechRate: number;
  voiceURI: string | null;
  sounds: boolean;
  reducedMotion: boolean;
  sessionMinutes: number;
  /** Let the engine unlock the next stage automatically when ready. */
  autoAdvance: boolean;
  language: 'en';
}

export const DEFAULT_SETTINGS: Settings = {
  learnerName: 'Ivaan',
  birthYear: null,
  defaultStage: 's4',
  subjectStages: {},
  readAloud: 'tap',
  speechRate: 0.9,
  voiceURI: null,
  sounds: true,
  reducedMotion: false,
  sessionMinutes: 20,
  autoAdvance: true,
  language: 'en',
};

export interface LogEntry {
  id?: number;
  at: number;
  type: 'lesson-open' | 'lesson-complete' | 'assessment' | 'revision' | 'arena' | 'explain' | 'apply' | 'art' | 'stage-up';
  lessonId?: string;
  subjectId?: string;
  score?: number;
  seconds?: number;
  detail?: string;
}

export interface Artwork {
  id: string;
  kind: 'drawing' | 'story';
  title: string;
  createdAt: number;
  /** PNG data URL for drawings */
  image?: string;
  /** Story text for stories */
  text?: string;
}
