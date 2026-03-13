import styled from 'styled-components';
import { HOME_SECTION_IDS } from '../../../app/routes/sections';
import { appFeatures } from '../data/homeContent';

const SectionWrap = styled.section`
  background: transparent;
`;

const Band = styled.div`
  width: min(100% - 2rem, 82rem);
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0, ${({ theme }) => theme.colors.primary} 1rem, transparent 1rem),
    ${({ theme }) => theme.colors.contrastDark};
  color: ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[10]};
  }
`;

const Intro = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 38rem;
  padding-left: ${({ theme }) => theme.spacing[4]};
  border-left: 2px solid ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const Title = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 0.92;
`;

const Description = styled.p`
  color: rgba(252, 252, 250, 0.72);
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.75;
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.95fr);
    align-items: start;
  }
`;

const FeatureList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const FeatureCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: start;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid rgba(252, 252, 250, 0.18);
  background: rgba(252, 252, 250, 0.05);
`;

const FeatureIndex = styled.span`
  color: rgba(252, 252, 250, 0.62);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

const FeatureIconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(252, 252, 250, 0.18);
  background: rgba(53, 89, 199, 0.24);
`;

const FeatureIcon = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  object-fit: contain;
`;

const FeatureTitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.05rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: rgba(252, 252, 250, 0.72);
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.7;
`;

const Device = styled.div`
  justify-self: stretch;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid rgba(252, 252, 250, 0.18);
  background: rgba(252, 252, 250, 0.06);
`;

const DeviceChrome = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const DeviceNotch = styled.span`
  width: 4.25rem;
  height: 0.34rem;
  background: rgba(252, 252, 250, 0.28);
`;

const DeviceDot = styled.span`
  width: 0.55rem;
  height: 0.55rem;
  background: ${({ theme }) => theme.colors.alert};
`;

const DeviceTop = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
`;

const SmallLabel = styled.span`
  color: rgba(252, 252, 250, 0.62);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const DeviceMetric = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-left: 3px solid ${({ theme }) => theme.colors.secondary};
  background: rgba(252, 252, 250, 0.08);
`;

const MetricValue = styled.strong`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.3rem;
`;

const DeviceList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const DeviceRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid rgba(252, 252, 250, 0.16);
  color: rgba(252, 252, 250, 0.9);
  font-family: ${({ theme }) => theme.fonts.body};
`;

const DeviceValue = styled.strong`
  font-weight: 600;
`;

export function AppHighlightSection() {
  return (
    <SectionWrap id={HOME_SECTION_IDS.app}>
      <Band>
        <Intro>
          <Eyebrow>App Vortic</Eyebrow>
          <Title>O app acompanha treino, meta e o que pede reposição.</Title>
          <Description>
            Ele funciona como continuação simples da rotina: organiza sessões, resume
            ritmo e lembra quando um item volta a fazer falta.
          </Description>
        </Intro>
        <Grid>
          <FeatureList>
            {appFeatures.map((feature, index) => (
              <FeatureCard key={feature.title}>
                <FeatureIconWrap>
                  <FeatureIcon src={feature.icon} alt="" />
                </FeatureIconWrap>
                <div>
                  <FeatureIndex>{String(index + 1).padStart(2, '0')}</FeatureIndex>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </div>
              </FeatureCard>
            ))}
          </FeatureList>
          <Device>
            <DeviceChrome>
              <DeviceNotch />
              <DeviceDot />
            </DeviceChrome>
            <DeviceTop>
              <SmallLabel>Painel da semana</SmallLabel>
              <h3>Minha semana Vortic</h3>
            </DeviceTop>
            <DeviceMetric>
              <MetricValue>4/5</MetricValue>
              <SmallLabel>sessões previstas concluídas</SmallLabel>
            </DeviceMetric>
            <DeviceList>
              <DeviceRow>
                <span>Corrida de base</span>
                <DeviceValue>42 min</DeviceValue>
              </DeviceRow>
              <DeviceRow>
                <span>Pedal de sábado</span>
                <DeviceValue>Confirmado</DeviceValue>
              </DeviceRow>
              <DeviceRow>
                <span>Kit de piscina</span>
                <DeviceValue>Rever compra</DeviceValue>
              </DeviceRow>
            </DeviceList>
          </Device>
        </Grid>
      </Band>
    </SectionWrap>
  );
}



