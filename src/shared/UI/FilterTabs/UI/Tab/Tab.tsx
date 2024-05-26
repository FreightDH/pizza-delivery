import type { FC, ReactElement } from 'react';

import { cn } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';
import { useDishes } from '@/shared/lib/contexts/DishesContext';

import cl from './Tab.module.scss';

interface TabProps {
  tab: string;
}

export const Tab: FC<TabProps> = ({ tab }): ReactElement => {
  const { activeTab, setActiveTab } = useControls();
  const { handleFilter } = useDishes();

  const handleClick = (tab: string) => {
    if (tab === activeTab) return;

    setActiveTab(tab);
    handleFilter(tab);
  };

  return (
    <button className={cn(cl.tab, { [cl.active]: activeTab === tab })} onClick={() => handleClick(tab)}>
      {tab}
    </button>
  );
};
