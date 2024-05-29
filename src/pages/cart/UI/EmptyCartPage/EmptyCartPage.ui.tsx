import type { FC, ReactElement } from 'react';

import { CustomButton } from '@/shared/UI/CustomButton';

import emptyCartImage from './assets/empty-cart.png';
import cl from './EmptyCartPage.module.scss';

export const EmptyCartPage: FC = (): ReactElement => {
  return (
    <main className={cl.page}>
      <div className="page__container">
        <div className={cl.page__body}>
          <h1 className={cl.page__title}>Здесь ничего нет...</h1>
          <p className={cl.page__text}>
            Вероятней всего, вы ничего не добавили в корзину. Для того, чтобы заказать пиццу, перейдите на
            главную страницу.
          </p>
          <div className={cl.page__image}>
            <img alt="empty-cart-image" src={emptyCartImage} />
          </div>
          <CustomButton black to="/">
            Вернуться на главную
          </CustomButton>
        </div>
      </div>
    </main>
  );
};
