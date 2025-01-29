import type React from 'react';

import type { RootNavigationProps } from '@navigation/types';

import { AnimatedNumpadFeatures } from '@features/animated-numpad/AnimatedNumpadFeatures';

export interface AnimatedNumpadScreenProps
  extends RootNavigationProps<'AnimatedNumpad'> {}

export const AnimatedNumpadScreen: React.FC<
  AnimatedNumpadScreenProps
> = props => {
  return <AnimatedNumpadFeatures {...props} />;
};
