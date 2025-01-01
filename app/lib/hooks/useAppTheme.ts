import { useTheme } from '@shopify/restyle';
import type { Theme } from '@theme/theme';

export const useAppTheme = () => useTheme<Theme>();
