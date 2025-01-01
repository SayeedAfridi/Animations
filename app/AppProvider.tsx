import { App } from '@app/App';
import type React from 'react';

export type AppProviderProps = {};

export const AppProvider: React.FC<AppProviderProps> = () => {
  return <App />;
};
