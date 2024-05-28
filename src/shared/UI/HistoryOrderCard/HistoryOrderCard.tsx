import type { FC, ReactElement } from 'react';

import { Popup } from '../Popup';
import { CustomButton } from '../CustomButton';

import cl from './HistoryOrderCard.module.scss';

interface HistoryOrderCardProps {
  dishes: string[];
  sum: number;
}

export const HistoryOrderCard: FC<HistoryOrderCardProps> = ({ dishes, sum }): ReactElement => {
  return (
    <Popup>
      <div className={cl.card}>
        <h3 className={cl.card__title}>Состав заказа:</h3>
        <ul className={cl.card__list}>
          {dishes.map((dish, index) => (
            <li key={index} className={cl.card__dish}>
              {dish}
            </li>
          ))}
        </ul>
        <div className={cl.card__footer}>
          <p className={cl.card__sum}>Итого: {sum} ₽</p>
          <CustomButton>Повторить заказ</CustomButton>
        </div>
      </div>
    </Popup>
  );
};
