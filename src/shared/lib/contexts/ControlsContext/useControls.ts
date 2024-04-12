import { useContext } from 'react';
import { ControlsContext } from './ControlsContext';

export const useControls = () => useContext(ControlsContext);
