import styled from 'styled-components';
import { HOME_SECTION_IDS } from '../../../app/routes/sections';
import { guideCards } from '../data/homeContent';
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle,
} from './HomeSection';

const SectionFrame = styled.div`
  width: min(100% - 2rem, 75rem);
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.3fr 1fr 1fr;
  }
`;

const GuideCard = styled.article`
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }

  &:first-child {
    background: rgba(240, 210, 31, 0.18);
  }

  &:nth-child(2) {
    background: rgba(53, 89, 199, 0.08);
  }

  &:nth-child(3) {
    background: rgba(228, 71, 58, 0.08);
  }
`;

const GuideImageWrap = styled.div`
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceAlt};
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
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
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
  font-size: 1.36rem;
  line-height: 1.05;
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
    <Section id={HOME_SECTION_IDS.guides}>
      <SectionFrame>
        <SectionInner>
          <SectionHeader>
            <Eyebrow>Guias Vortic</Eyebrow>
            <SectionTitle>Guias curtos para escolher melhor e tirar dúvida rápido.</SectionTitle>
            <SectionDescription>
              Os guias entram para esclarecer uso, ajuste e prioridade de compra.
              São leituras rápidas para quem quer começar, retomar ou entender o que vale levar primeiro.
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
                  <GuideAction href="/catalogo">Ler guia e ver seleção</GuideAction>
                </GuideBody>
              </GuideCard>
            ))}
          </Grid>
        </SectionInner>
      </SectionFrame>
    </Section>
  );
}



