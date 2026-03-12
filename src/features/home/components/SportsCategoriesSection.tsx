import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sportsCategories } from '../data/homeContent';
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle
} from './HomeSection';

const SectionFrame = styled.div`
  width: min(100% - 2rem, 80rem);
  margin: 0 auto;
`;

const IntroRow = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(17rem, 19rem);
    align-items: stretch;
  }
`;

const IntroCard = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.colors.secondary} 0, ${({ theme }) => theme.colors.secondary} 0.65rem, transparent 0.65rem),
    ${({ theme }) => theme.colors.surface};
`;

const IntroMetric = styled.strong`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 3rem;
  line-height: 0.88;
`;

const IntroText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.75;
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const CategoryCard = styled(Link)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
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

  &:nth-child(1) {
    background: linear-gradient(180deg, rgba(53, 89, 199, 0.16) 0, rgba(53, 89, 199, 0.16) 0.5rem, transparent 0.5rem), ${({ theme }) => theme.colors.surface};
  }

  &:nth-child(2) {
    background: linear-gradient(180deg, rgba(240, 210, 31, 0.28) 0, rgba(240, 210, 31, 0.28) 0.5rem, transparent 0.5rem), ${({ theme }) => theme.colors.surface};
  }

  &:nth-child(3) {
    background: linear-gradient(180deg, rgba(228, 71, 58, 0.18) 0, rgba(228, 71, 58, 0.18) 0.5rem, transparent 0.5rem), ${({ theme }) => theme.colors.surface};
  }

  &:nth-child(4) {
    background: linear-gradient(180deg, rgba(40, 58, 143, 0.18) 0, rgba(40, 58, 143, 0.18) 0.5rem, transparent 0.5rem), ${({ theme }) => theme.colors.surface};
  }

  &:nth-child(5) {
    background: linear-gradient(180deg, rgba(240, 210, 31, 0.16) 0, rgba(240, 210, 31, 0.16) 0.5rem, transparent 0.5rem), ${({ theme }) => theme.colors.surface};
  }
`;

const CategoryTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const CategoryIndex = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

const CategoryHint = styled.span`
  color: ${({ theme }) => theme.colors.alert};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const CategoryMedia = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const CategoryImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.16;
  object-fit: cover;
  mix-blend-mode: multiply;
`;

const CategoryBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const CategoryTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.06rem;
  font-weight: 600;
`;

const CategoryDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.94rem;
  line-height: 1.7;
`;

const CategoryFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const CategoryLinkText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
`;

const Arrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 700;
`;

export function SportsCategoriesSection() {
  return (
    <Section id="modalidades">
      <SectionFrame>
        <SectionInner>
          <IntroRow>
            <SectionHeader>
              <Eyebrow>Modalidades esportivas</Eyebrow>
              <SectionTitle>Entradas claras para cada universo de pratica.</SectionTitle>
              <SectionDescription>
                Cada bloco funciona como porta de entrada para produto, conteudo e rotina. A navegacao fica simples e a marca ganha repertorio.
              </SectionDescription>
            </SectionHeader>
            <IntroCard>
              <Eyebrow>Curadoria inicial</Eyebrow>
              <IntroMetric>05</IntroMetric>
              <IntroText>
                Cada modalidade ja nasce com linguagem propria, mas dentro de um mesmo sistema visual para manter unidade de marca.
              </IntroText>
            </IntroCard>
          </IntroRow>
          <Grid>
            {sportsCategories.map((category, index) => (
              <CategoryCard key={category.title} to="/catalogo">
                <CategoryTop>
                  <CategoryIndex>{String(index + 1).padStart(2, '0')}</CategoryIndex>
                  <CategoryHint>Explorar</CategoryHint>
                </CategoryTop>
                <CategoryMedia>
                  <CategoryImage src={category.image} alt={category.title} />
                </CategoryMedia>
                <CategoryBody>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  <CategoryDescription>{category.description}</CategoryDescription>
                </CategoryBody>
                <CategoryFooter>
                  <CategoryLinkText>Ver selecao</CategoryLinkText>
                  <Arrow>+</Arrow>
                </CategoryFooter>
              </CategoryCard>
            ))}
          </Grid>
        </SectionInner>
      </SectionFrame>
    </Section>
  );
}
