import { useAppSelector } from '@/shared/lib';
import { type FC, type ReactElement } from 'react';

import { usePopup } from '@/shared/lib/contexts/PopupContext';
import { HistoryOrder } from '@/widgets/HistoryOrder';
import { HistoryOrderCard } from '@/shared/UI/HistoryOrderCard';

import cl from '../ProfilePage.module.scss';

export const ProfileHistory: FC = (): ReactElement => {
  const user = useAppSelector((state) => state.userReducer.user);
  const { isHistoryOrderCardOpen } = usePopup();

  return (
    <div className={cl.history}>
      {user.ordersHistory.map((order) => (
        <HistoryOrder key={order.id} order={order} />
      ))}
      {isHistoryOrderCardOpen && <HistoryOrderCard />}
    </div>
  );
};
