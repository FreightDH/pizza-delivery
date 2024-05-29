import type { FC, ReactElement } from 'react';

import { useAppSelector } from '@/shared/lib';

import { EmptyCartPage } from './UI/EmptyCartPage';
import cl from './CartPage.module.scss';

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = (): ReactElement => {
  const order = useAppSelector((state) => state.orderReducer.order);

  if (!order.dishesCount) return <EmptyCartPage />;

  return <div>Корзина товаров</div>;
};
