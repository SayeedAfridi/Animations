import type React from 'react';
import { View } from 'react-native';

import type { RootNavigationProps } from '@lib/navigation/types';

export interface HomeFeaturesProps extends RootNavigationProps<'Home'> {}

export const HomeFeatures: React.FC<HomeFeaturesProps> = () => {
  return <View />;
};
