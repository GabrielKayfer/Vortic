import { createContext } from 'react';
import type { Product } from '../../catalog/types';
import type { FavoriteItem } from '../types';

export interface FavoritesContextValue {
  items: FavoriteItem[];
  ids: string[];
  count: number;
  has: (productIdOrSlug: string) => boolean;
  toggle: (product: Product) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const FavoritesContext = createContext<FavoritesContextValue | null>(null);
