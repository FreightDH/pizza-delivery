import { useAppSelector } from '@/shared/lib';
import { type FC, type ReactElement } from 'react';

import { HistoryOrder } from '@/widgets/HistoryOrder';

import cl from '../ProfilePage.module.scss';

export const ProfileHistory: FC = (): ReactElement => {
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <div className={cl.history}>
      {user.ordersHistory.map((order) => (
        <HistoryOrder key={order.id} order={order} />
      ))}
    </div>
  );
};
