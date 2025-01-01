import { createBox } from '@shopify/restyle';
import Animated from 'react-native-reanimated';

import type { Theme } from '@theme/theme';

export const Box = createBox<Theme>();

export const AnimatedBox = Animated.createAnimatedComponent(Box);
