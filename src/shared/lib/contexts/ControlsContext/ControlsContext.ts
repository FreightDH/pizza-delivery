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
  toggleRef: RefObject<HTMLSpanElement> | null;
}

export const ControlsContext = createContext<ControlsContextProps>({
  activeTab: '',
  setActiveTab: () => {},
  activeSort: '',
  setActiveSort: () => {},
  isDropdownOpen: false,
  setDropdownOpen: () => {},
  dropdownRef: null,
  toggleRef: null,
});
