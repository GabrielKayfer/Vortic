export type ProductCategory =
  | 'Futebol'
  | 'Corrida'
  | 'Academia'
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
  featured?: boolean;
}