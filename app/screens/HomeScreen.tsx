import type React from 'react';

import { HomeFeatures } from '@features/home/HomeFeatures';
import type { RootNavigationProps } from '@navigation/types';

export interface HomeScreenProps extends RootNavigationProps<'Home'> {}

export const HomeScreen: React.FC<HomeScreenProps> = props => {
  return <HomeFeatures {...props} />;
};
