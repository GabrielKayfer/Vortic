import favoriteIcon from '../../../assets/images/symbols/favorite.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatCurrency } from '../../../utils/formatCurrency';
import type { Product } from '../types';

const Card = styled.article`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.xl};
  background:
    linear-gradient(180deg, rgba(251, 252, 252, 1) 0, rgba(251, 252, 252, 1) calc(100% - 1px), ${({ theme }) => theme.colors.borderStrong} calc(100% - 1px), ${({ theme }) => theme.colors.borderStrong} 100%);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.soft};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Media = styled.div`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 4 / 4.6;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const Favorite = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(251, 252, 252, 0.9);
`;

const FavoriteIcon = styled.img`
  width: 0.95rem;
  height: 0.95rem;
`;

const Body = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
`;

const Category = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 0.3rem 0.55rem;
  background: rgba(168, 206, 196, 0.24);
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.76rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.04rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const Price = styled.strong`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.08rem;
  font-weight: 600;
`;

const Hint = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  line-height: 1.6;
`;

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <Link to={`/produto/${product.slug}`}>
        <Media>
          <Thumb src={product.image} alt={product.name} />
          <Favorite type="button" aria-label={`Salvar ${product.name}`}>
            <FavoriteIcon src={favoriteIcon} alt="" />
          </Favorite>
        </Media>
      </Link>
      <Body>
        <TopRow>
          <Category>{product.category}</Category>
          <Price>{formatCurrency(product.price)}</Price>
        </TopRow>
        <ProductName>{product.name}</ProductName>
        <Hint>Curadoria pensada para treino, uso continuo e repertorio visual limpo.</Hint>
      </Body>
    </Card>
  );
}
