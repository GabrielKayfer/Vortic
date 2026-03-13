import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HOME_SECTION_IDS } from '../../../app/routes/sections';
import { ProductGrid } from '../../catalog/components/ProductGrid';
import { products } from '../../catalog/data/products';
import { getProductImageBackground } from '../../catalog/utils/getProductImageBackground';
import { heroVisuals } from '../data/homeContent';
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
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
  background: ${getProductImageBackground('Ciclismo')};
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
    <Section id={HOME_SECTION_IDS.products}>
      <SectionFrame>
        <SectionPanel>
          <SectionHeader>
            <Eyebrow>Produtos em destaque</Eyebrow>
            <SectionTitle>Seis itens escolhidos pelo que resolvem na semana.</SectionTitle>
            <SectionDescription>
              A seleção parte das cinco modalidades e abre espaço para treino,
              quadra e deslocamento sem perder clareza de uso.
            </SectionDescription>
          </SectionHeader>
          <Layout>
            <ProductGrid products={featuredProducts} />
            <EditorialCard>
              <Eyebrow>Edição da semana</Eyebrow>
              <EditorialVisual>
                <EditorialImage src={heroVisuals.accentProduct} alt="Seleção de produtos Vortic" />
              </EditorialVisual>
              <EditorialTitle>Seis escolhas para começar melhor e comprar com critério.</EditorialTitle>
              <EditorialText>
                Da rodagem curta ao pós-jogo, a edição reúne peças que cobrem
                treino, reposição e deslocamento, com leitura clara de uso.
              </EditorialText>
              <NoteList>
                <NoteItem>
                  <NoteTitle>Comece pelo uso</NoteTitle>
                  <NoteDescription>Veja primeiro onde o item rende melhor: treino diário, deslocamento, quadra ou piscina.</NoteDescription>
                </NoteItem>
                <NoteItem>
                  <NoteTitle>Compare rápido</NoteTitle>
                  <NoteDescription>Preço, faixa de tamanho e atributo principal aparecem antes do clique.</NoteDescription>
                </NoteItem>
                <NoteItem>
                  <NoteTitle>Leve o que falta</NoteTitle>
                  <NoteDescription>A edição prioriza o que realmente falta na mochila, não só o que chama atenção no card.</NoteDescription>
                </NoteItem>
              </NoteList>
              <EditorialLink to="/catalogo">Ver seleção completa</EditorialLink>
            </EditorialCard>
          </Layout>
        </SectionPanel>
      </SectionFrame>
    </Section>
  );
}


