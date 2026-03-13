import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useActiveHomeSection } from '../../app/hooks/useActiveHomeSection';
import { useHomeSectionNavigation } from '../../app/hooks/useHomeSectionNavigation';
import {
  ROUTES,
  getCartPath,
  getFavoritesPath,
  getHomePath,
  getSearchPath,
} from '../../app/routes/paths';
import { HOME_SECTION_IDS } from '../../app/routes/sections';
import { useCart } from '../../features/cart/hooks/useCart';
import { useFavorites } from '../../features/favorites/hooks/useFavorites';
import { Container } from '../ui/Container';
import logoSymbolImage from '../../assets/images/logo-symbol.png';
import cartIcon from '../../assets/images/symbols/carrinho.png';
import favoriteIcon from '../../assets/images/symbols/favorite.png';
import searchIcon from '../../assets/images/symbols/lupa.png';
import profileIcon from '../../assets/images/symbols/perfil.png';

const navItems = [
  { label: 'Inicio', sectionId: HOME_SECTION_IDS.home },
  { label: 'Modalidades', sectionId: HOME_SECTION_IDS.categories },
  { label: 'Produtos', sectionId: HOME_SECTION_IDS.products },
  { label: 'Guias', sectionId: HOME_SECTION_IDS.guides },
  { label: 'App Vortic', sectionId: HOME_SECTION_IDS.app },
  { label: 'Comunidade', sectionId: HOME_SECTION_IDS.community },
] as const;

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
  min-height: 74px;
  gap: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: auto 1fr auto;
    gap: ${({ theme }) => theme.spacing[6]};
    min-height: 68px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.85rem;
  padding-right: ${({ theme }) => theme.spacing[3]};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const BrandViewport = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 2rem;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1.85rem;
    height: 2.15rem;
  }
`;

const BrandLogo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transform: scale(1.16);
  transform-origin: center;
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

const NavigationLink = styled(Link)<{ $active?: boolean }>`
  --accent-bg: rgba(53, 89, 199, 0.14);
  --accent-border: ${({ theme }) => theme.colors.primary};

  position: relative;
  flex: 0 0 auto;
  padding: 0.48rem 0.68rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.textMuted)};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 600;
  line-height: 1.1;
  transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease;
  border-color: ${({ $active }) => ($active ? 'var(--accent-border)' : 'transparent')};
  background: ${({ $active }) => ($active ? 'var(--accent-bg)' : 'transparent')};

  &:nth-child(2) {
    --accent-bg: rgba(240, 210, 31, 0.2);
    --accent-border: ${({ theme }) => theme.colors.secondary};
  }

  &:nth-child(3) {
    --accent-bg: rgba(228, 71, 58, 0.14);
    --accent-border: ${({ theme }) => theme.colors.alert};
  }

  &:nth-child(4) {
    --accent-bg: rgba(40, 58, 143, 0.14);
    --accent-border: ${({ theme }) => theme.colors.primaryDark};
  }

  &:nth-child(5) {
    --accent-bg: rgba(240, 210, 31, 0.16);
    --accent-border: ${({ theme }) => theme.colors.secondaryDark};
  }

  &:nth-child(6) {
    --accent-bg: rgba(228, 71, 58, 0.12);
    --accent-border: ${({ theme }) => theme.colors.alert};
  }

  &:hover,
  &:focus-visible,
  &:active {
    color: ${({ theme }) => theme.colors.text};
    border-color: var(--accent-border);
    background: var(--accent-bg);
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ActionLink = styled(Link)<{ $active?: boolean; $tone: 'search' | 'profile' | 'favorite' | 'cart' }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.05rem;
  overflow: hidden;
  border: 1px solid
    ${({ theme, $active, $tone }) => {
      if (!$active) return theme.colors.lineStrong;
      if ($tone === 'favorite') return theme.colors.alert;
      if ($tone === 'cart') return theme.colors.primaryDark;
      if ($tone === 'search') return theme.colors.primary;
      return theme.colors.secondary;
    }};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme, $active, $tone }) => {
    if (!$active) return theme.colors.surface;
    if ($tone === 'favorite') return 'rgba(228, 71, 58, 0.12)';
    if ($tone === 'cart') return 'rgba(40, 58, 143, 0.14)';
    if ($tone === 'search') return 'rgba(53, 89, 199, 0.14)';
    return 'rgba(240, 210, 31, 0.2)';
  }};
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease;

  &:hover,
  &:focus-visible,
  &:active {
    transform: translateY(-1px);
    border-color: ${({ theme, $tone }) => {
      if ($tone === 'favorite') return theme.colors.alert;
      if ($tone === 'cart') return theme.colors.primaryDark;
      if ($tone === 'search') return theme.colors.primary;
      return theme.colors.secondary;
    }};
    background: ${({ $tone }) => {
      if ($tone === 'favorite') return 'rgba(228, 71, 58, 0.12)';
      if ($tone === 'cart') return 'rgba(40, 58, 143, 0.14)';
      if ($tone === 'search') return 'rgba(53, 89, 199, 0.14)';
      return 'rgba(240, 210, 31, 0.2)';
    }};
  }
