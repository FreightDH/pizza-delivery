import type { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/shared/lib';
import { repeatOrder } from '@/entities/order';
import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { Popup } from '../Popup';
import { CustomButton } from '../CustomButton';

import cl from './HistoryOrderCard.module.scss';

export const HistoryOrderCard: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { orderDetails } = usePopup();
  const dishes = Object.entries(orderDetails!.dishes);

  const handleClick = () => {
    dispatch(repeatOrder({ order: orderDetails }));
    navigate('/cart');
  };

  return (
    <Popup>
      <div className={cl.card}>
        <h3 className={cl.card__title}>Состав заказа:</h3>
        <ul className={cl.card__list}>
          {dishes.map((dish, index) => (
            <li key={index} className={cl.card__dish}>
              {dish[0]}, {dish[1].count} шт.
            </li>
          ))}
        </ul>
        <div className={cl.card__footer}>
          <p className={cl.card__sum}>Итого: {orderDetails?.sum} ₽</p>
          <CustomButton onClick={handleClick}>Повторить заказ</CustomButton>
        </div>
      </div>
    </Popup>
  );
};
