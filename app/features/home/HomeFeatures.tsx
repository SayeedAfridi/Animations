import type React from 'react';
import { FlatList } from 'react-native';

import { Box, PressBox, SafeBox } from '@components/box';
import { AppImage } from '@components/image';
import { AppText } from '@components/text';
import type { RootNavigationProps } from '@navigation/types';
import { getFontFamily } from '@utils/font';
import { screenWidth } from '@utils/layout';

import { FontWeight } from '@enums/font';
import { MENUS } from '@features/home/menus';

export interface HomeFeaturesProps extends RootNavigationProps<'Home'> {}

export const HomeFeatures: React.FC<HomeFeaturesProps> = ({ navigation }) => {
  return (
    <Box flex={1}>
      <SafeBox flex={1} padding='s4'>
        <AppText mb='s4' textAlign='center' variant='title-reg'>
          Animations
        </AppText>
        <FlatList
          data={MENUS}
          numColumns={2}
          ItemSeparatorComponent={() => <Box height={8} width={8} />}
          keyExtractor={item => item.route}
          renderItem={({ item, index }) => {
            return (
              <PressBox
                onPress={() => {
                  navigation.navigate(item.route);
                }}
                bg='gy300'
                width={screenWidth / 2 - 24}
                borderRadius='s1'
                overflow='hidden'
                mr={index % 2 !== 0 ? 'none' : 's2'}
              >
                <AppImage
                  source={item.thumb}
                  style={{ height: 200, width: '100%', resizeMode: 'cover' }}
                />
                <AppText
                  textAlign='center'
                  variant='body-reg'
                  py='s2'
                  fontFamily={getFontFamily(FontWeight.Bold)}
                >
                  {item.title}
                </AppText>
              </PressBox>
            );
          }}
        />
      </SafeBox>
    </Box>
  );
};
