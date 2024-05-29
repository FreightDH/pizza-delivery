import type { RouteObject } from 'react-router-dom';
import { CartPage } from './CartPage.ui';

export const CartPageRoute: RouteObject = {
  path: '/cart',
  element: <CartPage />,
};
