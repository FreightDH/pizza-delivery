import type { FC, ReactElement, ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { DishesContext } from './DishesContext';
import {
  assorti,
  bbq,
  chickenCheese,
  chickenCurry,
  fourCheeses,
  hawaii,
  margarita,
  pepperoni,
} from './assets';

interface DishesProviderProps {
  children: ReactNode;
}

const dishes: Dish[] = [
  {
    id: 1,
    img: pepperoni,
    name: 'Пепперони',
    description: 'пепперони, сыр моцарелла, соус томатный',
    price: [695, 925],
    weight: 450,
    isMeat: true,
  },
  {
    id: 2,
    img: margarita,
    name: 'Маргарита',
    description: 'помидоры, орегано, сыр моцарелла, соус томатный, соус маджорио',
    price: [605, 895],
    weight: 560,
    isVegan: true,
  },
  {
    id: 3,
    img: chickenCurry,
    name: 'Цыпленок карри',
    description:
      'соус карри, халапеньо, куриное филе, ананас, сыр моцарелла, помидоры, соус томатный, лук красный',
    price: [695, 925],
    weight: 560,
    isMeat: true,
    isHot: true,
  },
  {
    id: 4,
    img: hawaii,
    name: 'Гавайская',
    description: 'куриное филе, ананас, болгарский перец, помидоры, сыр моцарелла, соус маджорио',
    price: [695, 925],
    weight: 560,
    isMeat: true,
  },
  {
    id: 5,
    img: chickenCheese,
    name: 'Сырный цыпленок',
    description: 'сыр моцарелла, соус маджорио, куриное филе, сыр дор блю, сыр чеддер',
    price: [725, 965],
    weight: 635,
    isMeat: true,
  },
  {
    id: 6,
    img: bbq,
    name: 'Барбекю с халапеньо',
    description: 'ветчина, бекон, свинина, сыр моцарелла, халапеньо, соус барбекю',
    price: [695, 925],
    weight: 560,
    isMeat: true,
    isHot: true,
  },
  {
    id: 7,
    img: assorti,
    name: 'Ассорти',
    description: 'сервелат, шампиньоны, помидоры, сыр моцарелла, соус томатный, соус маджорио, укроп',
    price: [695, 925],
    weight: 550,
    isMeat: true,
  },
  {
    id: 8,
    img: fourCheeses,
    name: '4 сыра',
    description: 'сыр дор блю, сыр чеддер, сыр моцарелла, сыр пармезан',
    price: [695, 925],
    weight: 450,
    isMeat: true,
  },
];

export const DishesProvider: FC<DishesProviderProps> = ({ children }): ReactElement => {
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(dishes);
  const [filteredAndSortedDishes, setFilteredAndSortedDishes] = useState<Dish[]>(filteredDishes);

  const handleFilter = useCallback((query: string) => {
    switch (query) {
      case 'Мясные':
        setFilteredDishes(dishes.filter((dish) => dish.isMeat === true));
        break;
      case 'Вегетарианские':
        setFilteredDishes(dishes.filter((dish) => dish.isVegan === true));
        break;
      case 'Острые':
        setFilteredDishes(dishes.filter((dish) => dish.isHot === true));
        break;
      default:
        setFilteredDishes(dishes);
        break;
    }
  }, []);

  const handleSort = useCallback(
    (query: string) => {
      switch (query) {
        case 'популярности':
          setFilteredAndSortedDishes(filteredDishes.sort((a, b) => a.id - b.id));
          break;
        case 'цене':
          setFilteredAndSortedDishes(filteredDishes.sort((a, b) => a.price[0] - b.price[0]));
          break;
        case 'названию':
          setFilteredAndSortedDishes(filteredDishes.sort((a, b) => a.name.localeCompare(b.name)));
          break;
        default:
          setFilteredDishes(dishes);
          break;
      }
    },
    [filteredDishes]
  );

  const value = useMemo(
    () => ({ filteredAndSortedDishes, handleFilter, handleSort }),
    [filteredAndSortedDishes, handleFilter, handleSort]
  );

  return <DishesContext.Provider value={value}>{children}</DishesContext.Provider>;
};
