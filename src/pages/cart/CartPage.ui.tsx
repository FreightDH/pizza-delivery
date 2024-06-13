import type { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { resetOrder } from '@/entities/order';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { CustomButton } from '@/shared/UI/CustomButton';
import { CartDish } from '@/widgets/CartDish';

import { EmptyCartPage } from './UI/EmptyCartPage';

import { arrowIcon, cartIcon, trashIcon } from './assets';
import cl from './CartPage.module.scss';

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = (): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
            <button className={cl.page__clear} onClick={() => dispatch(resetOrder())}>
              <img alt="trash-icon" src={trashIcon} />
              <span>Очистить корзину</span>
            </button>
          </div>
          <div className={cl.page__order}>
            <div className={cl.order__dishes}>
              {orderDishes.map((dish, index) => (
                <CartDish key={index} dishInfo={dish} />
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
            <CustomButton black onClick={() => navigate(-1)}>
              <img alt="arrow-icon" src={arrowIcon} />
              Вернуться назад
            </CustomButton>
            <CustomButton primary to="placement">
              Оформить заказ
            </CustomButton>
          </div>
        </div>
      </div>
    </main>
  );
};
