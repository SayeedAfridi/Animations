import { createBox } from '@shopify/restyle';
import { Pressable, type PressableProps } from 'react-native';
import Animated from 'react-native-reanimated';

import type { Theme } from '@theme/theme';

export interface PressBoxProps extends PressableProps {}

export const PressBox = createBox<Theme, PressableProps>(Pressable);

export const AnimatedPressBox = Animated.createAnimatedComponent(PressBox);
