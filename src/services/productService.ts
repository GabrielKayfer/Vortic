import { products } from '../features/catalog/data/products';

export async function listProducts() {
  return Promise.resolve(products);
}