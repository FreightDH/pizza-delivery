import type { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { AuthProvider } from '@/shared/lib/contexts/AuthContext';
import { PopupProvider } from '@/shared/lib/contexts/PopupContext';
import { ControlsProvider } from '@/shared/lib/contexts/ControlsContext';
import { DishesProvider } from '@/shared/lib/contexts/DishesContext';
import { store } from '@/shared/store';

import { ReactRouterProvider } from './provider';

export const App = (): ReactElement => (
  <Provider store={store}>
    <AuthProvider>
      <PopupProvider>
        <ControlsProvider>
          <DishesProvider>
            <ReactRouterProvider />
          </DishesProvider>
        </ControlsProvider>
      </PopupProvider>
    </AuthProvider>
  </Provider>
);
