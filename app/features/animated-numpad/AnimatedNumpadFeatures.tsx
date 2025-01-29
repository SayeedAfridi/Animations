import type React from 'react';

import { Box, PressBox, SafeBox } from '@components/box';
import { AppText } from '@components/text';
import { AnimatedNumber } from '@features/animated-numpad/components/AnimatedNumber';
import { ButtonGrid } from '@features/animated-numpad/components/ButtonGrid';
import type { RootNavigationProps } from '@navigation/types';
import { useState } from 'react';
import { Alert } from 'react-native';

export interface AnimatedNumpadFeaturesProps
  extends RootNavigationProps<'AnimatedNumpad'> {}

export const AnimatedNumpadFeatures: React.FC<AnimatedNumpadFeaturesProps> = ({
  navigation,
}) => {
  const [number, setNumber] = useState<string>('0');

  return (
    <Box flex={1} bg='black'>
      <SafeBox flex={1}>
        <PressBox
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AppText color='white' variant='body-bold'>
            Back
          </AppText>
        </PressBox>
        <Box flex={1} justifyContent='center' alignItems='center'>
          <AnimatedNumber number={number} />
        </Box>
        <Box flex={1}>
          <ButtonGrid
            onPress={item => {
              if (item === 'backspace') {
                if (number.length === 1) {
                  setNumber('0');
                  return;
                }
                setNumber(prevNumber => prevNumber.slice(0, -1));
              } else {
                setNumber(prevNumber => {
                  if (number.length === 10) {
                    Alert.alert('Maximum number reached');
                    return prevNumber;
                  }
                  if (prevNumber === '0') {
                    return String(item);
                  }
                  return prevNumber + item;
                });
              }
            }}
          />
        </Box>
      </SafeBox>
    </Box>
  );
};
