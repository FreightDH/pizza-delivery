import type { FC, ReactElement } from 'react';

import { useControls } from '@/shared/lib/contexts/ControlsContext';
import { useDishes } from '@/shared/lib/contexts/DishesContext';

import { Dish } from './UI/Dish';

import cl from './Dishes.module.scss';

interface DishesProps {}

export const Dishes: FC<DishesProps> = (): ReactElement => {
  const { activeTab } = useControls();
  const { filteredAndSortedDishes } = useDishes();

  return (
    <section className={cl.dishes}>
      <div className={cl.dishes__body}>
        <h2 className={cl.dishes__title}>{activeTab} пиццы</h2>
        <div className={cl.dishes__list}>
          {filteredAndSortedDishes.map(({ id, img, name, price, isVegan, isHot }) => (
            <Dish key={id} img={img} isHot={isHot} isVegan={isVegan} name={name} price={price} />
          ))}
        </div>
      </div>
    </section>
  );
};
