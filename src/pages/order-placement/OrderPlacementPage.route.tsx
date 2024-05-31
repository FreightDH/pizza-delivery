import type { RouteObject } from 'react-router-dom';
import { OrderPlacementPage } from './OrderPlacementPage.ui';

export const OrderPlacementPageRoute: RouteObject = {
  path: 'placement',
  element: <OrderPlacementPage />,
};
