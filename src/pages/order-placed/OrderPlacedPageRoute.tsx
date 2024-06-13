import type { RouteObject } from 'react-router-dom';
import { OrderPlacedPage } from './OrderPlacedPage.ui';

export const OrderPlacedPageRoute: RouteObject = {
  path: 'success',
  element: <OrderPlacedPage />,
};
