import type { Dispatch } from 'react';
import { createContext } from 'react';

interface ControlsContextProps {
  activeTab: string;
  setActiveTab: Dispatch<React.SetStateAction<string>>;
}

export const ControlsContext = createContext<ControlsContextProps>({
  activeTab: '',
  setActiveTab: () => {},
});
