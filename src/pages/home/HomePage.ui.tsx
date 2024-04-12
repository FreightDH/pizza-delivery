import { Controls } from '@/widgets/Controls';
import { type FC, type ReactElement } from 'react';

import cl from './HomePage.module.scss';

const tabs = ['Все', 'Мясные', 'Вегетарианские', 'Острые'];

export const HomePage: FC = (): ReactElement => {
  return (
    <main className={cl.page}>
      <div className="page__container">
        <Controls tabs={tabs} />
      </div>
    </main>
  );
};
