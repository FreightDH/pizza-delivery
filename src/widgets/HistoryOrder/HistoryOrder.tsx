import type { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/shared/lib';
import { repeatOrder, type Order } from '@/entities/order';
import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { repeatIcon, showIcon } from './assets';
import cl from './HistoryOrder.module.scss';

interface HistoryOrderProps {
  order: Order;
}

export const HistoryOrder: FC<HistoryOrderProps> = ({ order }): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { date, sum, bonusesIncome, bonusesOutcome } = order;
  const { openHistoryOrderCard } = usePopup();

  const handleRepeat = () => {
    dispatch(repeatOrder({ order }));
    navigate('/cart');
  };

  return (
    <div className={cl.order}>
      <div className={cl.item}>
        <div className={cl.item__title}>Дата заказа</div>
        <div className={cl.item__info}>{date}</div>
      </div>
      <div className={cl.item}>
        <div className={cl.item__title}>Сумма заказа</div>
        <div className={cl.item__info}>{sum}</div>
      </div>
      <div className={cl.item}>
        <div className={cl.item__title}>Списано бонусов</div>
        <div className={cl.item__info}>{bonusesOutcome}</div>
      </div>
      <div className={cl.item}>
        <div className={cl.item__title}>Начислено бонусов</div>
        <div className={cl.item__info}>{bonusesIncome}</div>
      </div>
      <div className={cl.order__buttons}>
        <button className={cl.btn} onClick={() => openHistoryOrderCard(order)}>
          <img alt="show-icon" src={showIcon} />
        </button>
        <button className={cl.btn} onClick={handleRepeat}>
          <img alt="repeat-icon" src={repeatIcon} />
        </button>
      </div>
    </div>
  );
};
