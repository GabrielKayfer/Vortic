import styled from 'styled-components';
import { Container } from '../../../components/ui/Container';
import { appFeatures } from '../data/homeContent';
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
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background:
    linear-gradient(90deg, rgba(200, 224, 230, 0.92) 0, rgba(196, 223, 230, 0.92) 1rem, transparent 1rem),
    linear-gradient(180deg, rgba(222, 250, 242, 0.18) 0, rgba(230, 241, 238, 0.18) 1rem, transparent 1rem),
    ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.92fr);
    align-items: center;
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: rgba(251, 252, 252, 0.86);
`;

const FeatureIndex = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
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
  border: 1px solid rgba(95, 135, 146, 0.24);
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(95, 135, 146, 0.12);
`;

const FeatureIcon = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  object-fit: contain;
`;

const FeatureTitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.06rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.7;
`;

const Device = styled.div`
  justify-self: center;
  width: min(100%, 21rem);
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: rgba(251, 252, 252, 0.96);
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const DeviceChrome = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const DeviceNotch = styled.span`
  width: 4.25rem;
  height: 0.34rem;
  background: ${({ theme }) => theme.colors.borderStrong};
`;

const DeviceDot = styled.span`
  width: 0.55rem;
  height: 0.55rem;
  background: ${({ theme }) => theme.colors.secondary};
`;

const DeviceTop = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
`;

const SmallLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const DeviceMetric = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-left: 3px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.surfaceEditorial};
`;

const MetricValue = styled.strong`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.4rem;
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const DeviceValue = styled.strong`
  font-weight: 600;
`;

export function AppHighlightSection() {
  return (
    <Section id="app">
      <Container>
        <SectionInner>
          <SectionHeader>
            <Eyebrow>Destaque conceitual do app</Eyebrow>
            <SectionTitle>Uma extensao natural da marca, nao um produto isolado.</SectionTitle>
            <SectionDescription>
              O app entra como camada de continuidade: acompanha treino, organiza
              descoberta e prepara a interface para servicos futuros sem roubar a
              narrativa principal da home.
            </SectionDescription>
          </SectionHeader>
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
                <SmallLabel>Preview conceitual</SmallLabel>
                <h3>Minha semana esportiva</h3>
              </DeviceTop>
              <DeviceMetric>
                <MetricValue>04</MetricValue>
                <SmallLabel>blocos ativos entre treino, leitura e compra</SmallLabel>
              </DeviceMetric>
              <DeviceList>
                <DeviceRow>
                  <span>Treino de corrida</span>
                  <DeviceValue>07:00</DeviceValue>
                </DeviceRow>
                <DeviceRow>
                  <span>Guia de recuperacao</span>
                  <DeviceValue>08 min</DeviceValue>
                </DeviceRow>
                <DeviceRow>
                  <span>Reposicao recomendada</span>
                  <DeviceValue>2 itens</DeviceValue>
                </DeviceRow>
              </DeviceList>
            </Device>
          </Grid>
        </SectionInner>
      </Container>
    </Section>
  );
}
