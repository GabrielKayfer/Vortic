import styled from 'styled-components';
import { Container } from '../../../components/ui/Container';
import { guideCards } from '../data/homeContent';
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle
} from './HomeSection';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.25fr 1fr 1fr;
  }
`;

const GuideCard = styled.article`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.soft};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:first-child {
    background:
      linear-gradient(180deg, rgba(238, 230, 214, 0.82) 0, rgba(238, 230, 214, 0.82) 0.75rem, transparent 0.75rem),
      ${({ theme }) => theme.colors.surface};
  }

  &:nth-child(2) {
    background:
      linear-gradient(180deg, rgba(168, 206, 196, 0.22) 0, rgba(168, 206, 196, 0.22) 0.75rem, transparent 0.75rem),
      ${({ theme }) => theme.colors.surface};
  }

  &:nth-child(3) {
    background:
      linear-gradient(180deg, rgba(230, 183, 159, 0.2) 0, rgba(230, 183, 159, 0.2) 0.75rem, transparent 0.75rem),
      ${({ theme }) => theme.colors.surface};
  }
`;

const GuideImageWrap = styled.div`
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const GuideImage = styled.img`
  width: 100%;
  aspect-ratio: 1.05 / 0.88;
  object-fit: cover;
`;

const GuideBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
`;

const SportTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(168, 206, 196, 0.26);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MetaText = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  font-weight: 500;
`;

const GuideTitle = styled.h3`
  font-size: 1.38rem;
  line-height: 1.06;
`;

const GuideDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const GuideAction = styled.a`
  display: inline-flex;
  width: fit-content;
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
`;

export function SportGuidesSection() {
  return (
    <Section id="guias">
      <Container>
        <SectionInner>
          <SectionHeader>
            <Eyebrow>Conteudo por esporte</Eyebrow>
            <SectionTitle>Guias que conectam descoberta, contexto e compra.</SectionTitle>
            <SectionDescription>
              O editorial nao aparece como bloco separado do comercio. Ele ajuda a
              orientar escolha, aprofundar repertorio e sustentar recorrencia.
            </SectionDescription>
          </SectionHeader>
          <Grid>
            {guideCards.map((guide) => (
              <GuideCard key={guide.title}>
                <GuideImageWrap>
                  <GuideImage src={guide.image} alt={guide.title} />
                </GuideImageWrap>
                <GuideBody>
                  <MetaRow>
                    <SportTag>{guide.sport}</SportTag>
                    <MetaText>{guide.meta}</MetaText>
                  </MetaRow>
                  <GuideTitle>{guide.title}</GuideTitle>
                  <GuideDescription>{guide.description}</GuideDescription>
                  <GuideAction href="/#produtos">Ver produtos relacionados</GuideAction>
                </GuideBody>
              </GuideCard>
            ))}
          </Grid>
        </SectionInner>
      </Container>
    </Section>
  );
}
