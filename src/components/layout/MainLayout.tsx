import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';

const Shell = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(180deg, rgba(95, 135, 146, 0.05) 0, rgba(95, 135, 146, 0.05) 18rem, transparent 18rem),
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
