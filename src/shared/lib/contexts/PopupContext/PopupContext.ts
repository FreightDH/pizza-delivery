import { createContext } from 'react';

interface PopupContextProps {
  isDishCardOpen: boolean;
  dishDetails: Pizza | null;
  openDishCard: (dish: Pizza) => void;
  closeDishCard: () => void;
}

export const PopupContext = createContext<PopupContextProps>({
  isDishCardOpen: false,
  dishDetails: null,
  openDishCard: () => {},
  closeDishCard: () => {},
});
