import type { FC, ReactElement } from 'react';

import { Popup } from '../Popup';

import cl from './ReferenceCard.module.scss';

export const ReferenceCard: FC = (): ReactElement => {
  return (
    <Popup>
      <div className={cl.card}>
        <h3 className={cl.card__title}>Для оформления заказа необходимо:</h3>
        <div className={cl.card__body}>
          <p className={cl.card__text}>1. Ознакомиться с ассортиментом блюд или выбрать что-то знакомое.</p>
          <p className={cl.card__text}>
            2. Выбрать необходимые параметры пиццы и добавить ее в корзину с помощью функции быстрого
            добавления или из карточки блюда.
          </p>
          <p className={cl.card__text}>
            3. Перейти в корзину, нажав на кнопку в правом верхнем углу, и проверить состав заказа и итоговую
            сумму. После проверки нажать на кнопку “Оформить заказ”.
          </p>
          <p className={cl.card__text}>
            4. На странице оформления заказа заполнить свои личные данные (обязательными являются все поля,
            кроме комментария), выбрать удобный способ оплаты и оплатить заказ (если выбран способ оплаты на
            сайте).
          </p>
          <p className={cl.card__text}>
            5. Дождаться курьера, оплатить заказ (если выбраны пункты “наличными курьеру” или “картой
            курьеру”) и насладиться вкуснейшей пиццей.{' '}
          </p>
        </div>
        <h3 className={cl.card__title}>Приятного аппетита!</h3>
      </div>
    </Popup>
  );
};
