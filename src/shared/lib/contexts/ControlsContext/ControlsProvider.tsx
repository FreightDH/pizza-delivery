import type { FC, ReactElement, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { ControlsContext } from './ControlsContext';

interface ControlsProviderProps {
  children: ReactNode;
}

export const ControlsProvider: FC<ControlsProviderProps> = ({ children }): ReactElement => {
  const [activeTab, setActiveTab] = useState('Все');

  const value = useMemo(() => ({ activeTab, setActiveTab }), [activeTab]);

  return <ControlsContext.Provider value={value}>{children}</ControlsContext.Provider>;
};
