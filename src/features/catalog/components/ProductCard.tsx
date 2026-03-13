import favoriteIcon from '../../../assets/images/symbols/favorite.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getProductPath } from '../../../app/routes/paths';
import { useFavorites } from '../../favorites/hooks/useFavorites';
import { formatCurrency } from '../../../utils/formatCurrency';
import type { Product } from '../types';
import { formatCategoryLabel } from '../utils/formatCategoryLabel';
import { getProductImageBackground } from '../utils/getProductImageBackground';

const Card = styled.article`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }
`;

const Media = styled.div<{ $tone: string }>`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $tone }) => $tone};
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 4 / 4.6;
  object-fit: cover;
  background: transparent;
`;

const Favorite = styled.button<{ $active?: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.alert : theme.colors.lineStrong)};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ $active }) => ($active ? 'rgba(228, 71, 58, 0.12)' : 'rgba(252, 252, 250, 0.92)')};
  cursor: pointer;
`;

const FavoriteIcon = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  transform: scale(5.2);
  transform-origin: center;
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
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(240, 210, 31, 0.26);
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.primary};
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

const AttributeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const AttributeChip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.55rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.74rem;
  font-weight: 600;
`;

export function ProductCard({ product }: { product: Product }) {
  const { has, toggle } = useFavorites();
  const isFavorite = has(product.id) || has(product.slug);

  return (
    <Card>
      <Media $tone={getProductImageBackground(product.category, product.image)}>
        <Link to={getProductPath(product.slug)}>
          <Thumb src={product.image} alt={product.name} />
        </Link>
        <Favorite
          type="button"
          $active={isFavorite}
          aria-label={isFavorite ? `Remover ${product.name} dos favoritos` : `Salvar ${product.name} nos favoritos`}
          onClick={() => toggle(product)}
        >
          <FavoriteIcon src={favoriteIcon} alt="" />
        </Favorite>
      </Media>
      <Body>
        <TopRow>
          <Category>{formatCategoryLabel(product.category)}</Category>
          <Price>{formatCurrency(product.price)}</Price>
        </TopRow>
        <ProductName>{product.name}</ProductName>
        <Hint>{product.description}</Hint>
        <AttributeRow>
          {product.attributes.map((attribute) => (
            <AttributeChip key={attribute}>{attribute}</AttributeChip>
          ))}
        </AttributeRow>
      </Body>
    </Card>
  );
}
