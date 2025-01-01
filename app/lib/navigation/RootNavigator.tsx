import type React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { stackOptions } from '@lib/navigation/options';
import type { RootRoutes } from '@lib/navigation/types';
import { HomeScreen } from '@screens/HomeScreen';
import { StartupScreen } from '@screens/StartupScreen';

export type RootNavigatorProps = {};

const { Navigator, Screen } = createNativeStackNavigator<RootRoutes>();

export const RootNavigator: React.FC<RootNavigatorProps> = () => {
  return (
    <Navigator initialRouteName='Startup' screenOptions={stackOptions}>
      <Screen name='Startup' component={StartupScreen} />
      <Screen name='Home' component={HomeScreen} />
    </Navigator>
  );
};
