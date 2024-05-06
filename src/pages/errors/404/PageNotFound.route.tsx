import type { RouteObject } from 'react-router-dom';
import { PageNotFound } from './PageNotFound.ui';

export const PageNotFoundRoute: RouteObject = {
  path: '404',
  element: <PageNotFound />,
};
