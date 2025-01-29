import type React from 'react';

import { Box } from '@components/box';
import { AppText } from '@components/text';
import { TouchableFeedback } from '@features/animated-numpad/components/TouchableFeedback';

const buttonItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'backspace'] as const;
type ButtonItem = (typeof buttonItems)[number];
export type ButtonGridProps = {
  onPress?: (item: ButtonItem) => void;
};

export const ButtonGrid: React.FC<ButtonGridProps> = ({ onPress }) => {
  return (
    <Box flexDirection='row' flexWrap='wrap'>
      {buttonItems.map(item => {
        return (
          <Box height='25%' width='33.333%' p='s2' key={item}>
            <TouchableFeedback
              onPress={() => {
                // console.log('ButtonPressed: ', item);
                onPress?.(item);
              }}
              height='100%'
              justifyContent='center'
              alignItems='center'
              disabled={item === null}
              borderRadius='s1'
            >
              {typeof item === 'number' && (
                <AppText color='white' variant='body-reg' fontSize={30}>
                  {item}
                </AppText>
              )}
              {item === 'backspace' && (
                <AppText color='white' variant='body-reg' fontSize={30}>
                  ⌫
                </AppText>
              )}
            </TouchableFeedback>
          </Box>
        );
      })}
    </Box>
  );
};
