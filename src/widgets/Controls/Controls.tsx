import type { FC, ReactElement } from 'react';

import { Tabs } from '@/shared/UI/Tabs';

import cl from './Controls.module.scss';

interface ControlsProps {
  tabs: string[];
}

export const Controls: FC<ControlsProps> = ({ tabs }): ReactElement => {
  return (
    <div className={cl.controls}>
      <Tabs tabs={tabs} />
    </div>
  );
};
