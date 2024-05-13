import type { FC, ReactElement, ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { useScrollBlock } from '../../hooks/useScrollBlock';

import { PopupContext } from './PopupContext';

interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider: FC<PopupProviderProps> = ({ children }): ReactElement => {
  const [dishDetails, setDishDetails] = useState<Pizza | null>(null);
  const [isDishCardOpen, setDishCardOpen] = useState(false);
  const { blockScroll, allowScroll } = useScrollBlock();

  const openDishCard = useCallback(
    (dish: Pizza) => {
      setDishDetails(dish);
      setDishCardOpen(true);
      blockScroll();
    },
    [blockScroll]
  );

  const closeDishCard = useCallback(() => {
    setDishCardOpen(false);
    allowScroll();
  }, [allowScroll]);

  const value = useMemo(
    () => ({
      dishDetails,
      isDishCardOpen,
      openDishCard,
      closeDishCard,
    }),
    [dishDetails, isDishCardOpen, openDishCard, closeDishCard]
  );

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};
