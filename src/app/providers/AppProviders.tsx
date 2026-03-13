import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from '../../features/cart/context/CartProvider';
import { FavoritesProvider } from '../../features/favorites/context/FavoritesProvider';
import { useScrollToHashOnRouteChange } from '../hooks/useScrollToHashOnRouteChange';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { theme } from '../../styles/theme';

function NavigationEffects() {
  useScrollToHashOnRouteChange();
  return null;
}

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <FavoritesProvider>
        <CartProvider>
          <GlobalStyles />
          <NavigationEffects />
          {children}
        </CartProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}