import type React from 'react';

import { StartupFeatures } from '@features/startup/StartupFeatures';
import type { RootNavigationProps } from '@lib/navigation/types';

export interface StartupScreenProps extends RootNavigationProps<'Startup'> {}

export const StartupScreen: React.FC<StartupScreenProps> = props => {
  return <StartupFeatures {...props} />;
};
