import { designTokens } from './tokens';

export const aralabsTheme = {
  colors: {
    ...designTokens.colors.bg,
    ...designTokens.colors.text,
    ...designTokens.colors.brand.purple,
    ...designTokens.colors.brand.gold,
    ...designTokens.colors.border,
    ...designTokens.colors.state,
  },
  gradients: {
    ...designTokens.gradients,
  },
  fonts: {
    sans: designTokens.font.sans,
  },
  typography: {
    ...designTokens.typography,
  },
  spacing: {
    ...designTokens.spacing,
  },
  radius: {
    ...designTokens.radius,
  },
  shadows: {
    ...designTokens.shadows,
  },
  containers: {
    ...designTokens.containers,
  },
  breakpoints: {
    ...designTokens.breakpoints,
  },
};

export type AralabsTheme = typeof aralabsTheme;
