import type { ReactElement } from 'react';

import { ControlsProvider } from '@/shared/lib/contexts/ControlsContext';
import { DishesProvider } from '@/shared/lib/contexts/DishesContext';

import { ReactRouterProvider } from './provider';

export const App = (): ReactElement => (
  <ControlsProvider>
    <DishesProvider>
      <ReactRouterProvider />
    </DishesProvider>
  </ControlsProvider>
);
