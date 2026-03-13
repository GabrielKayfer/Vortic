import type { CatalogFilters } from '../../features/catalog/types';
import type { HomeSectionId } from './sections';

export const ROUTES = {
  home: '/',
  catalog: '/catalogo',
  product: '/produto/:slug',
  favorites: '/favoritos',
  cart: '/carrinho',
  search: '/busca',
} as const;

function createQueryString(filters: Partial<CatalogFilters> = {}) {
  const params = new URLSearchParams();

  if (filters.category) params.set('categoria', filters.category);
  if (filters.sort) params.set('ordem', filters.sort);
  if (filters.search) params.set('busca', filters.search);

  const query = params.toString();
  return query ? `?${query}` : '';
}

export function getHomePath() {
  return ROUTES.home;
}

export function getCatalogPath(filters?: Partial<CatalogFilters>) {
  return `${ROUTES.catalog}${createQueryString(filters)}`;
}

export function getProductPath(slug: string) {
  return `/produto/${slug}`;
}

export function getFavoritesPath() {
  return ROUTES.favorites;
}

export function getCartPath() {
  return ROUTES.cart;
}

export function getSearchPath(search?: string) {
  const params = new URLSearchParams();

  if (search) params.set('busca', search);

  const query = params.toString();
  return `${ROUTES.search}${query ? `?${query}` : ''}`;
}

export function getHomeSectionPath(sectionId: HomeSectionId) {
  return `${ROUTES.home}#${sectionId}`;
}