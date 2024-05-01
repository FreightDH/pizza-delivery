import type { FC, ReactElement } from 'react';

import { Tabs } from '@/shared/UI/Tabs';
import { Sort } from '@/shared/UI/Sort';

import cl from './Controls.module.scss';

interface ControlsProps {
  tabs: string[];
  sortOptions: string[];
}

export const Controls: FC<ControlsProps> = ({ tabs, sortOptions }): ReactElement => {
  return (
    <section className={cl.controls}>
      <Tabs tabs={tabs} />
      <Sort sortOptions={sortOptions} />
    </section>
  );
};
