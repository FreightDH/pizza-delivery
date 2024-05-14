import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

interface AuthContextProps {
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  setAuth: () => {},
});
