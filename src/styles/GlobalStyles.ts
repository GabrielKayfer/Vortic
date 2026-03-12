import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap');

  :root {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
  }

  body,
  button,
  input,
  textarea,
  select {
    font-family: ${({ theme }) => theme.fonts.body};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
