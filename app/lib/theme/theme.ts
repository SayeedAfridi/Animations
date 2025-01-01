import { createTheme } from '@shopify/restyle';
import { themeSpacing as spacing } from '@theme/spacing';
import { textVariants } from '@theme/textVariants';
import { materialColors, themePalette as palette } from './palette';

const theme = createTheme({
  colors: {
    ...palette,
    ...materialColors,
  },
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    ...spacing,
    round: 100 / 2,
  },
  textVariants,
});

export type Theme = typeof theme;

export default theme;
