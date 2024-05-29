import type { FC, ReactElement } from 'react';

import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { Popup } from '../Popup';
import { CustomButton } from '../CustomButton';

import cl from './HistoryOrderCard.module.scss';

export const HistoryOrderCard: FC = (): ReactElement => {
  const { orderDetails } = usePopup();

  return (
    <Popup>
      <div className={cl.card}>
        <h3 className={cl.card__title}>Состав заказа:</h3>
        <ul className={cl.card__list}>
          {orderDetails?.dishes.map(({ name, count }, index) => (
            <li key={index} className={cl.card__dish}>
              {name}, {count} шт.
            </li>
          ))}
        </ul>
        <div className={cl.card__footer}>
          <p className={cl.card__sum}>Итого: {orderDetails?.sum} ₽</p>
          <CustomButton>Повторить заказ</CustomButton>
        </div>
      </div>
    </Popup>
  );
};
