import { lazy, Suspense, useEffect } from 'react';
import { StoreProvider, useStore } from './state/store.tsx';
import { useRoute, navigate } from './lib/router.ts';
import { Universe, ExploreMap, WorldPage, SubjectPage } from './pages/child/Explore.tsx';
import { LessonStudio, RevisePage } from './pages/child/LessonStudio.tsx';
import { Arena, CreativeStudio, Journey, Achievements, PlayHub } from './pages/child/More.tsx';

// The parent area is loaded on demand: it is never needed during a child's session.
const ParentArea = lazy(() => import('./pages/parent/Parent.tsx').then((m) => ({ default: m.ParentArea })));
import { AchievementToast, ErrorBox, Loading } from './ui/common.tsx';
import { cx } from './lib/util.ts';

function ChildNav({ active }: { active: string }) {
  const items = [
    ['', '🏡', 'Home'], ['explore', '🧭', 'Explore'], ['play', '🎮', 'Play'], ['journey', '✨', 'My Journey'],
  ];
  return (
    <nav className="childnav" aria-label="Main">
      {items.map(([path, icon, label]) => (
        <button key={path} className={cx('childnav__item', active === path && 'is-active')} onClick={() => navigate(path ? `/${path}` : '/')} aria-current={active === path ? 'page' : undefined}>
          <span className="childnav__icon" aria-hidden="true">{icon}</span><span className="childnav__label">{label}</span>
        </button>
      ))}
    </nav>
  );
}

function Routes() {
  const route = useRoute();
  const { ready, error, settings } = useStore();
  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', settings.reducedMotion);
  }, [settings.reducedMotion]);
  if (error) return <ErrorBox error={error} />;
  if (!ready) return <div className="splash"><div className="splash__logo">IVU</div><Loading what="Opening IVU Learning World" /></div>;
  const [a, b, c] = route;
  if (a === 'parent') return <Suspense fallback={<Loading />}><ParentArea section={b ?? 'dashboard'} arg={c} /></Suspense>;
  let page;
  switch (a) {
    case undefined: page = <Universe />; break;
    case 'explore': page = <ExploreMap />; break;
    case 'world': page = <WorldPage worldId={b} />; break;
    case 'subject': page = <SubjectPage subjectId={b} />; break;
    case 'lesson': page = <LessonStudio lessonId={b} />; break;
    case 'revise': page = <RevisePage lessonId={b} />; break;
    case 'play': page = <PlayHub />; break;
    case 'arena': page = <Arena />; break;
    case 'studio': page = <CreativeStudio tab={b} />; break;
    case 'journey': page = <Journey />; break;
    case 'achievements': page = <Achievements />; break;
    default: page = <ErrorBox error="Page not found." />;
  }
  const navActive = a === undefined || a === 'world' || a === 'subject' ? '' : a === 'arena' || a === 'studio' ? 'play' : a;
  const showNav = a !== 'lesson' && a !== 'revise';
  return (
    <div className={cx('child', showNav && 'child--nav')}>
      {page}
      {showNav && <ChildNav active={navActive} />}
      <AchievementToast />
    </div>
  );
}

export default function App() {
  return <StoreProvider><Routes /></StoreProvider>;
}
