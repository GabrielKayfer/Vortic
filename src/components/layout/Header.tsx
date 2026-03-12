import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../ui/Container';
import logoImage from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/symbols/carrinho.png';
import favoriteIcon from '../../assets/images/symbols/favorite.png';
import searchIcon from '../../assets/images/symbols/lupa.png';
import profileIcon from '../../assets/images/symbols/perfil.png';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(243, 246, 248, 0.96);
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineStrong};
`;

const HeaderContent = styled(Container)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  min-height: 88px;
  gap: ${({ theme }) => theme.spacing[5]};
  padding-top: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: auto 1fr auto;
    gap: ${({ theme }) => theme.spacing[8]};
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding-right: ${({ theme }) => theme.spacing[4]};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const BrandLogo = styled.img`
  width: auto;
  height: 3.45rem;
  object-fit: contain;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 3.8rem;
  }
`;

const Navigation = styled.nav`
  display: flex;
  grid-column: 1 / -1;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing[2]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: auto;
    justify-content: center;
    padding-bottom: 0;
  }
`;

const NavigationLink = styled.a`
  position: relative;
  flex: 0 0 auto;
  padding: 0.65rem 0.85rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
  transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.lineStrong};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const ActionIcon = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: contain;
  opacity: 0.9;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Brand to="/" aria-label="Vortic home">
          <BrandLogo src={logoImage} alt="Vortic" />
        </Brand>
        <Navigation aria-label="Principal">
          <NavigationLink href="/#inicio">Inicio</NavigationLink>
          <NavigationLink href="/#modalidades">Modalidades</NavigationLink>
          <NavigationLink href="/#produtos">Produtos</NavigationLink>
          <NavigationLink href="/#guias">Guias</NavigationLink>
          <NavigationLink href="/#app">App</NavigationLink>
          <NavigationLink href="/#comunidade">Comunidade</NavigationLink>
        </Navigation>
        <Actions aria-label="Acoes da interface">
          <ActionButton type="button" aria-label="Buscar">
            <ActionIcon src={searchIcon} alt="" />
          </ActionButton>
          <ActionButton type="button" aria-label="Perfil">
            <ActionIcon src={profileIcon} alt="" />
          </ActionButton>
          <ActionButton type="button" aria-label="Favoritos">
            <ActionIcon src={favoriteIcon} alt="" />
          </ActionButton>
          <ActionButton type="button" aria-label="Carrinho">
            <ActionIcon src={cartIcon} alt="" />
          </ActionButton>
        </Actions>
      </HeaderContent>
    </HeaderWrapper>
  );
}
