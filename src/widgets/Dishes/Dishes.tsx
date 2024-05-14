import type { FC, ReactElement } from 'react';

import { useBreakpoint } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';
import { useDishes } from '@/shared/lib/contexts/DishesContext';
import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { DishCard } from '@/shared/UI/DishCard';

import { Pizza } from './UI/Pizza';
import { PizzaMobile } from './UI/PizzaMobile';

import cl from './Dishes.module.scss';

export const Dishes: FC = (): ReactElement => {
  const { activeTab } = useControls();
  const { filteredAndSortedDishes } = useDishes();
  const { isDishCardOpen } = usePopup();
  const breakpoint = useBreakpoint();

  return (
    <section className={cl.dishes}>
      <div className={cl.dishes__body}>
        <h2 className={cl.dishes__title}>{activeTab} пиццы</h2>
        <div className={cl.dishes__list}>
          {filteredAndSortedDishes.map((dish) => {
            if (breakpoint !== 'xs') return <Pizza key={dish.id} pizza={dish} />;

            return <PizzaMobile key={dish.id} pizza={dish} />;
          })}
        </div>
        {isDishCardOpen && <DishCard />}
      </div>
    </section>
  );
};
