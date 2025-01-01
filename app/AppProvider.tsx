import type React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { App } from '@app/App';
import { RootNavigationContainer } from '@navigation/RootNavigationContainer';
import { ThemeProvider } from '@shopify/restyle';
import theme from '@theme/theme';

export type AppProviderProps = {};

export const AppProvider: React.FC<AppProviderProps> = () => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <RootNavigationContainer>
            <App />
          </RootNavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
