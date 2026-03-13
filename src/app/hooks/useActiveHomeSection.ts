import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HOME_SECTION_IDS, HOME_SECTION_ORDER, type HomeSectionId } from '../routes/sections';

function getScrollOffset() {
  const header = document.querySelector('header');
  const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
  return headerHeight + 20;
}

function getActivationLine(offset: number) {
  return offset + Math.min(window.innerHeight * 0.22, 160);
}

function resolveActiveSection(): HomeSectionId {
  const offset = getScrollOffset();
  const activationLine = getActivationLine(offset);
  let fallbackSection: HomeSectionId = HOME_SECTION_IDS.home;

  for (const sectionId of HOME_SECTION_ORDER) {
    const element = document.getElementById(sectionId);
    if (!element) continue;

    const rect = element.getBoundingClientRect();

    if (rect.top <= offset) {
      fallbackSection = sectionId;
    }

    if (rect.top <= activationLine && rect.bottom > activationLine) {
      return sectionId;
    }
  }

  return fallbackSection;
}

export function useActiveHomeSection() {
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useState<HomeSectionId>(HOME_SECTION_IDS.home);

  useEffect(() => {
    if (pathname !== '/') return;

    let frame = 0;

    const updateSection = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setActiveSection(resolveActiveSection());
      });
    };

    updateSection();
    window.addEventListener('scroll', updateSection, { passive: true });
    window.addEventListener('resize', updateSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateSection);
      window.removeEventListener('resize', updateSection);
    };
  }, [pathname]);

  return pathname === '/' ? activeSection : null;
}
