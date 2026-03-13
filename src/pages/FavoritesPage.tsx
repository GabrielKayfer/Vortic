import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCartPath, getCatalogPath, getProductPath } from '../app/routes/paths';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { useCart } from '../features/cart/hooks/useCart';
import { products } from '../features/catalog/data/products';
import { formatCategoryLabel } from '../features/catalog/utils/formatCategoryLabel';
import { getProductImageBackground } from '../features/catalog/utils/getProductImageBackground';
import { useFavorites } from '../features/favorites/hooks/useFavorites';
import { formatCurrency } from '../utils/formatCurrency';
import editorialLeadImage from '../assets/images/products/mulherSentadaNaMesaFundoMuroMarrom.avif';
import editorialPortraitImage from '../assets/images/products/homemEnconstadoPortaoEstiloso.avif';

const Page = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[10]};
  padding-top: ${({ theme }) => theme.spacing[10]};
`;

const Hero = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.08fr) minmax(18rem, 0.92fr);
    align-items: stretch;
  }
`;

const IntroPanel = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(90deg, rgba(53, 89, 199, 0.16) 0, rgba(53, 89, 199, 0.16) 0.8rem, transparent 0.8rem),
    linear-gradient(180deg, rgba(240, 210, 31, 0.82) 0, rgba(240, 210, 31, 0.82) 0.7rem, transparent 0.7rem),
    ${({ theme }) => theme.colors.surface};
`;

const IntroHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
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
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 0.9;
`;

const Text = styled.p`
  max-width: 44rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.8;
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
    background: rgba(53, 89, 199, 0.12);
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
  font-size: clamp(1.35rem, 1.9vw, 1.9rem);
  line-height: 1;
  letter-spacing: -0.03em;
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

const EditorialLeadWrap = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  aspect-ratio: 1 / 1.08;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const EditorialLead = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`;

const PortraitCard = styled(EditorialCard)`
  background:
    linear-gradient(180deg, rgba(40, 58, 143, 0.12) 0, rgba(40, 58, 143, 0.12) 0.75rem, transparent 0.75rem),
    ${({ theme }) => theme.colors.surface};
`;

const PortraitWrap = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
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
  gap: ${({ theme }) => theme.spacing[4]};
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
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
  }
`;

const Shelf = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const ShelfHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ShelfTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 3rem);
  line-height: 0.96;
`;

const ShelfText = styled.p`
  max-width: 42rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Card = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
`;

const Media = styled.div<{ $tone: string }>`
  background: ${({ $tone }) => $tone};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ThumbLink = styled(Link)`
  display: block;
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.08;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: 0 ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[5]};
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
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

const Price = styled.strong`
  margin-left: auto;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.05rem;
  font-weight: 600;
`;

const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.16;
`;

const ProductNote = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.7;
`;

const CardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
`;

const TextButton = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font: inherit;
  font-weight: 600;
  cursor: pointer;
`;

const SummaryPanel = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(180deg, rgba(53, 89, 199, 0.1) 0, rgba(53, 89, 199, 0.1) 0.8rem, transparent 0.8rem),
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

const SummaryText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

