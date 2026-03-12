import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductGrid } from '../../catalog/components/ProductGrid';
import { products } from '../../catalog/data/products';
import { heroVisuals } from '../data/homeContent';
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle
} from './HomeSection';

const SectionFrame = styled.div`
  width: min(100% - 2rem, 82rem);
  margin: 0 auto;
`;

const SectionPanel = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
`;

const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.5fr) minmax(18rem, 0.5fr);
    align-items: start;
  }
`;

const EditorialCard = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding-left: ${({ theme }) => theme.spacing[4]};
  border-left: 3px solid ${({ theme }) => theme.colors.alert};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 7rem;
  }
`;

const EditorialVisual = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const EditorialImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.08;
  object-fit: cover;
`;

const EditorialTitle = styled.h3`
  font-size: 1.45rem;
  line-height: 1.06;
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

const NoteItem = styled.div`
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
  line-height: 1.6;
`;

const EditorialLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
`;

export function FeaturedProductsSection() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <Section id="produtos">
      <SectionFrame>
        <SectionPanel>
          <SectionHeader>
            <Eyebrow>Produtos em destaque</Eyebrow>
            <SectionTitle>Curadoria que parece selecao, nao excesso de loja.</SectionTitle>
            <SectionDescription>
              A vitrine principal abre a largura da pagina e assume mais folego visual. O objetivo aqui e parecer selecao comercial real, com continuidade e espaco para descoberta.
            </SectionDescription>
          </SectionHeader>
          <Layout>
            <ProductGrid products={featuredProducts} />
            <EditorialCard>
              <Eyebrow>Edicao Vortic</Eyebrow>
              <EditorialVisual>
                <EditorialImage src={heroVisuals.accentProduct} alt="Curadoria de produto Vortic" />
              </EditorialVisual>
              <EditorialTitle>Produtos para iniciar ou consolidar uma rotina de treino.</EditorialTitle>
              <EditorialText>
                Misturamos performance, usabilidade e uma linguagem mais limpa para que cada item entre como parte de um ecossistema maior.
              </EditorialText>
              <NoteList>
                <NoteItem>
                  <NoteTitle>Selecao compacta</NoteTitle>
                  <NoteDescription>Poucos itens com leitura imediata e mais espaco para contexto.</NoteDescription>
                </NoteItem>
                <NoteItem>
                  <NoteTitle>Comercio com repertorio</NoteTitle>
                  <NoteDescription>Os produtos aparecem como parte da cultura do esporte, nao como ruido promocional.</NoteDescription>
                </NoteItem>
                <NoteItem>
                  <NoteTitle>Base pronta para dados reais</NoteTitle>
                  <NoteDescription>O bloco pode receber recomendacao, personalizacao e estoque sem mudar de forma.</NoteDescription>
                </NoteItem>
              </NoteList>
              <EditorialLink to="/catalogo">Ver catalogo completo</EditorialLink>
            </EditorialCard>
          </Layout>
        </SectionPanel>
      </SectionFrame>
    </Section>
  );
}
