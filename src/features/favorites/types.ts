import type { Product } from '../catalog/types';

export interface FavoriteItem {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  category: Product['category'];
  addedAt: string;
}

export function mapProductToFavoriteItem(product: Product): FavoriteItem {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    image: product.image,
    price: product.price,
    category: product.category,
    addedAt: new Date().toISOString(),
  };
}