import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

interface AuthContextProps {
  user: User | null;
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  signIn: (phone: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuth: false,
  setAuth: () => {},
  signIn: () => {},
  signOut: () => {},
});
