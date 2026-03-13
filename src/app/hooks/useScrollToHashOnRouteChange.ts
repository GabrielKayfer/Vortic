import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function getScrollOffset() {
  const header = document.querySelector('header');
  const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
  return headerHeight + 12;
}

export function useScrollToHashOnRouteChange() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const id = hash.replace('#', '');

    window.requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (!element) return;

      const top = element.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }, [hash, pathname]);
}
