import type React from 'react';
import { View } from 'react-native';

import type { RootNavigationProps } from '@navigation/types';

export interface StartupFeaturesProps extends RootNavigationProps<'Startup'> {}

export const StartupFeatures: React.FC<StartupFeaturesProps> = () => {
  return <View />;
};
