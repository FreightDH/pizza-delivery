import type { RouteObject } from 'react-router-dom';
import { HomePage } from './HomePage.ui';

export const HomePageRoute: RouteObject = {
  path: '/',
  element: <HomePage />,
};
