import styled from 'styled-components';
import { HOME_SECTION_IDS } from '../../../app/routes/sections';
import { communityCards, heroVisuals } from '../data/homeContent';
import {
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionInner,
  SectionTitle,
} from './HomeSection';

const SectionFrame = styled.div`
  width: min(100% - 2rem, 79rem);
  margin: 0 auto;
`;

const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
    align-items: stretch;
  }
`;

const MainStory = styled.article`
  position: relative;
  overflow: hidden;
  min-height: 34rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StoryOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid rgba(252, 252, 250, 0.28);
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.alert} 0, ${({ theme }) => theme.colors.alert} 0.75rem, rgba(18, 20, 23, 0.82) 0.75rem, rgba(18, 20, 23, 0.82) 100%);
  color: ${({ theme }) => theme.colors.surface};
`;

const StoryMeta = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const StoryText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.7;
`;

const SideCards = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const CommunityCard = styled.article`
  display: grid;
  grid-template-columns: 6rem 1fr;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surface};

  &:first-child {
    background: rgba(240, 210, 31, 0.18);
  }

  &:nth-child(2) {
    background: rgba(53, 89, 199, 0.08);
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.06rem;
  font-weight: 600;
`;

const CardIcon = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: contain;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.7;
`;

const DetailStrip = styled.div`
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const DetailImage = styled.img`
  width: 100%;
  aspect-ratio: 1.8 / 1;
  object-fit: cover;
`;

const DetailBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const DetailLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const DetailText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.6;
`;

export function CommunitySection() {
  return (
    <Section id={HOME_SECTION_IDS.community}>
      <SectionFrame>
        <SectionInner>
          <SectionHeader>
            <Eyebrow>Comunidade</Eyebrow>
            <SectionTitle>Esporte entra na agenda real entre casa, trabalho e encontro.</SectionTitle>
            <SectionDescription>
              A Vortic fala com quem encaixa treino entre trabalho, deslocamento,
              quadra à noite e vontade de continuar em movimento.
            </SectionDescription>
          </SectionHeader>
          <Layout>
            <MainStory>
              <MainImage src={heroVisuals.communityLead} alt="Comunidade esportiva em movimento" />
              <StoryOverlay>
                <StoryMeta>Cidade em movimento</StoryMeta>
                <strong>O esporte encontra espaço quando o dia não vira obstáculo.</strong>
                <StoryText>
                  Corrida cedo, pedal para cruzar a cidade, quadra à noite e a
                  mochila pronta para amanhã. A seleção certa e um guia curto
                  ajudam a trocar de ritmo sem interromper a rotina.
                </StoryText>
              </StoryOverlay>
            </MainStory>
            <SideCards>
              {communityCards.map((card) => (
                <CommunityCard key={card.title}>
                  <CardImage src={card.image} alt={card.title} />
                  <div>
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                      <CardIcon src={card.icon} alt="" />
                    </CardHeader>
                    <CardDescription>{card.description}</CardDescription>
                  </div>
                </CommunityCard>
              ))}
              <DetailStrip>
                <DetailImage src={heroVisuals.communityProduct} alt="Detalhe editorial de produto esportivo" />
                <DetailBody>
                  <DetailLabel>Entre treino e rua</DetailLabel>
                  <DetailText>
                    Bolsa enxuta, troca leve e roupa certa deixam o treino atravessar o restante do dia sem parecer um bloco separado.
                  </DetailText>
                </DetailBody>
              </DetailStrip>
            </SideCards>
          </Layout>
        </SectionInner>
      </SectionFrame>
    </Section>
  );
}