`;

const ActionIcon = styled.img<{ $kind?: 'search' | 'profile' | 'favorite' | 'cart' }>`
  display: block;
  width: 74%;
  height: 74%;
  object-fit: cover;
  justify-self: center;
  object-position: center;
  opacity: 0.92;
  transform-origin: center;
  transform: ${({ $kind }) => {
    if ($kind === 'profile') return 'translateY(7%) scale(6.05)';
    if ($kind === 'cart') return 'scale(6.1)';
    return 'scale(6.15)';
  }};
`;

export function Header() {
  const { pathname } = useLocation();
  const activeSection = useActiveHomeSection();
  const { getSectionPath } = useHomeSectionNavigation();
  const { count: favoritesCount } = useFavorites();
  const { count: cartCount } = useCart();

  const isHomeRoute = pathname === ROUTES.home;
  const isCatalogContext = pathname === ROUTES.catalog || pathname.startsWith('/produto/');
  const isSearchRoute = pathname === ROUTES.search;
  const isFavoritesRoute = pathname === ROUTES.favorites;
  const isCartRoute = pathname === ROUTES.cart;

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Brand to={getHomePath()} aria-label="Vortic inicio">
          <BrandViewport>
            <BrandLogo src={logoSymbolImage} alt="Vortic" />
          </BrandViewport>
        </Brand>
        <Navigation aria-label="Navegacao principal">
          {navItems.map((item) => {
            const isActive = isHomeRoute
              ? activeSection === item.sectionId
              : item.sectionId === HOME_SECTION_IDS.products
                ? isCatalogContext
                : false;

            return (
              <NavigationLink key={item.sectionId} to={getSectionPath(item.sectionId)} $active={isActive}>
                {item.label}
              </NavigationLink>
            );
          })}
        </Navigation>
        <Actions aria-label="Atalhos de conta e compra">
          <ActionLink $tone="search" $active={isSearchRoute} to={getSearchPath()} aria-label="Buscar por esporte ou produto">
            <ActionIcon $kind="search" src={searchIcon} alt="" />
          </ActionLink>
          <ActionLink $tone="profile" to={getHomePath()} aria-label="Minha conta">
            <ActionIcon $kind="profile" src={profileIcon} alt="" />
          </ActionLink>
          <ActionLink $tone="favorite" $active={isFavoritesRoute || favoritesCount > 0} to={getFavoritesPath()} aria-label="Itens salvos">
            <ActionIcon $kind="favorite" src={favoriteIcon} alt="" />
          </ActionLink>
          <ActionLink $tone="cart" $active={isCartRoute || cartCount > 0} to={getCartPath()} aria-label="Carrinho de compras">
            <ActionIcon $kind="cart" src={cartIcon} alt="" />
          </ActionLink>
        </Actions>
      </HeaderContent>
    </HeaderWrapper>
  );
}
