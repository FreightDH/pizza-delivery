import type { FC, ReactElement } from 'react';

import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { Controls } from '@/widgets/Controls';
import { Dishes } from '@/widgets/Dishes';
import { DishCard } from '@/shared/UI/DishCard';
import { CartButton } from '@/shared/UI/CartButton';

import cl from './HomePage.module.scss';
import { useBreakpoint } from '@/shared/lib';

const filterTabs = ['Все', 'Мясные', 'Вегетарианские', 'Острые'];
const sortOptions = ['популярности', 'цене', 'названию'];

export const HomePage: FC = (): ReactElement => {
  const { isDishCardOpen } = usePopup();
  const breakpoint = useBreakpoint();

  return (
    <main className={cl.page}>
      <div className="page__container">
        <div className={cl.page__body}>
          <Controls filterTabs={filterTabs} sortOptions={sortOptions} />
          <Dishes />
          {isDishCardOpen && <DishCard />}
          {breakpoint === 'xs' && <CartButton />}
        </div>
      </div>
    </main>
  );
};
