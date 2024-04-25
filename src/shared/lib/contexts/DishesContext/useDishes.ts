import { useContext } from 'react';
import { DishesContext } from './DishesContext';

export const useDishes = () => useContext(DishesContext);
