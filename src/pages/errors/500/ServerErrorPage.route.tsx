import type { RouteObject } from 'react-router-dom';
import { ServerErrorPage } from './ServerErrorPage.ui';

export const ServerErrorPageRoute: RouteObject = {
  path: '500',
  element: <ServerErrorPage />,
};
