import type { RootRoutes } from '@navigation/types';
import type { ImageSourcePropType } from 'react-native';

type Menu = {
  title: string;
  route: keyof RootRoutes;
  thumb?: ImageSourcePropType;
};
export const MENUS: Menu[] = [
  {
    title: 'Animated Numpad',
    route: 'AnimatedNumpad',
    thumb: require('@assets/images/animated-numpad.webp'),
  },
];
