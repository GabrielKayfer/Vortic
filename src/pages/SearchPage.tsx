import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getCatalogPath, getSearchPath } from '../app/routes/paths';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { ProductGrid } from '../features/catalog/components/ProductGrid';
import { products } from '../features/catalog/data/products';
import { useFilteredProducts } from '../features/catalog/hooks/useFilteredProducts';
import editorialImage from '../assets/images/products/mulherNaEscadaEstiloFotoEscura.avif';

const suggestionTerms = ['treino', 'mochila', 'bola', 'jaqueta', 'piscina'] as const;

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

const Intro = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(90deg, rgba(53, 89, 199, 0.16) 0, rgba(53, 89, 199, 0.16) 0.85rem, transparent 0.85rem),
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
  font-size: clamp(2.6rem, 5vw, 4.8rem);
  line-height: 0.98;
`;

const Text = styled.p`
  max-width: 44rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.8;
`;

const SearchForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) auto;
  }
`;

const SearchInput = styled.input`
  min-height: 3.2rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
  font: inherit;
`;

const SuggestionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const SuggestionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 2.2rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  font-weight: 600;
`;

const ResultStats = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ResultStat = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  align-content: center;
  justify-items: center;
  min-height: 7.75rem;
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
  font-size: clamp(1.55rem, 2.3vw, 1.9rem);
  line-height: 1.05;
  overflow-wrap: break-word;
  word-break: normal;
  text-wrap: balance;
`;

const StatLabel = styled.span`
  max-width: 12ch;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: center;
`;

const HeroAside = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(180deg, rgba(228, 71, 58, 0.12) 0, rgba(228, 71, 58, 0.12) 0.75rem, transparent 0.75rem),
    ${({ theme }) => theme.colors.surface};
`;

const AsideImageWrap = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  aspect-ratio: 1 / 1.08;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const AsideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`;

const AsideTitle = styled.h2`
  font-size: clamp(1.4rem, 2.3vw, 1.95rem);
  line-height: 1.04;
`;

const AsideText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const AsideCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const Results = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const ResultsHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ResultsTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 3rem);
  line-height: 0.96;
`;

const ResultsText = styled.p`
  max-width: 44rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const EmptyState = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
`;

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('busca') ?? '';
  const results = useFilteredProducts(products, { category: '', sort: 'featured', search });
  const categoryCount = new Set(results.map((product) => product.category)).size;

  const updateSearch = (value: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      nextParams.set('busca', value);
    } else {
      nextParams.delete('busca');
    }

    setSearchParams(nextParams, { replace: true });
  };

  return (
    <Page>
      <Hero>
        <Intro>
          <IntroHeader>
            <Eyebrow>Busca</Eyebrow>
            <Title>Encontre produto, categoria ou detalhe de uso com rapidez.</Title>
          </IntroHeader>
          <Text>
            A busca cruza nome, descrição e atributos para localizar o item certo
            sem perder contexto. Se preferir abrir por modalidade, o catálogo
            continua sendo a melhor entrada.
          </Text>
          <SearchForm
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <SearchInput
              type="search"
              placeholder="Buscar por mochila, jaqueta, bola, piscina ou treino"
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
            />
            <Button type="button" onClick={() => updateSearch(search)}>
              Buscar
            </Button>
          </SearchForm>
          <SuggestionRow>
            {suggestionTerms.map((term) => (
              <SuggestionLink key={term} to={getSearchPath(term)}>
                {term}
              </SuggestionLink>
            ))}
            <SuggestionLink to={getCatalogPath()}>Abrir catálogo completo</SuggestionLink>
          </SuggestionRow>
          <ResultStats>
            <ResultStat>
              <StatValue>{String(results.length).padStart(2, '0')}</StatValue>
              <StatLabel>itens encontrados agora</StatLabel>
            </ResultStat>
            <ResultStat>
              <StatValue>{search ? search : 'Todos os produtos'}</StatValue>
              <StatLabel>busca atual</StatLabel>
            </ResultStat>
            <ResultStat>
              <StatValue>{String(categoryCount).padStart(2, '0')}</StatValue>
              <StatLabel>modalidades presentes na busca</StatLabel>
            </ResultStat>
          </ResultStats>
        </Intro>

        <HeroAside>
          <AsideImageWrap>
            <AsideImage src={editorialImage} alt="Retrato editorial para busca Vortic" />
          </AsideImageWrap>
            <AsideCopy>
            <Eyebrow>Busca rápida</Eyebrow>
            <AsideTitle>Buscar bem encurta o caminho sem empobrecer a escolha.</AsideTitle>
            <AsideText>
              Nome do item, atributo ou contexto de uso já bastam para abrir uma
              seleção mais útil. Quanto mais claro o termo, mais precisa fica a
              resposta da vitrine.
            </AsideText>
          </AsideCopy>
        </HeroAside>
      </Hero>

      <Results>
        <ResultsHeader>
          <Eyebrow>Resultados</Eyebrow>
          <ResultsTitle>
            {search ? `Resultados para "${search}"` : 'Todos os produtos disponíveis na busca'}
          </ResultsTitle>
          <ResultsText>
            {search
              ? 'A listagem abaixo já considera nome, descrição e atributos dos produtos ativos.'
              : 'Sem termo aplicado, a busca mostra a seleção completa. Use o nome do item, um atributo ou um contexto de uso para encurtar o caminho.'}
          </ResultsText>
        </ResultsHeader>

        {search && results.length === 0 ? (
          <EmptyState>
            <Eyebrow>Sem resultado</Eyebrow>
            <ResultsTitle>Nenhum item apareceu para esse termo.</ResultsTitle>
            <ResultsText>
              Tente buscar pelo nome da peça, por um atributo ou por um uso mais
              amplo. Exemplos: mochila, jaqueta, bola, piscina ou treino.
            </ResultsText>
            <SuggestionRow>
              {suggestionTerms.map((term) => (
                <SuggestionLink key={term} to={getSearchPath(term)}>
                  buscar {term}
                </SuggestionLink>
              ))}
              <Button as={Link} to={getCatalogPath()}>
                Ver catálogo completo
              </Button>
            </SuggestionRow>
          </EmptyState>
        ) : (
          <ProductGrid products={results} />
        )}
      </Results>
    </Page>
  );
}
