import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../components/ui/Button';
import { Container } from '../../../components/ui/Container';
import { Section } from './HomeSection';

const CtaPanel = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.xxl};
  background:
    linear-gradient(90deg, rgba(205, 170, 90, 0.18) 0, rgba(205, 170, 90, 0.18) 1rem, transparent 1rem),
    linear-gradient(180deg, rgba(238, 230, 214, 0.95) 0, rgba(238, 230, 214, 0.95) 1rem, transparent 1rem),
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
  color: ${({ theme }) => theme.colors.primary};
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(251, 252, 252, 0.82);
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
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: rgba(251, 252, 252, 0.76);
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.surfaceEditorial};
  }
`;

export function FinalCtaSection() {
  return (
    <Section>
      <CtaPanel>
        <Copy>
          <Label>Chamada final</Label>
          <Title>Uma base pronta para evoluir em marketplace, editorial e servicos.</Title>
          <Description>
            A home ja sai com hierarquia, respiro e secoes pensadas para receber
            backend, personalizacao, novos produtos e novas narrativas sem perder coerencia.
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
    </Section>
  );
}
