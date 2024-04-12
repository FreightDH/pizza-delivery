import type { FC, ReactElement } from 'react';

import { cn } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';

import cl from './Tab.module.scss';

interface TabProps {
  tab: string;
}

export const Tab: FC<TabProps> = ({ tab }): ReactElement => {
  const { activeTab, setActiveTab } = useControls();

  return (
    <button className={cn(cl.tab, { [cl.active]: activeTab === tab })} onClick={() => setActiveTab(tab)}>
      {tab}
    </button>
  );
};
