import type { FC, ReactElement } from 'react';

import { repeatIcon, showIcon } from './assets';
import cl from './HistoryOrder.module.scss';

interface HistoryOrderProps {
  order: Order;
}

export const HistoryOrder: FC<HistoryOrderProps> = ({ order }): ReactElement => {
  const { date, sum, bonusesIncome, bonusesOutcome } = order;

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
        <button className={cl.btn}>
          <img alt="show-icon" src={showIcon} />
        </button>
        <button className={cl.btn}>
          <img alt="repeat-icon" src={repeatIcon} />
        </button>
      </div>
    </div>
  );
};
