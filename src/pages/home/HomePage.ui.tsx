import type { FC, ReactElement } from 'react';

import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { Controls } from '@/widgets/Controls';
import { Dishes } from '@/widgets/Dishes';
import { DishCard } from '@/shared/UI/DishCard';
import { AuthCard } from '@/shared/UI/AuthCard';

import cl from './HomePage.module.scss';

const filterTabs = ['Все', 'Мясные', 'Вегетарианские', 'Острые'];
const sortOptions = ['популярности', 'цене', 'названию'];

export const HomePage: FC = (): ReactElement => {
  const { isDishCardOpen, isAuthCardOpen } = usePopup();

  return (
    <main className={cl.page}>
      <div className="page__container">
        <Controls filterTabs={filterTabs} sortOptions={sortOptions} />
        <Dishes />
        {isDishCardOpen && <DishCard />}
        {isAuthCardOpen && <AuthCard />}
      </div>
    </main>
  );
};
