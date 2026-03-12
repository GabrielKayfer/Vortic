import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/ui/Container';

const Wrapper = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[12]};
`;

const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export function NotFoundPage() {
  return (
    <Wrapper>
      <span>404</span>
      <h1>Pagina nao encontrada.</h1>
      <BackLink to="/">Voltar para a home</BackLink>
    </Wrapper>
  );
}