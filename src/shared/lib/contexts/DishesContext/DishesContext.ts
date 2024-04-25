import { createContext } from 'react';

interface DishesContextProps {
  filteredAndSortedDishes: Dish[];
  handleFilter: (query: string) => void;
  handleSort: (query: string) => void;
}

export const DishesContext = createContext<DishesContextProps>({
  filteredAndSortedDishes: [],
  handleFilter: () => {},
  handleSort: () => {},
});
