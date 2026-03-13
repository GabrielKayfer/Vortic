import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCatalogPath, getFavoritesPath, getProductPath } from '../app/routes/paths';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { useCart } from '../features/cart/hooks/useCart';
import { products } from '../features/catalog/data/products';
import { formatCategoryLabel } from '../features/catalog/utils/formatCategoryLabel';
import { getProductImageBackground } from '../features/catalog/utils/getProductImageBackground';
import { formatCurrency } from '../utils/formatCurrency';
import editorialImage from '../assets/images/products/malaFem.png';
import editorialSupportImage from '../assets/images/products/homemCoberturaPredioPombos.avif';

const Page = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[10]};
  padding-top: ${({ theme }) => theme.spacing[10]};
`;

const Eyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 11ch;
  font-size: clamp(2.6rem, 5vw, 4.8rem);
  line-height: 0.9;
`;

const Text = styled.p`
  max-width: 46rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.8;
`;

const Hero = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.04fr) minmax(18rem, 0.96fr);
    align-items: stretch;
  }
`;

const HeroPanel = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(90deg, rgba(40, 58, 143, 0.14) 0, rgba(40, 58, 143, 0.14) 0.85rem, transparent 0.85rem),
    linear-gradient(180deg, rgba(240, 210, 31, 0.82) 0, rgba(240, 210, 31, 0.82) 0.7rem, transparent 0.7rem),
    ${({ theme }) => theme.colors.surface};
`;

const IntroHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const HeroStats = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const HeroStat = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  align-content: center;
  justify-items: center;
  min-height: 8.5rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
  text-align: center;

  &:first-child {
    background: rgba(40, 58, 143, 0.12);
  }

  &:nth-child(2) {
    background: rgba(240, 210, 31, 0.18);
  }

  &:nth-child(3) {
    background: rgba(228, 71, 58, 0.12);
  }
`;

const StatValue = styled.strong`
  display: block;
  max-width: 100%;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.6rem, 2.4vw, 2rem);
  line-height: 1;
  overflow-wrap: anywhere;
`;

const StatLabel = styled.span`
  max-width: 12ch;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: center;
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
`;

const HeroAside = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const EditorialCard = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(180deg, rgba(228, 71, 58, 0.12) 0, rgba(228, 71, 58, 0.12) 0.75rem, transparent 0.75rem),
    ${({ theme }) => theme.colors.surface};
`;

const EditorialWrap = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
`;

const EditorialImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.08;
  object-fit: cover;
`;

const EditorialTitle = styled.h2`
  font-size: clamp(1.45rem, 2.4vw, 2rem);
  line-height: 1.02;
`;

const EditorialText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const EditorialCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const EmptyState = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 22rem);
    align-items: center;
  }
`;

const EmptyCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const EmptyVisual = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  aspect-ratio: 1 / 1.12;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const EmptyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`;

const Content = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.38fr) minmax(18rem, 0.62fr);
    align-items: start;
  }
`;

const List = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ItemCard = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 8.5rem minmax(0, 1fr) auto;
    align-items: center;
  }
`;

const Media = styled.div<{ $tone: string }>`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $tone }) => $tone};
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.06;
  object-fit: cover;
`;

const ItemBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ItemMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
`;

const Category = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  background: rgba(240, 210, 31, 0.24);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const ItemName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.16rem;
  font-weight: 600;
  line-height: 1.16;
`;

const Price = styled.strong`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.02rem;
  font-weight: 600;
`;

const ItemText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.7;
`;

const ItemLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ProductLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
`;

const ItemActions = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 10rem;
`;

const QuantityGroup = styled.div`
  display: inline-grid;
  grid-template-columns: 2.5rem 4.25rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const QuantityButton = styled.button`
  border: 0;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

const QuantityInput = styled.input`
  width: 100%;
  min-height: 2.75rem;
  border: 0;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  text-align: center;
  font: inherit;
`;

const LineTotal = styled.strong`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
`;

const TextButton = styled.button`
  width: fit-content;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font: inherit;
  font-weight: 600;
  cursor: pointer;
`;

const Summary = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(180deg, rgba(240, 210, 31, 0.18) 0, rgba(240, 210, 31, 0.18) 0.8rem, transparent 0.8rem),
    ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 6.5rem;
  }
`;

const SummaryValue = styled.strong`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.3rem;
  line-height: 0.9;
`;

const SummaryHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const SummaryText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const SummaryList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
`;

export function CartPage() {
  const { items, subtotal, totals, updateQuantity, removeItem, clearCart } = useCart();

  const categoryCount = new Set(items.map((item) => item.category)).size;
  const productBySlug = new Map(products.map((product) => [product.slug, product]));

  if (items.length === 0) {
    return (
      <Page>
        <EmptyState>
          <EmptyCopy>
            <Eyebrow>Carrinho</Eyebrow>
            <Title>Seu carrinho ainda está vazio.</Title>
            <Text>
              Quando um item entra aqui, a compra ganha revisão: dá para ajustar
              quantidade, conferir categoria e entender o subtotal antes do
              fechamento. Por enquanto, escolha os primeiros itens no catálogo.
            </Text>
            <ActionRow>
              <Button as={Link} to={getCatalogPath()}>
                Ir para o catálogo
              </Button>
              <SecondaryLink to={getFavoritesPath()}>Ver favoritos</SecondaryLink>
            </ActionRow>
          </EmptyCopy>
          <EmptyVisual>
            <EmptyImage src={editorialSupportImage} alt="Cena urbana para carrinho Vortic" />
          </EmptyVisual>
        </EmptyState>
      </Page>
    );
  }

  return (
    <Page>
      <Hero>
        <HeroPanel>
          <IntroHeader>
            <Eyebrow>Carrinho</Eyebrow>
            <Title>Revise a compra antes de seguir.</Title>
          </IntroHeader>
          <Text>
            Quantidade, subtotal e combinação de categorias ficam visíveis o
            tempo todo para a decisão final ser mais clara. O carrinho existe
            para organizar a compra, não para esconder informação.
          </Text>
          <HeroStats>
            <HeroStat>
              <StatValue>{String(items.length).padStart(2, '0')}</StatValue>
              <StatLabel>itens diferentes no carrinho atual</StatLabel>
            </HeroStat>
            <HeroStat>
              <StatValue>{String(totals.quantity).padStart(2, '0')}</StatValue>
              <StatLabel>unidades somadas entre peças principais e apoio</StatLabel>
            </HeroStat>
            <HeroStat>
              <StatValue>{formatCurrency(subtotal)}</StatValue>
              <StatLabel>subtotal antes de frete e pagamento</StatLabel>
            </HeroStat>
          </HeroStats>
          <ActionRow>
            <Button as={Link} to={getCatalogPath()}>
              Adicionar mais itens
            </Button>
            <SecondaryLink to={getFavoritesPath()}>Rever favoritos</SecondaryLink>
            <TextButton type="button" onClick={clearCart}>Limpar carrinho</TextButton>
          </ActionRow>
        </HeroPanel>

        <HeroAside>
          <EditorialCard>
            <EditorialWrap>
              <EditorialImage src={editorialImage} alt="Bolsa de treino pronta para sair" />
            </EditorialWrap>
            <EditorialCopy>
              <Eyebrow>Revisão final</Eyebrow>
              <EditorialTitle>Bom carrinho é o que deixa a escolha mais simples, não mais ansiosa.</EditorialTitle>
              <EditorialText>
                Antes de seguir, vale confirmar se o conjunto faz sentido para o
                treino, a quadra, a piscina ou o deslocamento. Revisar também é
                parte da compra.
              </EditorialText>
            </EditorialCopy>
          </EditorialCard>
        </HeroAside>
      </Hero>

      <Content>
        <List>
          {items.map((item) => {
            const sourceProduct = productBySlug.get(item.slug);

            return (
              <ItemCard key={item.lineId}>
                <Media $tone={getProductImageBackground(item.category, item.image)}>
                  <Thumb src={item.image} alt={item.name} />
                </Media>
                <ItemBody>
                  <ItemMeta>
                    <Category>{formatCategoryLabel(item.category)}</Category>
                    <Price>{formatCurrency(item.price)}</Price>
                  </ItemMeta>
                  <ItemName>{item.name}</ItemName>
                  <ItemText>
                    {sourceProduct
                      ? `${sourceProduct.badge}. ${sourceProduct.description}`
                      : 'Revise quantidade e subtotal antes do fechamento.'}
                  </ItemText>
                  <ItemLinks>
                    <ProductLink to={getProductPath(item.slug)}>Abrir produto</ProductLink>
                    <ProductLink to={getCatalogPath({ category: item.category })}>Ver categoria</ProductLink>
                  </ItemLinks>
                </ItemBody>
                <ItemActions>
                  <QuantityGroup>
                    <QuantityButton type="button" onClick={() => updateQuantity(item.lineId, item.quantity - 1)}>
                      -
                    </QuantityButton>
                    <QuantityInput
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.lineId, Number(event.target.value) || 0)}
                    />
                    <QuantityButton type="button" onClick={() => updateQuantity(item.lineId, item.quantity + 1)}>
                      +
                    </QuantityButton>
                  </QuantityGroup>
                  <LineTotal>{formatCurrency(item.price * item.quantity)}</LineTotal>
                  <TextButton type="button" onClick={() => removeItem(item.lineId)}>
                    Remover
                  </TextButton>
                </ItemActions>
              </ItemCard>
            );
          })}
        </List>

        <Summary>
          <SummaryHeader>
            <Eyebrow>Resumo financeiro</Eyebrow>
            <SummaryValue>{formatCurrency(subtotal)}</SummaryValue>
          </SummaryHeader>
          <SummaryText>
            O subtotal fica visível para ajustar a compra antes de frete,
            pagamento e entrega.
          </SummaryText>
          <SummaryList>
            <SummaryRow>
              <span>Linhas no carrinho</span>
              <strong>{items.length}</strong>
            </SummaryRow>
            <SummaryRow>
              <span>Unidades</span>
              <strong>{totals.quantity}</strong>
            </SummaryRow>
            <SummaryRow>
              <span>Modalidades presentes</span>
              <strong>{categoryCount}</strong>
            </SummaryRow>
          </SummaryList>
          <ActionRow>
            <Button as={Link} to={getCatalogPath()}>
              Continuar comprando
            </Button>
            <SecondaryLink to={getFavoritesPath()}>Rever favoritos</SecondaryLink>
          </ActionRow>
        </Summary>
      </Content>
    </Page>
  );
}
