import type { FC, ReactElement } from 'react';

import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { Controls } from '@/widgets/Controls';
import { Dishes } from '@/widgets/Dishes';
import { DishCard } from '@/shared/UI/DishCard';
import { ReferenceCard } from '@/shared/UI/ReferenceCard';
import { ReferenceButton } from '@/shared/UI/ReferenceButton';

import cl from './HomePage.module.scss';

const filterTabs = ['Все', 'Мясные', 'Вегетарианские', 'Острые'];
const sortOptions = ['популярности', 'цене', 'названию'];

export const HomePage: FC = (): ReactElement => {
  const { isDishCardOpen, isReferenceCardOpen } = usePopup();

  return (
    <main className={cl.page}>
      <div className="page__container">
        <div className={cl.page__body}>
          <Controls filterTabs={filterTabs} sortOptions={sortOptions} />
          <Dishes />
          {isDishCardOpen && <DishCard />}
          {isReferenceCardOpen && <ReferenceCard />}
          <ReferenceButton />
        </div>
      </div>
    </main>
  );
};
