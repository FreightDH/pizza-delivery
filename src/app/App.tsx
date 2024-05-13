import type { ReactElement } from 'react';

import { ControlsProvider } from '@/shared/lib/contexts/ControlsContext';
import { DishesProvider } from '@/shared/lib/contexts/DishesContext';
import { PopupProvider } from '@/shared/lib/contexts/PopupContext';

import { ReactRouterProvider } from './provider';

export const App = (): ReactElement => (
  <ControlsProvider>
    <DishesProvider>
      <PopupProvider>
        <ReactRouterProvider />
      </PopupProvider>
    </DishesProvider>
  </ControlsProvider>
);
