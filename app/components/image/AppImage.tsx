import { forwardRef } from 'react';
import {
  Image,
  ImageBackground,
  type ImageBackgroundProps,
  type ImageProps,
} from 'react-native';

export interface AppImageProps extends ImageProps {}

export const AppImage = forwardRef<Image, AppImageProps>((props, ref) => {
  return <Image ref={ref} {...props} />;
});

export interface AppImageBacgroundProps extends ImageBackgroundProps {}

export const AppImageBacground = forwardRef<
  ImageBackground,
  AppImageBacgroundProps
>((props, ref) => {
  return <ImageBackground ref={ref} {...props} />;
});
