import { type FC, type ReactElement } from 'react';

import { useAppSelector } from '@/shared/lib';

import cl from '../ProfilePage.module.scss';

export const ProfileBonuses: FC = (): ReactElement => {
  const user = useAppSelector((state) => state.userReducer.user);
  const availableBonuses = 0;

  return (
    <div className={cl.bonuses}>
      <div className={cl.bonuses__item}>
        <h2 className={cl.bonuses__title}>Баланс</h2>
        <h3 className={cl.bonuses__count}>{user.bonuses}</h3>
      </div>
      <div className={cl.bonuses__item}>
        <h2 className={cl.bonuses__title}>Доступно для использования</h2>
        {/* user.bonuses >= Math.floor(cartSum / 2) ? cartSum / 2 : user.bonuses */}
        <h3 className={cl.bonuses__count}>{availableBonuses}</h3>
      </div>
      <p className={cl.bonuses__text}>Бонусами можно оплатить до 50% суммы заказа.</p>
    </div>
  );
};
