import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface RootNavigationProps<RouteName extends keyof RootRoutes> {
  navigation: NativeStackNavigationProp<RootRoutes, RouteName>;
  route: RouteProp<RootRoutes, RouteName>;
}

export type RootRoutes = {
  Home: undefined;
  Startup: undefined;
};
