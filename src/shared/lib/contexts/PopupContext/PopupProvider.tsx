import type { Dispatch, FC, ReactElement, ReactNode, SetStateAction } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

import { useScrollBlock } from '../../hooks/useScrollBlock';
import { useClickOutside } from '../../hooks/useClickOutside';

import { PopupContext } from './PopupContext';

interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider: FC<PopupProviderProps> = ({ children }): ReactElement => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [dishDetails, setDishDetails] = useState<Pizza | null>(null);
  const [isDishCardOpen, setDishCardOpen] = useState(false);
  const [isAuthCardOpen, setAuthCardOpen] = useState(false);
  const [isHistoryOrderCardOpen, setHistoryOrderCardOpen] = useState(false);
  const { blockScroll, allowScroll } = useScrollBlock();

  const openDishCard = useCallback(
    (dish: Pizza) => {
      setDishDetails(dish);
      setDishCardOpen(true);
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

    allowScroll();
  }, [allowScroll]);

  useClickOutside(popupRef, [], closeCard);

  const value = useMemo(
    () => ({
      popupRef,
      dishDetails,
      isDishCardOpen,
      isAuthCardOpen,
      isHistoryOrderCardOpen,
      setAuthCardOpen,
      setHistoryOrderCardOpen,
      openDishCard,
      openCard,
      closeCard,
    }),
    [dishDetails, isDishCardOpen, isAuthCardOpen, isHistoryOrderCardOpen, openDishCard, openCard, closeCard]
  );

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};
