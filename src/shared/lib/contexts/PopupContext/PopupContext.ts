import type { RefObject } from 'react';
import { createContext } from 'react';

interface PopupContextProps {
  popupRef: RefObject<HTMLDivElement> | null;
  isDishCardOpen: boolean;
  dishDetails: Pizza | null;
  openDishCard: (dish: Pizza) => void;
  closeDishCard: () => void;
}

export const PopupContext = createContext<PopupContextProps>({
  popupRef: null,
  isDishCardOpen: false,
  dishDetails: null,
  openDishCard: () => {},
  closeDishCard: () => {},
});
