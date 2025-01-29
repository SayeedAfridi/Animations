import type React from 'react';
import { useMemo } from 'react';

import {
  FadeInDown,
  FadeOutDown,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { AnimatedBox } from '@components/box';
import { AnimatedText } from '@components/text/AppText';

export interface AnimatedNumberProps {
  number: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ number }) => {
  const numbers = useMemo(() => {
    return number.split('');
  }, [number]);

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(1.05 - 0.05 * numbers.length) }],
    };
  }, [numbers.length]);
  return (
    <AnimatedBox
      layout={LinearTransition}
      style={rContainerStyle}
      flexDirection='row'
    >
      {numbers.map((num, index) => {
        return (
          <AnimatedText
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={num + index}
            layout={LinearTransition}
            entering={FadeInDown}
            exiting={FadeOutDown}
            color='white'
            fontSize={90}
            variant='body-bold'
            style={{ marginHorizontal: 2 }}
          >
            {num}
          </AnimatedText>
        );
      })}
    </AnimatedBox>
  );
};
