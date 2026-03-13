import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getCatalogPath } from '../app/routes/paths';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { useCart } from '../features/cart/hooks/useCart';
import { ProductGrid } from '../features/catalog/components/ProductGrid';
import { productEditorialBySlug } from '../features/catalog/data/editorialContent';
import { useProductBySlug } from '../features/catalog/hooks/useProductBySlug';
import { useRelatedProducts } from '../features/catalog/hooks/useRelatedProducts';
import { formatCategoryLabel } from '../features/catalog/utils/formatCategoryLabel';
import { getProductImageBackground } from '../features/catalog/utils/getProductImageBackground';
import { useFavorites } from '../features/favorites/hooks/useFavorites';
import { formatCurrency } from '../utils/formatCurrency';
import deliveryIcon from '../assets/images/symbols/delivery.png';
import favoriteIcon from '../assets/images/symbols/favorite.png';
import priceTagIcon from '../assets/images/symbols/pricetag.png';

const Page = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[10]};
  padding-top: ${({ theme }) => theme.spacing[10]};
`;

const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
`;

const EmptyState = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background: ${({ theme }) => theme.colors.surface};
`;

const Hero = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.08fr) minmax(22rem, 0.92fr);
    align-items: start;
  }
`;

const MediaColumn = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const MainFrame = styled.div<{ $tone: string }>`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background: ${({ $tone }) => $tone};
`;

const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 0.92;
  object-fit: cover;
  background: transparent;
`;

const MediaGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.8fr);
  }
`;

const SupportCard = styled.article`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};
`;

const SupportImage = styled.img`
  width: 100%;
  aspect-ratio: 1.2 / 1;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const SupportBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const SupportLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 500;
`;

const SupportText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.65;
`;

const HighlightList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const HighlightCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  min-height: 6.25rem;
  align-content: center;
  justify-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surfaceSupport};
  text-align: center;
`;

const HighlightTag = styled.span`
  display: block;
  max-width: 14ch;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.45;
`;

const Panel = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background:
    linear-gradient(135deg, rgba(95, 135, 146, 0.08), transparent 28%),
    linear-gradient(225deg, rgba(205, 170, 90, 0.12), transparent 32%),
    ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 7rem;
  }
`;

const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  font-weight: 500;
`;

const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2.15rem;
  width: fit-content;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(168, 206, 196, 0.24);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: clamp(2.4rem, 4vw, 4.2rem);
  line-height: 0.92;
`;

const Price = styled.strong`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 2rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.85;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2.15rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(251, 252, 252, 0.82);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 500;
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing[4]};

  > * {
    flex: 1 1 14rem;
  }
`;

const SecondaryAction = styled.button<{ $active?: boolean }>`
  display: inline-grid;
  grid-template-columns: 1rem minmax(0, auto) 1rem;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.alert : theme.colors.borderStrong)};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ $active }) => ($active ? 'rgba(228, 71, 58, 0.1)' : 'rgba(251, 252, 252, 0.78)')};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  &::after {
    content: '';
    width: 1rem;
    height: 1rem;
  }
`;

const ActionIcon = styled.img`
  grid-column: 1;
  width: 1rem;
  height: 1rem;
  object-fit: contain;
`;

const ActionText = styled.span`
  grid-column: 2;
  white-space: nowrap;
`;

const ServiceGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ServiceCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: start;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: rgba(251, 252, 252, 0.76);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ServiceText = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ServiceTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
`;

const ServiceDescription = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  line-height: 1.6;
`;

const DetailLayout = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`;

const DetailCard = styled.article<{ $tone?: 'editorial' | 'support' }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background: ${({ theme, $tone }) => {
    if ($tone === 'editorial') return theme.colors.surfaceEditorial;
    if ($tone === 'support') return theme.colors.surfaceSupport;
    return theme.colors.surface;
  }};
`;

const DetailTitle = styled.h2`
  font-size: clamp(1.7rem, 3vw, 2.6rem);
  line-height: 0.98;
`;

const DetailText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.8;
`;

const SpecGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const SpecRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SpecLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
`;

const SpecValue = styled.span`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
`;

const NoteList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const NoteItem = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const RecommendationSection = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const RecommendationHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const RecommendationText = styled.p`
  max-width: 44rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

