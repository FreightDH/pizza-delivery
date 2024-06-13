import type { Dispatch, RefObject, SetStateAction } from 'react';
import { createContext } from 'react';

interface ControlsContextProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeSort: string;
  setActiveSort: Dispatch<SetStateAction<string>>;

  isDropdownOpen: boolean;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
  dropdownRef: RefObject<HTMLDivElement> | null;
  toggleDropdownRef: RefObject<HTMLSpanElement> | null;

  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuRef: RefObject<HTMLUListElement> | null;
  toggleMenuRef: RefObject<HTMLButtonElement> | null;
}

export const ControlsContext = createContext<ControlsContextProps>({
  activeTab: '',
  setActiveTab: () => {},
  activeSort: '',
  setActiveSort: () => {},
  isDropdownOpen: false,
  setDropdownOpen: () => {},
  dropdownRef: null,
  toggleDropdownRef: null,
  isMenuOpen: false,
  setMenuOpen: () => {},
  menuRef: null,
  toggleMenuRef: null,
});
