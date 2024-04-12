import type { FC, ReactElement } from 'react';

import { Tab } from './UI/Tab';

import cl from './Tabs.module.scss';

interface TabsProps {
  tabs: string[];
}

export const Tabs: FC<TabsProps> = ({ tabs }): ReactElement => {
  return (
    <div className={cl.tabs}>
      {tabs.map((tab) => (
        <Tab key={tab} tab={tab} />
      ))}
    </div>
  );
};
