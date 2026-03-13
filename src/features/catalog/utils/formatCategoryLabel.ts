import type { ProductCategory } from '../types';

const categoryLabels: Record<ProductCategory, string> = {
  Corrida: 'Corrida',
  Ciclismo: 'Ciclismo',
  Futebol: 'Futebol',
  Natacao: 'Natação',
  Tenis: 'Tênis',
  Treino: 'Treino',
  Basquete: 'Basquete',
  Acessorios: 'Acessórios',
};

export function formatCategoryLabel(category: ProductCategory | string) {
  return categoryLabels[category as ProductCategory] ?? category;
}
