import { type NavigationProp, useNavigation } from '@react-navigation/native';

import type { RootRoutes } from '@navigation/types';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootRoutes>>();
};
