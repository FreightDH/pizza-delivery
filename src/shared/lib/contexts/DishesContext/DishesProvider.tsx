import type { FC, ReactElement, ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { DishesContext } from './DishesContext';
import { dishes } from './dishesInfo';

interface DishesProviderProps {
  children: ReactNode;
}

export const DishesProvider: FC<DishesProviderProps> = ({ children }): ReactElement => {
  const [filteredAndSortedDishes, setFilteredAndSortedDishes] = useState<Pizza[]>(dishes);

  const handleFilter = useCallback((query: string) => {
    switch (query) {
      case 'Мясные':
        setFilteredAndSortedDishes(dishes.filter((dish) => !dish.isVegan));
        break;
      case 'Вегетарианские':
        setFilteredAndSortedDishes(dishes.filter((dish) => dish.isVegan));
        break;
      case 'Острые':
        setFilteredAndSortedDishes(dishes.filter((dish) => dish.isHot));
        break;
      default:
        setFilteredAndSortedDishes(dishes);
        break;
    }
  }, []);

  const handleSort = useCallback(
    (query: string) => {
      switch (query) {
        case 'популярности':
          setFilteredAndSortedDishes(filteredAndSortedDishes.sort((a, b) => a.id - b.id));
          break;
        case 'цене':
          setFilteredAndSortedDishes(filteredAndSortedDishes.sort((a, b) => a.price[0] - b.price[0]));
          break;
        case 'названию':
          setFilteredAndSortedDishes(filteredAndSortedDishes.sort((a, b) => a.name.localeCompare(b.name)));
          break;
        default:
          setFilteredAndSortedDishes(dishes);
          break;
      }
    },
    [filteredAndSortedDishes]
  );

  const value = useMemo(
    () => ({
      filteredAndSortedDishes,
      handleFilter,
      handleSort,
    }),
    [filteredAndSortedDishes, handleFilter, handleSort]
  );

  return <DishesContext.Provider value={value}>{children}</DishesContext.Provider>;
};
