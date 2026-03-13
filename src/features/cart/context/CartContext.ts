import { createContext } from 'react';
import type { Product, AddCartItemPayload, CartItem, CartTotals } from '../../catalog/types';

export interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  totals: CartTotals;
  addItem: (product: Product, payload?: AddCartItemPayload) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
