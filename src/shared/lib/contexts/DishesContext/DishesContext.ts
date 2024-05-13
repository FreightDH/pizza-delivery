import { createContext } from 'react';

interface DishesContextProps {
  filteredAndSortedDishes: Pizza[];
  handleFilter: (query: string) => void;
  handleSort: (query: string) => void;
}

export const DishesContext = createContext<DishesContextProps>({
  filteredAndSortedDishes: [],
  handleFilter: () => {},
  handleSort: () => {},
});
