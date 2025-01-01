import React from 'react';

import type { NavigationContainerRef } from '@react-navigation/native';

import type { RootRoutes } from '@app/lib/navigation/types';

export const rootNavRef = React.createRef<NavigationContainerRef<RootRoutes>>();
