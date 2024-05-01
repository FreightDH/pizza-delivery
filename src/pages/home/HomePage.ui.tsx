import type { FC, ReactElement } from 'react';

import { Controls } from '@/widgets/Controls';

import cl from './HomePage.module.scss';
import { Dishes } from '@/widgets/Dishes';

const tabs = ['Все', 'Мясные', 'Вегетарианские', 'Острые'];
const sortOptions = ['популярности', 'цене', 'названию'];

export const HomePage: FC = (): ReactElement => {
  return (
    <main className={cl.page}>
      <div className="page__container">
        <Controls sortOptions={sortOptions} tabs={tabs} />
        <Dishes />
      </div>
    </main>
  );
};
