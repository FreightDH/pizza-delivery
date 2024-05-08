import type { FC, ReactElement, ReactNode } from 'react';
import { useMemo, useRef, useState } from 'react';
import { ControlsContext } from './ControlsContext';
import { useClickOutside } from '../../hooks/useClickOutside';

interface ControlsProviderProps {
  children: ReactNode;
}

export const ControlsProvider: FC<ControlsProviderProps> = ({ children }): ReactElement => {
  const [activeTab, setActiveTab] = useState('Все');
  const [activeSort, setActiveSort] = useState('популярности');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLSpanElement>(null);

  useClickOutside(dropdownRef, toggleRef, () => setDropdownOpen(false));

  const value = useMemo(
    () => ({
      activeTab,
      setActiveTab,
      activeSort,
      setActiveSort,
      isDropdownOpen,
      setDropdownOpen,
      dropdownRef,
      toggleRef,
    }),
    [activeTab, activeSort, isDropdownOpen]
  );

  return <ControlsContext.Provider value={value}>{children}</ControlsContext.Provider>;
};
