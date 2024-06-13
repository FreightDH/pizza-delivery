import type { FC, ReactElement } from 'react';

import { FilterTabs } from '@/shared/UI/FilterTabs';
import { Sort } from '@/shared/UI/Sort';

import cl from './Controls.module.scss';

interface ControlsProps {
  filterTabs: string[];
  sortOptions: string[];
}

export const Controls: FC<ControlsProps> = ({ filterTabs, sortOptions }): ReactElement => {
  return (
    <section className={cl.controls}>
      <FilterTabs filterTabs={filterTabs} />
      <Sort sortOptions={sortOptions} />
    </section>
  );
};
