import type { FC, ReactElement } from 'react';

import { useAppSelector } from '@/shared/lib';
import { CustomButton } from '@/shared/UI/CustomButton';

import { EmptyCartPage } from './UI/EmptyCartPage';

import { cartIcon, trashIcon } from './assets';
import cl from './CartPage.module.scss';
import { CartDish } from '@/widgets/CartDish';

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = (): ReactElement => {
  const order = useAppSelector((state) => state.orderReducer.order);
  const orderDishes = Object.entries(order.dishes);

  if (!order.dishesCount) return <EmptyCartPage />;

  return (
    <main className={cl.page}>
      <div className={cl.page__container}>
        <div className={cl.page__body}>
          <div className={cl.page__header}>
            <h1 className={cl.page__title}>
              <img alt="cart-icon" src={cartIcon} /> Корзина
            </h1>
            <button className={cl.page__clear}>
              <img alt="trash-icon" src={trashIcon} />
              Очистить корзину
            </button>
          </div>
          <div className={cl.page__order}>
            <div className={cl.order__dishes}>
              {orderDishes.map((dish, index) => (
                <CartDish key={index} dish={dish} />
              ))}
            </div>
            <div className={cl.order__info}>
              <div className={cl.order__count}>
                Всего пицц: <span> {order.dishesCount} шт.</span>
              </div>
              <div className={cl.order__sum}>
                Сумма заказа: <span>{order.sum} ₽</span>
              </div>
            </div>
          </div>
          <div className={cl.page__footer}>
            <CustomButton black>Вернуться назад</CustomButton>
            <CustomButton primary>Оформить заказ</CustomButton>
          </div>
        </div>
      </div>
    </main>
  );
};
