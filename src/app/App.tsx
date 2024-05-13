import type { ReactElement } from 'react';

import { PopupProvider } from '@/shared/lib/contexts/PopupContext';
import { ControlsProvider } from '@/shared/lib/contexts/ControlsContext';
import { DishesProvider } from '@/shared/lib/contexts/DishesContext';

import { ReactRouterProvider } from './provider';

export const App = (): ReactElement => (
  <PopupProvider>
    <ControlsProvider>
      <DishesProvider>
        <ReactRouterProvider />
      </DishesProvider>
    </ControlsProvider>
  </PopupProvider>
);
