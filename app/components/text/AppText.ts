import { createText } from '@shopify/restyle';
import Animated from 'react-native-reanimated';

import type { Theme } from '@theme/theme';

const AppText = createText<Theme>();

AppText.defaultProps = {
  variant: 'body-reg',
};

export const AnimatedText = Animated.createAnimatedComponent(AppText);
export { AppText };
