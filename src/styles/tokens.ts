export const tokens = {
  colors: {
    backgroundBase: '#F3F6F8',
    surfaceBase: '#FCFCFA',
    surfaceAlt: '#EEF2F5',
    textBase: '#121417',
    textSecondary: '#5C6670',
    lineStrong: '#121417',
    lineSoft: '#D9DEE3',
    contrastDark: '#232629',
    brandBlue: '#3559C7',
    brandBlueDeep: '#283A8F',
    brandRed: '#E4473A',
    brandYellow: '#F0D21F',
    background: '#F3F6F8',
    backgroundAlt: '#EEF2F5',
    surface: '#FCFCFA',
    surfaceMuted: '#EEF2F5',
    surfaceEditorial: '#EEF2F5',
    surfaceSupport: '#EEF2F5',
    text: '#121417',
    textMuted: '#5C6670',
    primary: '#3559C7',
    primaryDark: '#283A8F',
    secondary: '#F0D21F',
    secondaryDark: '#D6BC1B',
    alert: '#E4473A',
    blueDeep: '#283A8F',
    border: '#D9DEE3',
    borderStrong: '#121417',
    overlay: 'rgba(18, 20, 23, 0.06)',
    overlayStrong: 'rgba(18, 20, 23, 0.14)'
  },
  fonts: {
    display: "'Space Grotesk', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif"
  },
  spacing: {
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem'
  },
  radii: {
    sm: '0px',
    md: '4px',
    lg: '6px',
    xl: '8px',
    xxl: '10px',
    pill: '8px'
  },
  shadows: {
    soft: '0 16px 28px rgba(18, 20, 23, 0.08)'
  },
  breakpoints: {
    md: '48rem',
    lg: '64rem',
    xl: '80rem'
  },
  layout: {
    contentWidth: '72rem'
  }
} as const;
