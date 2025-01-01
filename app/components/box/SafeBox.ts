import { createBox } from '@shopify/restyle';
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context';

import type { Theme } from '@theme/theme';

export const SafeBox = createBox<Theme, SafeAreaViewProps>(SafeAreaView);
