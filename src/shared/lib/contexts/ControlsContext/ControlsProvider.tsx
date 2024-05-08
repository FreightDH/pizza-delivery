import type { FC, ReactElement, ReactNode } from 'react';
import { useMemo, useRef, useState } from 'react';

import { ControlsContext } from './ControlsContext';

import { useClickOutside } from '../../hooks/useClickOutside';
import { useScrollBlock } from '../../hooks/useScrollBlock';

interface ControlsProviderProps {
  children: ReactNode;
}

export const ControlsProvider: FC<ControlsProviderProps> = ({ children }): ReactElement => {
  const [activeTab, setActiveTab] = useState('Все');
  const [activeSort, setActiveSort] = useState('популярности');

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdownRef = useRef<HTMLSpanElement>(null);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const { scrollBlocked, allowScroll } = useScrollBlock();
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleMenuRef = useRef<HTMLButtonElement>(null);

  useClickOutside(dropdownRef, toggleDropdownRef, () => setDropdownOpen(false));
  useClickOutside(menuRef, toggleMenuRef, () => {
    scrollBlocked.current = true;
    allowScroll();
    setMenuOpen(false);
  });

  const value = useMemo(
    () => ({
      activeTab,
      setActiveTab,
      activeSort,
      setActiveSort,

      isDropdownOpen,
      setDropdownOpen,
      dropdownRef,
      toggleDropdownRef,

      isMenuOpen,
      setMenuOpen,
      menuRef,
      toggleMenuRef,
    }),
    [activeTab, activeSort, isDropdownOpen, isMenuOpen]
  );

  return <ControlsContext.Provider value={value}>{children}</ControlsContext.Provider>;
};
