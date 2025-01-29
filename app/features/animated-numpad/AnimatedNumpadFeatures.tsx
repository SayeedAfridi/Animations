import type React from 'react';
import { useState } from 'react';
import { Alert } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

import { Box, PressBox, SafeBox } from '@components/box';
import { AnimatedNumber } from '@features/animated-numpad/components/AnimatedNumber';
import { ButtonGrid } from '@features/animated-numpad/components/ButtonGrid';
import type { RootNavigationProps } from '@navigation/types';

export interface AnimatedNumpadFeaturesProps
  extends RootNavigationProps<'AnimatedNumpad'> {}

const Icon: any = Feather;

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
          px='s2'
          my='s2'
        >
          <Icon name='chevron-left' color='white' size={32} />
        </PressBox>
        <Box flex={1} justifyContent='center' alignItems='center'>
          <AnimatedNumber number={number} />
          <LinearGradient
            style={[
              {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '55%',
              },
            ]}
            locations={[0, 0.7]}
            colors={['transparent', '#000']}
          />
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
