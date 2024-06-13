import type { FC, ReactElement } from 'react';

import { useAppSelector } from '@/shared/lib';

import cl from './OrderPlacedPage.module.scss';

export const OrderPlacedPage: FC = (): ReactElement => {
  const order = useAppSelector((state) => state.orderReducer.order);

  return (
    <main className={cl.page}>
      <div className={cl.page__container}>
        <div className={cl.page__body}>
          <h1 className={cl.page__title}>Ваш заказ №{order.id} оформлен!</h1>
          <p className={cl.page__text}>Среднее время доставки 60 минут.</p>
          <p className={cl.page__text}>На ваш номер телефона отправлено СМС с номером заказа.</p>
          <p className={cl.page__text}>
            Сумма заказа: <span>{order.sum} руб.</span>
          </p>
          <p className={cl.page__text}>
            На ваш счет начислено <span>{order.bonusesIncome} б.</span>
          </p>
        </div>
      </div>
    </main>
  );
};
