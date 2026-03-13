import { useMemo, type PropsWithChildren } from 'react';
import { useLocalStorageState } from '../../../shared/hooks/useLocalStorageState';
import { STORAGE_KEYS } from '../../../shared/lib/storageKeys';
import { FavoritesContext, type FavoritesContextValue } from './FavoritesContext';
import { mapProductToFavoriteItem, type FavoriteItem } from '../types';

export function FavoritesProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useLocalStorageState<FavoriteItem[]>(STORAGE_KEYS.favorites, []);

  const value = useMemo<FavoritesContextValue>(() => {
    const ids = items.flatMap((item) => [item.id, item.slug]);

    return {
      items,
      ids,
      count: items.length,
      has: (productIdOrSlug: string) =>
        items.some((item) => item.id === productIdOrSlug || item.slug === productIdOrSlug),
      toggle: (product) => {
        setItems((currentItems) => {
          const exists = currentItems.some((item) => item.id === product.id || item.slug === product.slug);
          if (exists) {
            return currentItems.filter((item) => item.id !== product.id && item.slug !== product.slug);
          }
          return [mapProductToFavoriteItem(product), ...currentItems];
        });
      },
      remove: (id: string) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== id && item.slug !== id));
      },
      clear: () => setItems([]),
    };
  }, [items, setItems]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
