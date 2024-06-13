import type { FC, ReactElement } from 'react';

import { Tab } from './UI/Tab';

import cl from './FilterTabs.module.scss';

interface FilterTabsProps {
  filterTabs: string[];
}

export const FilterTabs: FC<FilterTabsProps> = ({ filterTabs }): ReactElement => {
  return (
    <div className={cl.tabs}>
      {filterTabs.map((tab) => (
        <Tab key={tab} tab={tab} />
      ))}
    </div>
  );
};
