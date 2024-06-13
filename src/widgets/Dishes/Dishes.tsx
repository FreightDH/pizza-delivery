import type { FC, ReactElement } from 'react';

import { useAppSelector, useBreakpoint } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';

import { Pizza } from './UI/Pizza';
import { PizzaMobile } from './UI/PizzaMobile';

import cl from './Dishes.module.scss';

export const Dishes: FC = (): ReactElement => {
  const { activeTab } = useControls();
  const dishes = useAppSelector((state) => state.dishesReducer.dishes);
  const breakpoint = useBreakpoint();

  return (
    <section className={cl.dishes}>
      <div className={cl.dishes__body}>
        <h2 className={cl.dishes__title}>{activeTab} пиццы</h2>
        <div className={cl.dishes__list}>
          {dishes.map((dish) => {
            if (breakpoint !== 'xs') return <Pizza key={dish.id} pizza={dish} />;

            return <PizzaMobile key={dish.id} pizza={dish} />;
          })}
        </div>
      </div>
    </section>
  );
};
