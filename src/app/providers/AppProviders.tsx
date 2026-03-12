import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { theme } from '../../styles/theme';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}