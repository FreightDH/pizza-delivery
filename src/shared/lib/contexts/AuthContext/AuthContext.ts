import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

interface AuthContextProps {
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  signIn: (phone: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  setAuth: () => {},
  signIn: () => {},
  signOut: () => {},
});
