import { useMemo } from 'react';
import type { Product } from '../types';
import { products } from '../data/products';

export function useRelatedProducts(product?: Product, limit = 3) {
  return useMemo(() => {
    if (!product) return [];

    return products
      .filter((item) => item.slug !== product.slug && item.category === product.category)
      .concat(products.filter((item) => item.slug !== product.slug && item.category !== product.category))
      .slice(0, limit);
  }, [limit, product]);
}