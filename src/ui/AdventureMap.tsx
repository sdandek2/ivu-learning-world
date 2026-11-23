/**
 * Buddy's Adventure Map — the Explore screen as one illustrated landscape with all 12 worlds
 * as destinations along a winding road.
 *
 * The scenery is decorative SVG (aria-hidden). Each destination is a real <button> in an ordered
 * list that follows the road, so keyboard and screen-reader users get the same journey in the
 * same order. Clicking a destination opens the world, exactly as before.
 */
import '../styles/adventure-map.css';
import { useEffect, useMemo, useRef, useSyncExternalStore } from 'react';
import type { World } from '../curriculum/schema.ts';
import { useStore } from '../state/store.tsx';
import { navigate } from '../lib/router.ts';
import { recommend } from '../engine/adaptive.ts';
import { worldProgress, type WorldProgress } from '../engine/worldProgress.ts';
import { AdventureScenery, LAYOUTS, WORLD_ORDER, type MapLayout } from './adventureScenery.tsx';
import { WorldArt, Buddy } from './WorldArt.tsx';
import { SpeakButton, useBuddyVoice } from './common.tsx';
import { BUDDY_LINES } from '../lib/buddyLines.ts';
import { cx } from '../lib/util.ts';

const WIDE_QUERY = '(min-width: 720px)';
function useWide(): boolean {
  return useSyncExternalStore(
    (cb) => { const m = window.matchMedia?.(WIDE_QUERY); m?.addEventListener?.('change', cb); return () => m?.removeEventListener?.('change', cb); },
    () => window.matchMedia?.(WIDE_QUERY).matches ?? true,
    () => true,
  );
}

const STATE_TEXT: Record<WorldProgress['state'], string> = {
  soon: 'Coming soon',
  new: 'Ready to explore',
  started: 'Adventure in progress',
  complete: 'World complete',
};

function Ring({ pct, done }: { pct: number; done: boolean }) {
  const r = 46, c = 2 * Math.PI * r;
  return (
    <svg className="am-ring" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r={r} className="am-ring__track" />
      {pct > 0 && <circle cx="50" cy="50" r={r} className={cx('am-ring__fill', done && 'is-done')} strokeDasharray={`${c * pct} ${c}`} transform="rotate(-90 50 50)" />}
    </svg>
  );
}

function Destination({ world, n, layout, p, isNext }: { world: World; n: number; layout: MapLayout; p: WorldProgress; isNext: boolean }) {
  const [x, y] = layout.nodes[world.id];
  const locked = p.state === 'soon';
  const label = `${n}. ${world.title}, ${world.domain}. ${STATE_TEXT[p.state]}${p.total ? `: ${p.understood} of ${p.total} lessons understood` : ''}${isNext ? '. Buddy suggests this world next.' : ''}`;
  return (
    <li className="am-dest-slot" style={{ left: `${(x / layout.w) * 100}%`, top: `${(y / layout.h) * 100}%` }}>
      <button
        type="button"
        className={cx('am-dest', `is-${p.state}`, isNext && 'is-next')}
        style={{ ['--w-land' as string]: world.colors.land, ['--w-sky' as string]: world.colors.sky, ['--w-accent' as string]: world.colors.accent, ['--w-ink' as string]: world.colors.ink }}
        onClick={() => navigate(`/world/${world.id}`)}
        aria-label={label}
        aria-disabled={locked || undefined}
      >
        <span className="am-dest__medal">
          <span className="am-dest__art"><WorldArt world={world} /></span>
          <Ring pct={p.pct} done={p.state === 'complete'} />
          <span className="am-dest__num" aria-hidden="true">{n}</span>
          {locked && <span className="am-dest__lock" aria-hidden="true">🔒</span>}
          {p.state === 'complete' && <span className="am-dest__crown" aria-hidden="true">🏆</span>}
        </span>
        <span className="am-dest__flag">
          <strong>{world.title}</strong>
          <span className="am-dest__stars" aria-hidden="true">{[1, 2, 3].map((i) => <span key={i} className={cx('am-star', i <= p.stars && 'is-on')}>★</span>)}</span>
        </span>
      </button>
    </li>
  );
}