export function ProductPage() {
  const { slug } = useParams();
  const product = useProductBySlug(slug);
  const relatedProducts = useRelatedProducts(product, 3);
  const { addItem } = useCart();
  const { has, toggle } = useFavorites();

  if (!product) {
    return (
      <Page>
        <BackLink to={getCatalogPath()}>Voltar ao catálogo</BackLink>
        <EmptyState>
          <Eyebrow>Item fora da seleção atual</Eyebrow>
          <h1>Este produto não está disponível neste momento.</h1>
          <Description>
            Volte ao catálogo para seguir por modalidade, faixa de preço ou tipo
            de uso. A seleção ativa continua organizada para facilitar comparação
            e recompra.
          </Description>
          <BackLink to={getCatalogPath()}>Explorar catálogo</BackLink>
        </EmptyState>
      </Page>
    );
  }

  const editorial = productEditorialBySlug[product.slug as keyof typeof productEditorialBySlug];
  const isFavorite = has(product.id) || has(product.slug);

  return (
    <Page>
      <BackLink to={getCatalogPath()}>Voltar ao catálogo</BackLink>

      <Hero>
        <MediaColumn>
          <MainFrame $tone={getProductImageBackground(product.category, product.image)}>
            <MainImage src={product.image} alt={product.name} />
          </MainFrame>
          <MediaGrid>
            <SupportCard>
              <SupportImage src={editorial.supportImage} alt={editorial.supportLabel} />
              <SupportBody>
                <SupportLabel>{editorial.supportLabel}</SupportLabel>
                <SupportText>{editorial.supportText}</SupportText>
              </SupportBody>
            </SupportCard>
            <HighlightList>
              {editorial.highlights.map((highlight) => (
                <HighlightCard key={highlight}>
                  <HighlightTag>{highlight}</HighlightTag>
                </HighlightCard>
              ))}
            </HighlightList>
          </MediaGrid>
        </MediaColumn>

        <Panel>
          <Eyebrow>{editorial.overline}</Eyebrow>
          <CategoryBadge>{formatCategoryLabel(product.category)}</CategoryBadge>
          <Title>{product.name}</Title>
          <Price>{formatCurrency(product.price)}</Price>
          <Description>{editorial.description}</Description>
          <TagRow>
            <Tag>{product.badge}</Tag>
            {product.attributes.map((attribute) => (
              <Tag key={attribute}>{attribute}</Tag>
            ))}
            <Tag>Curadoria Vortic</Tag>
          </TagRow>
          <ActionRow>
            <Button type="button" onClick={() => addItem(product)}>Adicionar ao carrinho</Button>
            <SecondaryAction type="button" $active={isFavorite} onClick={() => toggle(product)}>
              <ActionIcon src={favoriteIcon} alt="" />
              <ActionText>{isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}</ActionText>
            </SecondaryAction>
          </ActionRow>
          <ServiceGrid>
            <ServiceCard>
              <ActionIcon src={deliveryIcon} alt="" />
              <ServiceText>
                <ServiceTitle>Envio com rastreio</ServiceTitle>
                <ServiceDescription>Prazo calculado no checkout com atualização por e-mail ao longo da entrega.</ServiceDescription>
              </ServiceText>
            </ServiceCard>
            <ServiceCard>
              <ActionIcon src={priceTagIcon} alt="" />
              <ServiceText>
                <ServiceTitle>Troca em até 30 dias</ServiceTitle>
                <ServiceDescription>Mudança de tamanho, cor ou volume com suporte simples pelo atendimento.</ServiceDescription>
              </ServiceText>
            </ServiceCard>
          </ServiceGrid>
        </Panel>
      </Hero>

      <DetailLayout>
        <DetailCard>
          <Eyebrow>Como entra na rotina</Eyebrow>
          <DetailTitle>Onde este item funciona melhor no ritmo da semana.</DetailTitle>
          <DetailText>
            {editorial.notes[0]} {editorial.notes[1]}
          </DetailText>
          <NoteList>
            {editorial.highlights.map((highlight) => (
              <NoteItem key={highlight}>{highlight}</NoteItem>
            ))}
          </NoteList>
        </DetailCard>

        <DetailCard $tone="editorial">
          <Eyebrow>Ficha rápida</Eyebrow>
          <DetailTitle>Informações objetivas para decidir sem excesso de ficha técnica.</DetailTitle>
          <SpecGrid>
            {editorial.specs.map((spec) => (
              <SpecRow key={spec.label}>
                <SpecLabel>{spec.label}</SpecLabel>
                <SpecValue>{spec.value}</SpecValue>
              </SpecRow>
            ))}
          </SpecGrid>
        </DetailCard>
      </DetailLayout>

      <RecommendationSection>
        <RecommendationHeader>
          <Eyebrow>Continue a seleção</Eyebrow>
          <DetailTitle>Mais itens que fazem sentido no mesmo contexto de uso.</DetailTitle>
          <RecommendationText>
            Se a compra começou por corrida, quadra, piscina ou deslocamento,
            vale comparar com outras opções do mesmo universo ou completar o
            conjunto com um item de apoio.
          </RecommendationText>
        </RecommendationHeader>
        <ProductGrid products={relatedProducts} />
      </RecommendationSection>
    </Page>
  );
}
