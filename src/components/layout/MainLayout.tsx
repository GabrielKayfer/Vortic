import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';

const Shell = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(95, 135, 146, 0.1), transparent 28%),
    radial-gradient(circle at 88% 14%, rgba(205, 170, 90, 0.1), transparent 20%),
    radial-gradient(circle at 72% 60%, rgba(168, 206, 196, 0.08), transparent 18%),
    ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
  padding-bottom: ${({ theme }) => theme.spacing[16]};
`;

export function MainLayout() {
  return (
    <Shell>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Shell>
  );
}
