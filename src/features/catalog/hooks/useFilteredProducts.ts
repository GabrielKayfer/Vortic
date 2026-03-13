import { useMemo } from 'react';
import type { CatalogFilters, Product } from '../types';

export function useFilteredProducts(products: Product[], filters: CatalogFilters) {
  return useMemo(() => {
    const normalizedSearch = filters.search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.attributes.some((attribute) => attribute.toLowerCase().includes(normalizedSearch));

      return matchesCategory && matchesSearch;
    });

    const sorted = [...filtered];

    switch (filters.sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
        break;
      default:
        sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
        break;
    }

    return sorted;
  }, [filters, products]);
}