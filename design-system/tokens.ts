export const designTokens = {
  colors: {
    bg: {
      canvas: '#F7F3EE',
      surface: '#FCFBF8',
      muted: '#F3EDE4',
      strong: '#222633',
      'strong-soft': '#2A3040',
    },
    text: {
      primary: '#181519',
      secondary: '#59535B',
      muted: '#7C757D',
      'on-dark': '#F7F4EF',
      'on-dark-muted': 'rgba(247, 244, 239, 0.72)',
    },
    brand: {
      purple: {
        500: '#7A4CFF',
        400: '#9370FF',
        200: '#DCCEFF',
        100: '#F1EBFF',
      },
      gold: {
        500: '#D7C29A',
        400: '#E6C58A',
        200: '#F3E7D2',
        100: '#FAF3E8',
      },
    },
    border: {
      default: 'rgba(24, 21, 25, 0.08)',
      soft: 'rgba(24, 21, 25, 0.05)',
      'on-dark': 'rgba(255, 255, 255, 0.10)',
      brand: 'rgba(122, 76, 255, 0.28)',
    },
    state: {
      success: '#3FA56D',
      warning: '#C38A2E',
      error: '#C85C5C',
      info: '#6A74D9',
    },
  },
  gradients: {
    heroSoft: 'linear-gradient(135deg, #F7F3EE 0%, #F4ECFF 45%, #F2E7D8 100%)',
    brandSoft: 'linear-gradient(135deg, #F1EBFF 0%, #DCCEFF 100%)',
    darkLux: 'linear-gradient(135deg, #1D202B 0%, #2A3040 55%, #3A3352 100%)',
    glowPurpleGold:
      'radial-gradient(circle, rgba(122, 76, 255, 0.18) 0%, rgba(215, 194, 154, 0.10) 45%, rgba(247, 243, 238, 0) 70%)',
  },
  font: {
    sans: "'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  typography: {
    display: {
      xl: { size: '72px', lineHeight: 0.95, weight: 600 },
      l: { size: '56px', lineHeight: 1.0, weight: 600 },
    },
    heading: {
      xl: { size: '40px', lineHeight: 1.1, weight: 600 },
      l: { size: '32px', lineHeight: 1.15, weight: 600 },
      m: { size: '24px', lineHeight: 1.2, weight: 600 },
    },
    body: {
      l: { size: '20px', lineHeight: 1.7, weight: 400 },
      m: { size: '18px', lineHeight: 1.7, weight: 400 },
      s: { size: '16px', lineHeight: 1.65, weight: 400 },
    },
    label: {
      size: '12px',
      lineHeight: 1.4,
      weight: 600,
      letterSpacing: '0.28em',
      transform: 'uppercase',
    },
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
  },
  radius: {
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    pill: '999px',
  },
  shadows: {
    soft: '0 8px 24px rgba(32, 24, 48, 0.06)',
    medium: '0 18px 40px rgba(32, 24, 48, 0.10)',
    large: '0 30px 80px rgba(32, 24, 48, 0.16)',
    brand: '0 12px 40px rgba(122, 76, 255, 0.18)',
  },
  containers: {
    max: '1280px',
    content: '1200px',
    narrow: '880px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },
} as const;

export type DesignTokens = typeof designTokens;
