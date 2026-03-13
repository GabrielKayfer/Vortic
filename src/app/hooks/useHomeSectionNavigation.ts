import { useCallback } from 'react';
import type { HomeSectionId } from '../routes/sections';
import { getHomeSectionPath } from '../routes/paths';
import { useAppNavigation } from './useAppNavigation';

export function useHomeSectionNavigation() {
  const { goToHomeSection } = useAppNavigation();

  const getSectionPath = useCallback((sectionId: HomeSectionId) => getHomeSectionPath(sectionId), []);

  return {
    goToSection: goToHomeSection,
    getSectionPath,
  };
}