import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { ProductGrid } from '../features/catalog/components/ProductGrid';
import { productEditorialBySlug } from '../features/catalog/data/editorialContent';
import { products } from '../features/catalog/data/products';
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
  font-size: 0.95rem;
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

const MainFrame = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background:
    linear-gradient(180deg, rgba(238, 230, 214, 0.76), transparent 22%),
    ${({ theme }) => theme.colors.surface};
`;

const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 0.92;
  object-fit: cover;
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
  gap: ${({ theme }) => theme.spacing[2]};
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
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surfaceSupport};
`;

const HighlightTag = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
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
  border-radius: ${({ theme }) => theme.radii.pill};
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
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(251, 252, 252, 0.82);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 500;
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const SecondaryAction = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 48px;
  padding: 0 ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(251, 252, 252, 0.78);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
`;

const ActionIcon = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: contain;
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
  font-size: 0.95rem;
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
  font-size: 0.95rem;
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
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <Page>
        <BackLink to="/catalogo">Voltar ao catalogo</BackLink>
        <EmptyState>
          <Eyebrow>Produto nao encontrado</Eyebrow>
          <h1>Este item ainda nao existe na selecao atual.</h1>
          <Description>
            Quando a base receber dados reais, esta pagina pode evoluir para fallback de busca,
            sugestoes relacionadas e redirecionamento inteligente.
          </Description>
          <BackLink to="/catalogo">Explorar catalogo</BackLink>
        </EmptyState>
      </Page>
    );
  }

  const editorial = productEditorialBySlug[product.slug as keyof typeof productEditorialBySlug];
  const relatedProducts = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .concat(products.filter((item) => item.slug !== product.slug && item.category !== product.category))
    .slice(0, 3);

  return (
    <Page>
      <BackLink to="/catalogo">Voltar ao catalogo</BackLink>

      <Hero>
        <MediaColumn>
          <MainFrame>
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
          <CategoryBadge>{product.category}</CategoryBadge>
          <Title>{product.name}</Title>
          <Price>{formatCurrency(product.price)}</Price>
          <Description>{editorial.description}</Description>
          <TagRow>
            <Tag>Curadoria Vortic</Tag>
            <Tag>Marketplace editorial</Tag>
            <Tag>Preparado para dados reais</Tag>
          </TagRow>
          <ActionRow>
            <Button type="button">Adicionar ao carrinho</Button>
            <SecondaryAction type="button">
              <ActionIcon src={favoriteIcon} alt="" />
              Salvar item
            </SecondaryAction>
          </ActionRow>
          <ServiceGrid>
            <ServiceCard>
              <ActionIcon src={deliveryIcon} alt="" />
              <ServiceText>
                <ServiceTitle>Fluxo pronto para entrega</ServiceTitle>
                <ServiceDescription>O bloco ja acomoda frete, prazo e estoque quando a integracao entrar.</ServiceDescription>
              </ServiceText>
            </ServiceCard>
            <ServiceCard>
              <ActionIcon src={priceTagIcon} alt="" />
              <ServiceText>
                <ServiceTitle>Preco com contexto</ServiceTitle>
                <ServiceDescription>A pagina combina compra, narrativa e suporte de decisao sem parecer promocional.</ServiceDescription>
              </ServiceText>
            </ServiceCard>
          </ServiceGrid>
        </Panel>
      </Hero>

      <DetailLayout>
        <DetailCard>
          <Eyebrow>Leitura do produto</Eyebrow>
          <DetailTitle>Como este item entra no ecossistema da marca.</DetailTitle>
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
          <Eyebrow>Especificacoes curadas</Eyebrow>
          <DetailTitle>Resumo tecnico com linguagem clara.</DetailTitle>
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
          <Eyebrow>Produtos relacionados</Eyebrow>
          <DetailTitle>Outras entradas coerentes com a mesma leitura de marca.</DetailTitle>
          <RecommendationText>
            Abaixo, a pagina continua a jornada sem quebrar o clima editorial. As sugestoes podem evoluir depois para recomendacao por categoria, historico ou comportamento real.
          </RecommendationText>
        </RecommendationHeader>
        <ProductGrid products={relatedProducts} />
      </RecommendationSection>
    </Page>
  );
}
