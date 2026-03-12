import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../components/ui/Button';
import { Container } from '../../../components/ui/Container';
import { heroStats, heroVisuals } from '../data/homeContent';
import { Eyebrow, Section } from './HomeSection';

const HeroRoot = styled(Section)`
  padding-top: ${({ theme }) => theme.spacing[10]};
`;

const HeroPanel = styled(Container)`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background:
    linear-gradient(90deg, rgba(95, 135, 146, 0.12) 0, rgba(95, 135, 146, 0.12) 14%, transparent 14%, transparent 100%),
    linear-gradient(180deg, rgba(238, 230, 214, 0.78) 0, rgba(238, 230, 214, 0.78) 18%, transparent 18%, transparent 100%),
    ${({ theme }) => theme.colors.surface};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(135deg, transparent 49%, ${({ theme }) => theme.colors.borderStrong} 50%, ${({ theme }) => theme.colors.borderStrong} 52%, ${({ theme }) => theme.colors.background} 52%);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.02fr) minmax(22rem, 0.98fr);
    align-items: start;
  }
`;

const Copy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  align-content: start;
`;

const HeadlineBlock = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding-left: ${({ theme }) => theme.spacing[4]};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
  max-width: 10ch;
  font-size: clamp(3.1rem, 7vw, 6.4rem);
  font-weight: 700;
  line-height: 0.84;
`;

const Description = styled.p`
  max-width: 39rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.05rem;
  line-height: 1.8;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surfaceEditorial};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    background: rgba(205, 170, 90, 0.2);
  }
`;

const Stats = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const StatCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 10rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};

  &:nth-child(2) {
    background: rgba(168, 206, 196, 0.18);
  }

  &:nth-child(3) {
    background: rgba(238, 230, 214, 0.78);
  }
`;

const StatValue = styled.strong`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.3rem;
  line-height: 0.9;
`;

const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  line-height: 1.6;
`;

const VisualGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.08fr 0.92fr;
  }
`;

const TallVisual = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 29rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FloatingCard = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid rgba(251, 252, 252, 0.28);
  background: rgba(31, 37, 41, 0.72);
  color: ${({ theme }) => theme.colors.surface};

  strong {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 600;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.95rem;
    font-weight: 400;
  }
`;

const VisualColumn = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ProductCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const ProductMeta = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 0.35rem 0.55rem;
  background: rgba(95, 135, 146, 0.14);
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const ProductTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.14rem;
  font-weight: 600;
  line-height: 1.25;
`;

const AccentCard = styled(ProductCard)`
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  background:
    linear-gradient(180deg, rgba(168, 206, 196, 0.22) 0, rgba(168, 206, 196, 0.22) 0.65rem, transparent 0.65rem),
    ${({ theme }) => theme.colors.surface};
`;

const AccentImage = styled.img`
  width: 100%;
  aspect-ratio: 0.92 / 1;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export function HeroSection() {
  return (
    <HeroRoot id="inicio">
      <HeroPanel>
        <Copy>
          <HeadlineBlock>
            <Eyebrow>Marketplace + editorial + ecossistema</Eyebrow>
            <Title>Esporte com curadoria, contexto e vida real.</Title>
          </HeadlineBlock>
          <Description>
            A Vortic organiza produtos, repertorio e rotina esportiva em uma
            mesma experiencia. A home nasce para parecer marca viva: silenciosa,
            premium e pronta para crescer em dados, conteudo e comercio.
          </Description>
          <Actions>
            <Link to="/catalogo">
              <Button as="span">Explorar selecao</Button>
            </Link>
            <SecondaryLink to="/#guias">Ler guias por esporte</SecondaryLink>
          </Actions>
          <Stats>
            {heroStats.map((item) => (
              <StatCard key={item.label}>
                <StatValue>{item.value}</StatValue>
                <StatLabel>{item.label}</StatLabel>
              </StatCard>
            ))}
          </Stats>
        </Copy>
        <VisualGrid>
          <TallVisual>
            <HeroImage src={heroVisuals.lifestyle} alt="Atleta em movimento" />
            <FloatingCard>
              <strong>Treino, compra e repertorio no mesmo fluxo.</strong>
              <span>Uma home pensada para descoberta e continuidade.</span>
            </FloatingCard>
          </TallVisual>
          <VisualColumn>
            <ProductCard>
              <ProductImage src={heroVisuals.mainProduct} alt="Tenis em destaque" />
              <div>
                <ProductMeta>Selecao da semana</ProductMeta>
                <ProductTitle>Tenis de resposta rapida para corrida e deslocamento.</ProductTitle>
              </div>
            </ProductCard>
            <AccentCard>
              <AccentImage src={heroVisuals.supportProduct} alt="Look de treino" />
              <div>
                <ProductMeta>Looks que acompanham a rotina</ProductMeta>
                <ProductTitle>Basicos tecnicos com linguagem mais editorial.</ProductTitle>
              </div>
            </AccentCard>
          </VisualColumn>
        </VisualGrid>
      </HeroPanel>
    </HeroRoot>
  );
}
