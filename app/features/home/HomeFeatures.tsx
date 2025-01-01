import type React from 'react';

import { Box, PressBox, SafeBox } from '@components/box';
import { AppText } from '@components/text';
import type { RootNavigationProps } from '@navigation/types';
import { useState } from 'react';

export interface HomeFeaturesProps extends RootNavigationProps<'Home'> {}

export const HomeFeatures: React.FC<HomeFeaturesProps> = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <Box flex={1}>
      <SafeBox flex={1}>
        <Box flex={1} justifyContent='center' alignItems='center'>
          <AppText variant='title-reg'>Welcome!</AppText>
          <AppText variant='body-bold' fontSize={48} mt='s6'>
            {counter}
          </AppText>
        </Box>
        <Box mx='s4' flexDirection='row' justifyContent='space-between'>
          <PressBox
            py='s4'
            flex={1}
            bg='gr500'
            justifyContent='center'
            alignItems='center'
            onPress={() => {
              setCounter(prev => 1 + prev);
            }}
          >
            <AppText fontSize={16} textTransform='uppercase'>
              Increase
            </AppText>
          </PressBox>
          <Box width={12} />
          <PressBox
            bg='am500'
            py='s4'
            justifyContent='center'
            alignItems='center'
            flex={1}
            onPress={() => {
              setCounter(prev => prev - 1);
            }}
          >
            <AppText fontSize={16} textTransform='uppercase'>
              Decrease
            </AppText>
          </PressBox>
        </Box>
      </SafeBox>
    </Box>
  );
};
