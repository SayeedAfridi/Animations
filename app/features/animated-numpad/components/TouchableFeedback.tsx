import type React from 'react';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimatedBox } from '@components/box';
import type { BoxProps } from '@shopify/restyle';
import type { Theme } from '@theme/theme';

export interface TouchableFeedbackProps extends BoxProps<Theme> {
  children?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

export const TouchableFeedback: React.FC<TouchableFeedbackProps> = ({
  children,
  onPress,
  disabled,
  ...rest
}) => {
  const isActive = useSharedValue(false);

  const tapGesture = Gesture.Tap()
    .enabled(disabled !== true)
    .onBegin(() => {
      isActive.value = true;
    })
    .onTouchesUp(() => {
      if (onPress) {
        runOnJS(onPress)();
      }
    })
    .onFinalize(() => {
      isActive.value = false;
    });
  const rButtonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isActive.value ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
      ),
      transform: [
        {
          scale: withTiming(isActive.value ? 0.9 : 1),
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={tapGesture}>
      <AnimatedBox style={[rButtonStyle]} {...rest}>
        {children}
      </AnimatedBox>
    </GestureDetector>
  );
};
