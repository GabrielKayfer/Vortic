import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../components/ui/Button';
import { Section } from './HomeSection';

const SectionFrame = styled.div`
  width: min(100% - 2rem, 68rem);
  margin: 0 auto;
`;

const CtaPanel = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0, ${({ theme }) => theme.colors.primary} 0.95rem, transparent 0.95rem),
    ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  }
`;

const Copy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 42rem;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.alert};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 0.94;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.8;
`;

const MetaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2.1rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: rgba(240, 210, 31, 0.16);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 600;
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
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;

  &:hover {
    background: rgba(240, 210, 31, 0.16);
  }
`;

export function FinalCtaSection() {
  return (
    <Section>
      <SectionFrame>
        <CtaPanel>
          <Copy>
            <Label>Chamada final</Label>
            <Title>Uma base pronta para evoluir em marketplace, editorial e servicos.</Title>
            <Description>
              A home ja sai com hierarquia, respiro e secoes pensadas para receber backend, personalizacao, novos produtos e novas narrativas sem perder coerencia.
            </Description>
            <MetaList>
              <MetaItem>Tokens centralizados</MetaItem>
              <MetaItem>Secoes componentizadas</MetaItem>
              <MetaItem>Base pronta para integracao</MetaItem>
            </MetaList>
          </Copy>
          <Actions>
            <Link to="/catalogo">
              <Button as="span">Entrar no catalogo</Button>
            </Link>
            <SecondaryLink to="/#app">Ver conceito do app</SecondaryLink>
          </Actions>
        </CtaPanel>
      </SectionFrame>
    </Section>
  );
}