function formatCompactCurrency(value: number) {
  const absoluteValue = Math.abs(value);
  const decimals = Number.isInteger(absoluteValue)
    ? 0
    : Number.isInteger(absoluteValue * 10)
      ? 1
      : 2;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function FavoritesPage() {
  const { items, clear, remove } = useFavorites();
  const { addItem, count: cartCount } = useCart();

  const categoryCount = new Set(items.map((item) => item.category)).size;
  const potentialValue = items.reduce((total, item) => total + item.price, 0);

  if (items.length === 0) {
    return (
      <Page>
        <EmptyState>
          <EmptyCopy>
            <Eyebrow>Favoritos</Eyebrow>
            <Title>Nada salvo por enquanto.</Title>
            <Text>
              Use esta área como shortlist pessoal de compra. Salve o que merece
              segunda leitura, compare categoria, faixa e preço, e volte quando
              a decisão estiver mais clara.
            </Text>
            <ActionRow>
              <Button as={Link} to={getCatalogPath()}>
                Explorar catálogo
              </Button>
              <SecondaryLink to={getCartPath()}>Abrir carrinho</SecondaryLink>
            </ActionRow>
          </EmptyCopy>
          <EmptyVisual>
            <EmptyImage src={editorialLeadImage} alt="Selecao pessoal em pausa de observacao" />
          </EmptyVisual>
        </EmptyState>
      </Page>
    );
  }

  return (
    <Page>
      <Hero>
        <IntroPanel>
          <IntroHeader>
            <Eyebrow>Favoritos</Eyebrow>
            <Title>Sua shortlist para comparar sem perder contexto.</Title>
          </IntroHeader>
          <Text>
            Entram aqui o item que faz sentido agora, a peça que ainda pede
            comparação e a compra que pode esperar um pouco mais. Favoritos
            ajudam a revisar com calma antes de levar ao carrinho.
          </Text>
          <HeroStats>
            <HeroStat>
              <StatValue>{String(items.length).padStart(2, '0')}</StatValue>
              <StatLabel>itens salvos para segunda leitura</StatLabel>
            </HeroStat>
            <HeroStat>
              <StatValue>{String(categoryCount).padStart(2, '0')}</StatValue>
              <StatLabel>modalidades presentes na shortlist</StatLabel>
            </HeroStat>
            <HeroStat>
              <StatValue>{formatCompactCurrency(potentialValue)}</StatValue>
              <StatLabel>valor total se toda a lista virar compra</StatLabel>
            </HeroStat>
          </HeroStats>
          <ActionRow>
            <Button as={Link} to={getCatalogPath()}>
              Continuar explorando
            </Button>
            <SecondaryLink to={getCartPath()}>
              Ver carrinho {cartCount > 0 ? `(${cartCount})` : ''}
            </SecondaryLink>
            <TextButton type="button" onClick={clear}>Limpar lista</TextButton>
          </ActionRow>
        </IntroPanel>

        <HeroAside>
          <EditorialCard>
            <EditorialLeadWrap>
              <EditorialLead src={editorialLeadImage} alt="Cena editorial para shortlist Vortic" />
            </EditorialLeadWrap>
            <EditorialCopy>
              <Eyebrow>Lista pessoal</Eyebrow>
              <EditorialTitle>Salvar não é adiar. É separar o que já merece atenção de verdade.</EditorialTitle>
              <EditorialText>
                Esta área ajuda a cortar impulso, comparar com mais calma e
                perceber o que entra agora, o que combina com outro item e o que
                ainda pode esperar.
              </EditorialText>
            </EditorialCopy>
          </EditorialCard>
          <PortraitCard>
            <PortraitWrap>
              <PortraitImage src={editorialPortraitImage} alt="Retrato editorial masculino Vortic" />
            </PortraitWrap>
            <EditorialText>
              Quando um produto volta mais de uma vez para esta lista, ele já
              deixou de ser impulso e entrou na conta real da semana.
            </EditorialText>
          </PortraitCard>
        </HeroAside>
      </Hero>

      <Content>
        <Shelf>
          <ShelfHeader>
            <Eyebrow>Itens salvos</Eyebrow>
            <ShelfTitle>O que ficou em observação antes da decisão final.</ShelfTitle>
            <ShelfText>
              Cada card mantém preço, categoria e proposta de uso para o corte
              ficar mais simples. É aqui que a comparação ganha clareza antes de
              virar carrinho.
            </ShelfText>
          </ShelfHeader>
          <Grid>
            {items.map((item) => {
              const sourceProduct = products.find((product) => product.slug === item.slug);

              return (
                <Card key={item.slug}>
                  <Media $tone={getProductImageBackground(item.category, item.image)}>
                    <ThumbLink to={getProductPath(item.slug)}>
                      <Thumb src={item.image} alt={item.name} />
                    </ThumbLink>
                  </Media>
                  <CardBody>
                    <CardMeta>
                      <Category>{formatCategoryLabel(item.category)}</Category>
                      <Price>{formatCurrency(item.price)}</Price>
                    </CardMeta>
                    <ProductName>{item.name}</ProductName>
                    <ProductNote>
                      {sourceProduct
                        ? `${sourceProduct.badge}. ${sourceProduct.description}`
                        : 'Salvo para comparar preço, categoria e proposta de uso com mais calma.'}
                    </ProductNote>
                    <CardActions>
                      <SecondaryLink to={getProductPath(item.slug)}>Ver produto</SecondaryLink>
                      {sourceProduct ? (
                        <Button type="button" onClick={() => addItem(sourceProduct)}>
                          Levar ao carrinho
                        </Button>
                      ) : null}
                      <TextButton type="button" onClick={() => remove(item.slug)}>
                        Remover
                      </TextButton>
                    </CardActions>
                  </CardBody>
                </Card>
              );
            })}
          </Grid>
        </Shelf>

        <SummaryPanel>
          <SummaryHeader>
            <Eyebrow>Resumo da shortlist</Eyebrow>
            <SummaryValue>{formatCompactCurrency(potentialValue)}</SummaryValue>
          </SummaryHeader>
          <SummaryText>
            Veja o valor total da seleção antes de mover tudo ao carrinho ou
            cortar o que ainda não encaixa no momento.
          </SummaryText>
          <SummaryList>
            <SummaryRow>
              <span>Itens salvos</span>
              <strong>{items.length}</strong>
            </SummaryRow>
            <SummaryRow>
              <span>Modalidades presentes</span>
              <strong>{categoryCount}</strong>
            </SummaryRow>
            <SummaryRow>
              <span>Itens já no carrinho</span>
              <strong>{cartCount}</strong>
            </SummaryRow>
          </SummaryList>
          <ActionRow>
            <Button as={Link} to={getCartPath()}>
              Ir para o carrinho
            </Button>
            <SecondaryLink to={getCatalogPath()}>Voltar ao catálogo</SecondaryLink>
          </ActionRow>
        </SummaryPanel>
      </Content>
    </Page>
  );
}