export function AdventureMap() {
  const { index, outline, settings, skills } = useStore();
  const wide = useWide();
  const layout = LAYOUTS[wide ? 'wide' : 'tall'];
  const say = useBuddyVoice();

  const worlds = useMemo(() => {
    if (!index) return [];
    const byId = new Map(index.worlds.map((w) => [w.id, w]));
    // Path order follows the curriculum's world order; any world not in the layout is appended safely.
    const ordered = WORLD_ORDER.map((id) => byId.get(id)).filter((w): w is World => !!w);
    return ordered.length === index.worlds.length ? ordered : index.worlds.filter((w) => layout.nodes[w.id]);
  }, [index, layout]);

  const progress = useMemo(() => new Map(worlds.map((w) => [w.id, worldProgress(w, outline, settings, skills)])), [worlds, outline, settings, skills]);
  const nextWorldId = useMemo(() => {
    if (!outline || !index) return worlds[0]?.id;
    const rec = recommend(outline, settings, skills, { worldOrder: index.worlds.map((w) => w.id) })[0];
    return (rec && index.worlds.find((w) => w.subjects.some((s) => s.id === rec.subjectId))?.id) ?? worlds.find((w) => progress.get(w.id)?.state !== 'complete')?.id;
  }, [outline, index, settings, skills, worlds, progress]);

  // Open the map where the child is: bring Buddy's suggested world into view (like a game map).
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = mapRef.current?.querySelector<HTMLElement>('.am-dest.is-next');
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < 80 || r.bottom > window.innerHeight - 120) el.scrollIntoView?.({ block: 'center', behavior: 'auto' });
  }, [layout.id, nextWorldId]);

  if (!index) return null;
  // Road legs travelled: up to the furthest world with any progress.
  const lastStarted = worlds.reduce((m, w, i) => (progress.get(w.id)!.started > 0 ? i + 1 : m), 0);
  const totalUnderstood = [...progress.values()].reduce((a, p) => a + p.understood, 0);
  const completeWorlds = [...progress.values()].filter((p) => p.state === 'complete').length;
  const next = nextWorldId ? layout.nodes[nextWorldId] : null;

  return (
    <div className={cx('am', `am--${layout.id}`)}>
      <header className="am-header">
        <div className="am-header__copy">
          <span className="am-header__kicker">BUDDY'S ADVENTURE MAP</span>
          <h1>Where shall we go?</h1>
          <p>Follow the road through all twelve worlds — all the way to the stars.</p>
        </div>
        <div className="am-header__side">
          <span className="am-chip" aria-label={`${completeWorlds} of 12 worlds complete, ${totalUnderstood} lessons understood`}>⭐ {totalUnderstood} <span className="am-chip__sub">lessons understood</span></span>
          <SpeakButton text={BUDDY_LINES.atlas.text} small />
        </div>
      </header>
      <div className="am-map" ref={mapRef} style={{ aspectRatio: `${layout.w} / ${layout.h}`, ['--node' as string]: `${(layout.node / layout.w) * 100}%` }}>
        <AdventureScenery layout={layout} reach={lastStarted} />
        <ol className="am-dests" aria-label="The twelve worlds, in order along the road">
          {worlds.map((w, i) => <Destination key={w.id} world={w} n={i + 1} layout={layout} p={progress.get(w.id)!} isNext={w.id === nextWorldId} />)}
        </ol>
        {next && (
          <button type="button" className="am-buddy" style={{ left: `${(next[0] / layout.w) * 100}%`, top: `${(next[1] / layout.h) * 100}%` }}
            onClick={() => say(BUDDY_LINES.atlas)} aria-label="Buddy is waiting at your next world. Tap to hear Buddy.">
            <span className="am-buddy__bubble" aria-hidden="true">Next!</span>
            <Buddy size={64} color="#5145B8" accent="#FFD66B" mood="wow" className="am-buddy__owl" />
          </button>
        )}
      </div>
    </div>
  );
}
