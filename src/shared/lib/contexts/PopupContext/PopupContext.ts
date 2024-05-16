import type { Dispatch, RefObject, SetStateAction } from 'react';
import { createContext } from 'react';

interface PopupContextProps {
  popupRef: RefObject<HTMLDivElement> | null;

  isDishCardOpen: boolean;
  dishDetails: Pizza | null;
  openDishCard: (dish: Pizza) => void;

  isAuthCardOpen: boolean;
  setAuthCardOpen: Dispatch<SetStateAction<boolean>>;

  openCard: (setCardOpen: Dispatch<SetStateAction<boolean>>) => void;
  closeCard: () => void;
}

export const PopupContext = createContext<PopupContextProps>({
  popupRef: null,
  isDishCardOpen: false,
  isAuthCardOpen: false,
  setAuthCardOpen: () => {},
  dishDetails: null,
  openDishCard: () => {},
  openCard: () => {},
  closeCard: () => {},
});
