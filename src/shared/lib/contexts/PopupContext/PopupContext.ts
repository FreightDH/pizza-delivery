import type { Dispatch, RefObject, SetStateAction } from 'react';
import { createContext } from 'react';

import type { OrderDetails } from '@/entities/order';

interface PopupContextProps {
  popupRef: RefObject<HTMLDivElement> | null;

  isDishCardOpen: boolean;
  dishDetails: Pizza | null;
  openDishCard: (dish: Pizza) => void;

  isAuthCardOpen: boolean;
  setAuthCardOpen: Dispatch<SetStateAction<boolean>>;

  isHistoryOrderCardOpen: boolean;
  orderDetails: OrderDetails | null;
  openHistoryOrderCard: (details: OrderDetails) => void;

  openCard: (setCardOpen: Dispatch<SetStateAction<boolean>>) => void;
  closeCard: () => void;
}

export const PopupContext = createContext<PopupContextProps>({
  popupRef: null,
  isDishCardOpen: false,
  dishDetails: null,
  openDishCard: () => {},
  isAuthCardOpen: false,
  setAuthCardOpen: () => {},
  isHistoryOrderCardOpen: false,
  orderDetails: null,
  openHistoryOrderCard: () => {},
  openCard: () => {},
  closeCard: () => {},
});
