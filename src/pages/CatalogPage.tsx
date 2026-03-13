import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import { ProductGrid } from '../features/catalog/components/ProductGrid';
import {
  catalogEditorialNotes,
  catalogEditorialVisual,
  catalogHighlights,
  catalogQuickFilters,
} from '../features/catalog/data/editorialContent';
import { products } from '../features/catalog/data/products';
import { useCatalogFilters } from '../features/catalog/hooks/useCatalogFilters';
import { useFilteredProducts } from '../features/catalog/hooks/useFilteredProducts';
import type { ProductCategory, SortOption } from '../features/catalog/types';
import { formatCategoryLabel } from '../features/catalog/utils/formatCategoryLabel';

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

const IntroHeader = styled.div`
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

const Controls = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
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
  cursor: pointer;
`;

const InputRow = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) 14rem auto;
  }
`;

const SearchInput = styled.input`
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surface};
  font: inherit;
`;

const Select = styled.select`
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surface};
  font: inherit;
`;

const ClearButton = styled.button`
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
  font: inherit;
  cursor: pointer;
`;

const HeroAside = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const HighlightCard = styled.div<{ $tone: 'primary' | 'secondary' | 'support' }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  align-content: center;
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
  display: block;
  max-width: 100%;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.6rem, 2.4vw, 2rem);
  line-height: 1;
  overflow-wrap: anywhere;
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

const categoryOptions = ['Todos', ...catalogQuickFilters] as const;
const sortOptions: Array<{ value: SortOption; label: string }> = [
  { value: 'featured', label: 'Destaques' },
  { value: 'price-asc', label: 'Menor preço' },
  { value: 'price-desc', label: 'Maior preço' },
  { value: 'name-asc', label: 'Nome' },
];

export function CatalogPage() {
  const { filters, setCategory, setSearch, setSort, resetFilters } = useCatalogFilters();
  const filteredProducts = useFilteredProducts(products, filters);

  return (
    <Page>
      <Hero>
        <Intro>
          <IntroHeader>
          <Eyebrow>Catálogo Vortic</Eyebrow>
          <Title>Escolha por modalidade, refine por uso e encontre o que falta na semana.</Title>
          </IntroHeader>
          <Text>
            O catálogo reúne corrida, ciclismo, futebol, natação e tênis como
            entradas principais. Treino, basquete e acessórios aparecem como
            complemento natural para quem precisa fechar a bolsa, a quadra, a
            piscina ou o deslocamento do dia.
          </Text>
          <Controls>
            <FilterRow aria-label="Filtros visuais de categoria">
              {categoryOptions.map((filter) => {
                const categoryValue = filter === 'Todos' ? '' : (filter as ProductCategory);
                const isActive = (filters.category || '') === categoryValue;

                return (
                  <FilterChip
                    key={filter}
                    type="button"
                    $active={isActive}
                    onClick={() => setCategory(categoryValue)}
                  >
                    {filter === 'Todos' ? filter : formatCategoryLabel(filter)}
                  </FilterChip>
                );
              })}
            </FilterRow>
            <InputRow>
              <SearchInput
                type="search"
                placeholder="Buscar por tênis, mochila, bola, faixa ou tipo de treino"
                value={filters.search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <Select value={filters.sort} onChange={(event) => setSort(event.target.value as SortOption)}>
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <ClearButton type="button" onClick={resetFilters}>
                Limpar filtros
              </ClearButton>
            </InputRow>
          </Controls>
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
            <Eyebrow>Seleção ativa</Eyebrow>
            <ShelfTitle>Produtos para começar, retomar ou completar a rotina esportiva.</ShelfTitle>
            <ShelfText>
              Filtre pela modalidade, busque por tipo de item e compare preço,
              faixa e proposta de uso ainda na vitrine. Os 08 itens ativos foram
              organizados para leitura rápida e decisão mais segura.
            </ShelfText>
            <ShelfMeta>
              <MetaItem>{filteredProducts.length} itens na listagem atual</MetaItem>
              <MetaItem>Entrega para todo o Brasil</MetaItem>
              <MetaItem>Troca em até 30 dias</MetaItem>
            </ShelfMeta>
          </ShelfHeader>
          <ProductGrid products={filteredProducts} />
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
