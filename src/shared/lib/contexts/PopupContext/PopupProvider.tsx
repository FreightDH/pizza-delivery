import type { Dispatch, FC, ReactElement, ReactNode, SetStateAction } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

import { useScrollBlock } from '../../hooks/useScrollBlock';
import { useClickOutside } from '../../hooks/useClickOutside';

import type { Order } from '@/entities/order';

import { PopupContext } from './PopupContext';

interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider: FC<PopupProviderProps> = ({ children }): ReactElement => {
  const popupRef = useRef<HTMLDivElement>(null);

  const [isDishCardOpen, setDishCardOpen] = useState(false);
  const [dishDetails, setDishDetails] = useState<Pizza | null>(null);

  const [isAuthCardOpen, setAuthCardOpen] = useState(false);

  const [isHistoryOrderCardOpen, setHistoryOrderCardOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<Order | null>(null);

  const { blockScroll, allowScroll } = useScrollBlock();

  const openDishCard = useCallback(
    (dish: Pizza) => {
      setDishDetails(dish);
      setDishCardOpen(true);
      blockScroll();
    },
    [blockScroll]
  );

  const openHistoryOrderCard = useCallback(
    (order: Order) => {
      setOrderDetails(order);
      setHistoryOrderCardOpen(true);
      blockScroll();
    },
    [blockScroll]
  );

  const openCard = useCallback(
    (setCardOpen: Dispatch<SetStateAction<boolean>>) => {
      setCardOpen(true);
      blockScroll();
    },
    [blockScroll]
  );

  const closeCard = useCallback(() => {
    setDishCardOpen(false);
    setAuthCardOpen(false);
    setHistoryOrderCardOpen(false);

    setDishDetails(null);
    setOrderDetails(null);

    allowScroll();
  }, [allowScroll]);

  useClickOutside(popupRef, [], closeCard);

  const value = useMemo(
    () => ({
      popupRef,
      isDishCardOpen,
      dishDetails,
      openDishCard,
      isAuthCardOpen,
      setAuthCardOpen,
      isHistoryOrderCardOpen,
      orderDetails,
      openHistoryOrderCard,
      openCard,
      closeCard,
    }),
    [
      isDishCardOpen,
      dishDetails,
      openDishCard,
      isAuthCardOpen,
      isHistoryOrderCardOpen,
      orderDetails,
      openHistoryOrderCard,
      openCard,
      closeCard,
    ]
  );

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};
