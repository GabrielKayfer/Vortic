import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import { ProductGrid } from '../features/catalog/components/ProductGrid';
import {
  catalogEditorialNotes,
  catalogEditorialVisual,
  catalogHighlights,
  catalogQuickFilters
} from '../features/catalog/data/editorialContent';
import { products } from '../features/catalog/data/products';

const Page = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[10]};
  padding-top: ${({ theme }) => theme.spacing[10]};
`;

const Hero = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background:
    linear-gradient(135deg, rgba(95, 135, 146, 0.1), transparent 36%),
    linear-gradient(225deg, rgba(238, 230, 214, 0.92), transparent 42%),
    ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 21rem);
    align-items: end;
  }
`;

const Intro = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  font-weight: 500;
`;

const Title = styled.h1`
  max-width: 12ch;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.9;
`;

const Text = styled.p`
  max-width: 42rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.8;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[3]};
`;

const FilterChip = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  min-height: 2.4rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) => ($active ? 'rgba(95, 135, 146, 0.1)' : theme.colors.surface)};
  color: ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.textMuted)};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 500;
`;

const HeroAside = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const HighlightCard = styled.div<{ $tone: 'primary' | 'secondary' | 'support' }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ $tone, theme }) => {
    if ($tone === 'secondary') return theme.colors.surfaceEditorial;
    if ($tone === 'support') return theme.colors.surfaceSupport;
    return theme.colors.surface;
  }};
`;

const HighlightValue = styled.strong`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2rem;
  line-height: 0.9;
`;

const HighlightLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.6;
`;

const Content = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.45fr) minmax(18rem, 0.55fr);
    align-items: start;
  }
`;

const Shelf = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const ShelfHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ShelfTitle = styled.h2`
  font-size: clamp(1.9rem, 3vw, 3rem);
  line-height: 0.96;
`;

const ShelfText = styled.p`
  max-width: 48rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const ShelfMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2.15rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(251, 252, 252, 0.82);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.86rem;
  font-weight: 500;
`;

const EditorialPanel = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background:
    linear-gradient(180deg, rgba(230, 183, 159, 0.14), transparent 34%),
    ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 7rem;
  }
`;

const EditorialImageWrap = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surfaceEditorial};
`;

const EditorialImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.1;
  object-fit: cover;
`;

const EditorialTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.08;
`;

const EditorialText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const NoteList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const NoteCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const NoteTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
`;

const NoteDescription = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  line-height: 1.65;
`;

export function CatalogPage() {
  return (
    <Page>
      <Hero>
        <Intro>
          <Eyebrow>Catalogo Vortic</Eyebrow>
          <Title>Selecao esportiva com leitura editorial.</Title>
          <Text>
            O catalogo organiza produto como curadoria viva. A pagina nasce clara,
            silenciosa e pronta para crescer em filtros, recomendacoes e integracao
            com backend sem perder o ritmo visual da marca.
          </Text>
          <FilterRow aria-label="Filtros visuais de categoria">
            {catalogQuickFilters.map((filter, index) => (
              <FilterChip key={filter} type="button" $active={index === 0}>
                {filter}
              </FilterChip>
            ))}
          </FilterRow>
        </Intro>
        <HeroAside>
          {catalogHighlights.map((highlight) => (
            <HighlightCard key={highlight.label} $tone={highlight.tone}>
              <HighlightValue>{highlight.value}</HighlightValue>
              <HighlightLabel>{highlight.label}</HighlightLabel>
            </HighlightCard>
          ))}
        </HeroAside>
      </Hero>

      <Content>
        <Shelf>
          <ShelfHeader>
            <Eyebrow>Selecao ativa</Eyebrow>
            <ShelfTitle>Produtos com contexto, ritmo e espaco para descoberta.</ShelfTitle>
            <ShelfText>
              A grade principal evita a sensacao de prateleira ruidosa. O foco esta em
              leitura rapida, categoria clara e continuidade entre compra, uso e repertorio.
            </ShelfText>
            <ShelfMeta>
              <MetaItem>{products.length} itens na selecao inicial</MetaItem>
              <MetaItem>Marketplace + editorial</MetaItem>
              <MetaItem>Pronto para filtros reais</MetaItem>
            </ShelfMeta>
          </ShelfHeader>
          <ProductGrid products={products} />
        </Shelf>

        <EditorialPanel>
          <Eyebrow>{catalogEditorialVisual.overline}</Eyebrow>
          <EditorialImageWrap>
            <EditorialImage src={catalogEditorialVisual.image} alt={catalogEditorialVisual.title} />
          </EditorialImageWrap>
          <EditorialTitle>{catalogEditorialVisual.title}</EditorialTitle>
          <EditorialText>{catalogEditorialVisual.description}</EditorialText>
          <NoteList>
            {catalogEditorialNotes.map((note) => (
              <NoteCard key={note.title}>
                <NoteTitle>{note.title}</NoteTitle>
                <NoteDescription>{note.description}</NoteDescription>
              </NoteCard>
            ))}
          </NoteList>
        </EditorialPanel>
      </Content>
    </Page>
  );
}
