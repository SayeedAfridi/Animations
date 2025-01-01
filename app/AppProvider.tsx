import type React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { App } from '@app/App';
import { RootNavigationContainer } from '@navigation/RootNavigationContainer';

export type AppProviderProps = {};

export const AppProvider: React.FC<AppProviderProps> = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <RootNavigationContainer>
          <App />
        </RootNavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
