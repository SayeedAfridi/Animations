import type { Component } from 'react';
import { Dimensions, type EmitterSubscription, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;

let screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent: number | string): number => {
  const elemWidth =
    typeof widthPercent === 'number'
      ? widthPercent
      : Number.parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent: number | string): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : Number.parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const listenOrientationChange = (
  that: Component<any, any>,
): EmitterSubscription => {
  return Dimensions.addEventListener('change', newDimensions => {
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;

    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

const buttonHeight = 52;

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  screenWidth,
  screenHeight,
  buttonHeight,
};
