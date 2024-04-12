import type { ReactElement } from 'react';
import { ReactRouterProvider } from './provider';
import { ControlsProvider } from '@/shared/lib/contexts/ControlsContext';

export const App = (): ReactElement => (
  <ControlsProvider>
    <ReactRouterProvider />
  </ControlsProvider>
);
