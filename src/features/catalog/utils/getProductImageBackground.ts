import type { ProductCategory } from '../types';

const productImageBackgrounds: Record<ProductCategory, string> = {
  Corrida:
    'linear-gradient(180deg, rgba(53, 89, 199, 0.16) 0%, rgba(53, 89, 199, 0.06) 100%), #EEF2F5',
  Ciclismo:
    'linear-gradient(180deg, rgba(240, 210, 31, 0.22) 0%, rgba(240, 210, 31, 0.08) 100%), #FCFCFA',
  Futebol:
    'linear-gradient(180deg, rgba(228, 71, 58, 0.14) 0%, rgba(228, 71, 58, 0.05) 100%), #FCFCFA',
  Natacao:
    'linear-gradient(180deg, rgba(40, 58, 143, 0.14) 0%, rgba(53, 89, 199, 0.06) 100%), #EEF2F5',
  Basquete:
    'linear-gradient(180deg, rgba(228, 71, 58, 0.12) 0%, rgba(40, 58, 143, 0.08) 100%), #FCFCFA',
  Tenis:
    'linear-gradient(180deg, rgba(240, 210, 31, 0.16) 0%, rgba(53, 89, 199, 0.05) 100%), #FCFCFA',
  Treino:
    'linear-gradient(180deg, rgba(53, 89, 199, 0.12) 0%, rgba(228, 71, 58, 0.05) 100%), #FCFCFA',
  Acessorios:
    'linear-gradient(180deg, rgba(240, 210, 31, 0.12) 0%, rgba(217, 222, 227, 0.22) 100%), #EEF2F5',
};

const whiteBackgroundNamePattern = /1(?:-[^/\\]+)?\.(png|avif|jpe?g|webp)$/i;

export function getProductImageBackground(category: ProductCategory, imageSrc?: string) {
  if (imageSrc && whiteBackgroundNamePattern.test(imageSrc)) {
    return '#FCFCFA';
  }

  return productImageBackgrounds[category];
}
