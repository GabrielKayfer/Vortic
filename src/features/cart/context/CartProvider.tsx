import { useMemo, type PropsWithChildren } from 'react';
import { useLocalStorageState } from '../../../shared/hooks/useLocalStorageState';
import { STORAGE_KEYS } from '../../../shared/lib/storageKeys';
import type { CartItem, CartTotals } from '../../catalog/types';
import { mapProductToCartItem } from '../../catalog/types';
import { CartContext, type CartContextValue } from './CartContext';

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useLocalStorageState<CartItem[]>(STORAGE_KEYS.cart, []);

  const value = useMemo<CartContextValue>(() => {
    const totals = items.reduce<CartTotals>(
      (acc, item) => ({
        subtotal: acc.subtotal + item.price * item.quantity,
        quantity: acc.quantity + item.quantity,
      }),
      { subtotal: 0, quantity: 0 }
    );

    return {
      items,
      count: totals.quantity,
      subtotal: totals.subtotal,
      totals,
      addItem: (product, payload = {}) => {
        setItems((currentItems) => {
          const nextItem = mapProductToCartItem(product, payload);
          const index = currentItems.findIndex(
            (item) => item.productId === nextItem.productId && item.variantId === nextItem.variantId
          );

          if (index >= 0) {
            return currentItems.map((item, currentIndex) =>
              currentIndex === index
                ? { ...item, quantity: item.quantity + (payload.quantity ?? 1) }
                : item
            );
          }

          return [...currentItems, nextItem];
        });
      },
      removeItem: (lineId: string) => {
        setItems((currentItems) => currentItems.filter((item) => item.lineId !== lineId));
      },
      updateQuantity: (lineId: string, quantity: number) => {
        setItems((currentItems) => {
          if (quantity <= 0) {
            return currentItems.filter((item) => item.lineId !== lineId);
          }

          return currentItems.map((item) =>
            item.lineId === lineId ? { ...item, quantity } : item
          );
        });
      },
      clearCart: () => setItems([]),
    };
  }, [items, setItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
