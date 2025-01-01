import type React from 'react';

import { Box, SafeBox } from '@components/box';
import { AppImage } from '@components/image';
import { AppText } from '@components/text';
import type { RootNavigationProps } from '@navigation/types';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

export interface StartupFeaturesProps extends RootNavigationProps<'Startup'> {}

export const StartupFeatures: React.FC<StartupFeaturesProps> = ({
  navigation,
}) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    new Promise(res => {
      setTimeout(res, 500);
    }).then(() => {
      navigation.navigate('Home');
    });
  }, []);

  return (
    <Box flex={1} bg='gy100'>
      <SafeBox flex={1} justifyContent='center' alignItems='center'>
        <AppImage
          source={require('@assets/logo/animations.png')}
          style={{
            height: 128,
            width: 128,
          }}
        />
        <AppText variant='title-reg' my='s4'>
          Loading...
        </AppText>
        <ActivityIndicator size='large' />
      </SafeBox>
    </Box>
  );
};
