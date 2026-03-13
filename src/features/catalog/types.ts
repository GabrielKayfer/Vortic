export type ProductCategory =
  | 'Futebol'
  | 'Corrida'
  | 'Treino'
  | 'Natacao'
  | 'Basquete'
  | 'Tenis'
  | 'Ciclismo'
  | 'Acessorios';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  badge: string;
  description: string;
  attributes: string[];
  featured?: boolean;
}

export interface CartItem {
  lineId: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  category: ProductCategory;
  addedAt: string;
  variantId?: string;
  variantLabel?: string;
}

export interface CartTotals {
  subtotal: number;
  quantity: number;
}

export interface AddCartItemPayload {
  quantity?: number;
  variantId?: string;
  variantLabel?: string;
}

export interface CatalogFilters {
  category: string;
  sort: SortOption;
  search: string;
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

export function mapProductToCartItem(product: Product, payload: AddCartItemPayload = {}): CartItem {
  return {
    lineId: [product.id, payload.variantId ?? 'default'].join(':'),
    productId: product.id,
    slug: product.slug,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: payload.quantity ?? 1,
    category: product.category,
    addedAt: new Date().toISOString(),
    variantId: payload.variantId,
    variantLabel: payload.variantLabel,
  };
}
