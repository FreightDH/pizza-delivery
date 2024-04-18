import type { FC, ReactElement } from 'react';

import { Controls } from '@/widgets/Controls';

import cl from './HomePage.module.scss';

const tabs = ['Все', 'Мясные', 'Вегетарианские', 'Острые'];
const sortOptions = ['популярности', 'цене', 'алфавиту'];

export const HomePage: FC = (): ReactElement => {
  return (
    <main className={cl.page}>
      <div className="page__container">
        <Controls sortOptions={sortOptions} tabs={tabs} />
      </div>
    </main>
  );
};
