import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HOME_SECTION_IDS } from '../../../app/routes/sections';
import { sportsCategories, sportsEditorialFeature } from '../data/homeContent';
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle,
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

const CategoryMedia = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
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


const EditorialBand = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
    align-items: stretch;
  }
`;

const EditorialLead = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: linear-gradient(180deg, rgba(53, 89, 199, 0.08) 0%, rgba(240, 210, 31, 0.12) 100%), ${({ theme }) => theme.colors.surface};
`;

const EditorialLeadImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 22rem;
  object-fit: cover;
`;

const EditorialSide = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(180deg, rgba(228, 71, 58, 0.12) 0%, rgba(252, 252, 250, 0) 1.1rem),
    ${({ theme }) => theme.colors.surface};
`;

const EditorialPortraitWrap = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(180deg, rgba(40, 58, 143, 0.12) 0%, rgba(238, 242, 245, 0.9) 100%), ${({ theme }) => theme.colors.backgroundAlt};
`;

const EditorialPortrait = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.08;
  object-fit: cover;
`;

const EditorialCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const EditorialTitle = styled.h3`
  font-size: clamp(1.7rem, 2.6vw, 2.4rem);
  line-height: 0.98;
`;

const EditorialText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const EditorialNote = styled.p`
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.7;
`;

export function SportsCategoriesSection() {
  return (
    <Section id={HOME_SECTION_IDS.categories}>
      <SectionFrame>
        <SectionInner>
          <IntroRow>
            <SectionHeader>
              <Eyebrow>Modalidades</Eyebrow>
              <SectionTitle>Cinco modalidades para começar pelo esporte que já faz parte da sua semana.</SectionTitle>
              <SectionDescription>
                Corrida, ciclismo, futebol, natação e tênis concentram os
                principais universos da Vortic. Basquete, treino e acessórios
                seguem ao redor deles, como complemento de uso, reposição e
                deslocamento.
              </SectionDescription>
            </SectionHeader>
            <IntroCard>
              <Eyebrow>Primeiro recorte</Eyebrow>
              <IntroText>
                Comece pela modalidade que já faz parte da sua semana. A partir
                daí, a seleção fica mais direta: o que vestir, o que levar e o
                que vale comparar primeiro.
              </IntroText>
            </IntroCard>
          </IntroRow>
          <Grid>
            {sportsCategories.map((category) => (
              <CategoryCard key={category.title} to="/catalogo">
                <CategoryMedia>
                  <CategoryImage src={category.image} alt={category.title} />
                </CategoryMedia>
                <CategoryBody>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  <CategoryDescription>{category.description}</CategoryDescription>
                </CategoryBody>

              </CategoryCard>
            ))}
          </Grid>
          <EditorialBand>
            <EditorialLead>
              <EditorialLeadImage src={sportsEditorialFeature.leadImage} alt={sportsEditorialFeature.title} />
            </EditorialLead>
            <EditorialSide>
              <Eyebrow>{sportsEditorialFeature.eyebrow}</Eyebrow>
              <EditorialPortraitWrap>
                <EditorialPortrait src={sportsEditorialFeature.portraitImage} alt={sportsEditorialFeature.title} />
              </EditorialPortraitWrap>
              <EditorialCopy>
                <EditorialTitle>{sportsEditorialFeature.title}</EditorialTitle>
                <EditorialText>{sportsEditorialFeature.description}</EditorialText>
                <EditorialNote>{sportsEditorialFeature.note}</EditorialNote>
              </EditorialCopy>
            </EditorialSide>
          </EditorialBand>
        </SectionInner>
      </SectionFrame>
    </Section>
  );
}







