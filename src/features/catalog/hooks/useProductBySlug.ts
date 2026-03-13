import { useMemo } from 'react';
import { products } from '../data/products';

export function useProductBySlug(slug?: string) {
  return useMemo(() => products.find((item) => item.slug === slug), [slug]);
}