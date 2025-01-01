import type React from 'react';

import {
  NavigationContainer,
  type NavigationContainerProps,
} from '@react-navigation/native';

import { rootNavRef } from '@lib/navigation/navigation';

export interface RootNavigationContainerProps
  extends NavigationContainerProps {}

export const RootNavigationContainer: React.FC<
  RootNavigationContainerProps
> = ({ children, ...rest }) => {
  return (
    <NavigationContainer ref={rootNavRef} {...rest}>
      {children}
    </NavigationContainer>
  );
};
