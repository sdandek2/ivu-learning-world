import { useEffect, type ReactNode } from 'react';
import { useStore } from '../state/store.tsx';
import { speak, readAloudAvailable, stopSpeaking } from '../lib/speech.ts';
import { MASTERY_STAGES, type MasteryStage } from '../engine/types.ts';
import { navigate } from '../lib/router.ts';
import { cx } from '../lib/util.ts';

export function SpeakButton({ text, label = 'Listen', auto = false, small = false }: { text: string; label?: string; auto?: boolean; small?: boolean }) {
  const { settings } = useStore();
  useEffect(() => {
    if (auto && settings.readAloud === 'auto') speak(text, { rate: settings.speechRate, voiceURI: settings.voiceURI, recorded: settings.recordedVoice });
    return () => { if (auto) stopSpeaking(); };
  }, [auto, text, settings.readAloud, settings.speechRate, settings.voiceURI, settings.recordedVoice]);
  if (!readAloudAvailable() || settings.readAloud === 'off') return null;
  return (
    <button type="button" className={cx('speak', small && 'speak--small')} onClick={() => speak(text, { rate: settings.speechRate, voiceURI: settings.voiceURI, recorded: settings.recordedVoice })} aria-label={`${label}: read aloud`}>
      <span aria-hidden="true">🔊</span>{!small && <span>{label}</span>}
    </button>
  );
}

const STAGE_COLORS = ['#C9CED6', '#9AD0F5', '#7FD1AE', '#FFD166', '#FF9F6B', '#B784F5'];
export function stageColor(s: number) { return STAGE_COLORS[s] ?? STAGE_COLORS[0]; }

export function StageDots({ stage, label = true }: { stage: MasteryStage; label?: boolean }) {
  return (
    <span className="stage-dots" title={MASTERY_STAGES[stage]}>
      {[1, 2, 3, 4, 5].map((i) => <span key={i} className="stage-dots__dot" style={{ background: i <= stage ? stageColor(stage) : undefined }} />)}
      {label && <span className="stage-dots__label">{MASTERY_STAGES[stage]}</span>}
    </span>
  );
}

export function Stars({ n, of = 3 }: { n: number; of?: number }) {
  return <span className="stars" aria-label={`${n} of ${of} stars`}>{Array.from({ length: of }, (_, i) => <span key={i} className={i < n ? 'star star--on' : 'star'}>★</span>)}</span>;
}

export function TopBar({ title, back, color, right }: { title?: ReactNode; back?: string; color?: string; right?: ReactNode }) {
  return (
    <header className="topbar" style={color ? { ['--world' as string]: color } : undefined}>
      <button className="iconbtn" onClick={() => (back ? navigate(back) : window.history.back())} aria-label="Back"><span aria-hidden="true">←</span></button>
      <div className="topbar__title">{title}</div>
      <div className="topbar__right">{right}<button className="iconbtn" onClick={() => navigate('/')} aria-label="Home"><span aria-hidden="true">🏠</span></button></div>
    </header>
  );
}

export function Loading({ what = 'Loading' }: { what?: string }) {
  return <div className="loading" role="status"><span className="loading__dot" /><span className="loading__dot" /><span className="loading__dot" /><span className="sr-only">{what}…</span></div>;
}

export function ErrorBox({ error }: { error: string }) {
  return <div className="errorbox" role="alert"><strong>Something went wrong.</strong><p>{error}</p><button className="btn" onClick={() => window.location.reload()}>Try again</button></div>;
}

/** Shows freshly unlocked achievements. */
export function AchievementToast() {
  const { fresh, dismissFresh } = useStore();
  useEffect(() => { if (fresh.length) { const t = setTimeout(dismissFresh, 4500); return () => clearTimeout(t); } }, [fresh, dismissFresh]);
  if (!fresh.length) return null;
  return (
    <div className="toast" role="status" onClick={dismissFresh}>
      <AchievementList ids={fresh.slice(-2)} />
    </div>
  );
}

import { ACHIEVEMENTS } from '../engine/achievements.ts';
function AchievementList({ ids }: { ids: string[] }) {
  return <>{ids.map((id) => { const a = ACHIEVEMENTS.find((x) => x.id === id); return a ? <div key={id} className="toast__item"><span className="toast__icon">{a.icon}</span><div><strong>New badge: {a.title}</strong><div>{a.description}</div></div></div> : null; })}</>;
}
