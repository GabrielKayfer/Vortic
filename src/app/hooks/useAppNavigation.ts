import { useNavigate } from 'react-router-dom';
import type { CatalogFilters } from '../../features/catalog/types';
import type { HomeSectionId } from '../routes/sections';
import {
  getCartPath,
  getCatalogPath,
  getFavoritesPath,
  getHomePath,
  getHomeSectionPath,
  getProductPath,
  getSearchPath,
} from '../routes/paths';

export function useAppNavigation() {
  const navigate = useNavigate();

  return {
    goToHome: () => navigate(getHomePath()),
    goToCatalog: (filters?: Partial<CatalogFilters>) => navigate(getCatalogPath(filters)),
    goToProduct: (slug: string) => navigate(getProductPath(slug)),
    goToFavorites: () => navigate(getFavoritesPath()),
    goToCart: () => navigate(getCartPath()),
    goToSearch: (search?: string) => navigate(getSearchPath(search)),
    goToHomeSection: (sectionId: HomeSectionId) => navigate(getHomeSectionPath(sectionId)),
  };
}