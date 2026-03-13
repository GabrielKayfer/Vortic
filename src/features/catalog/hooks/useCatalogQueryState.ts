import { useSearchParams } from 'react-router-dom';
import type { CatalogFilters, SortOption } from '../types';

const DEFAULT_SORT: SortOption = 'featured';

function sanitizeSort(value: string | null): SortOption {
  if (value === 'price-asc' || value === 'price-desc' || value === 'name-asc') {
    return value;
  }

  return DEFAULT_SORT;
}

export function useCatalogQueryState() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: CatalogFilters = {
    category: searchParams.get('categoria') ?? '',
    sort: sanitizeSort(searchParams.get('ordem')),
    search: searchParams.get('busca') ?? '',
  };

  const updateFilters = (nextFilters: Partial<CatalogFilters>) => {
    const merged: CatalogFilters = {
      ...filters,
      ...nextFilters,
    };

    const nextParams = new URLSearchParams();

    if (merged.category) nextParams.set('categoria', merged.category);
    if (merged.sort && merged.sort !== DEFAULT_SORT) nextParams.set('ordem', merged.sort);
    if (merged.search) nextParams.set('busca', merged.search);

    setSearchParams(nextParams, { replace: true });
  };

  return {
    filters,
    setCategory: (category: string) => updateFilters({ category }),
    setSort: (sort: SortOption) => updateFilters({ sort }),
    setSearch: (search: string) => updateFilters({ search }),
    resetFilters: () => setSearchParams({}, { replace: true }),
  };
}