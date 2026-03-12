import styled from 'styled-components';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}
