/** Tiny hash router — no dependency, works from file-less static hosting and offline. */
import { useEffect, useState } from 'react';

export function currentPath(): string {
  const h = window.location.hash.replace(/^#/, '');
  return h.startsWith('/') ? h : '/';
}

export function navigate(path: string, opts: { replace?: boolean } = {}): void {
  const url = '#' + path;
  if (opts.replace) window.history.replaceState(null, '', url);
  else window.history.pushState(null, '', url);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

export function useRoute(): string[] {
  const [path, setPath] = useState(currentPath);
  useEffect(() => {
    const on = () => { setPath(currentPath()); window.scrollTo({ top: 0 }); };
    window.addEventListener('hashchange', on);
    window.addEventListener('popstate', on);
    return () => { window.removeEventListener('hashchange', on); window.removeEventListener('popstate', on); };
  }, []);
  return path.split('/').filter(Boolean).map(decodeURIComponent);
}
