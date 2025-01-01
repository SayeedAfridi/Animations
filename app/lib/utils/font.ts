import { Dimensions, Platform, StatusBar } from 'react-native';

import { FONT_FAMILY } from '@constants/font';

import { FontWeight } from '@enums/font';

// take font size as percent
export const fp = (percent: number): number => {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : StatusBar.currentHeight!;

  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset! : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

// take font size as number constant
export const fv = (fontSize: number, standardScreenHeight = 680): number => {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : StatusBar.currentHeight!;
  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset! : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export const getFontFamily = (
  variant: FontWeight = FontWeight.Regular,
  italic = false,
) => {
  if (italic && variant !== FontWeight.Italic) {
    return `${FONT_FAMILY}-${variant}Italic`;
  }
  return `${FONT_FAMILY}-${variant}`;
};
