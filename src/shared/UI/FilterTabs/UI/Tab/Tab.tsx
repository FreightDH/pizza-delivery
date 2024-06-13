import type { FC, ReactElement } from 'react';

import { cn, useAppDispatch } from '@/shared/lib';
import { handleFilter } from '@/entities/dishes';
import { useControls } from '@/shared/lib/contexts/ControlsContext';

import cl from './Tab.module.scss';

interface TabProps {
  tab: string;
}

export const Tab: FC<TabProps> = ({ tab }): ReactElement => {
  const dispatch = useAppDispatch();
  const { activeTab, setActiveTab } = useControls();

  const handleClick = (tab: string) => {
    if (tab === activeTab) return;

    setActiveTab(tab);
    dispatch(handleFilter({ query: tab }));
  };

  return (
    <button className={cn(cl.tab, { [cl.active]: activeTab === tab })} onClick={() => handleClick(tab)}>
      {tab}
    </button>
  );
};
