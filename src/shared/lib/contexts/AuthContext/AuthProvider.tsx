import { useMemo, useState, type FC, type ReactElement, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }): ReactElement => {
  const [isAuth, setAuth] = useState(false);

  const value = useMemo(
    () => ({
      isAuth,
      setAuth,
    }),
    [isAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
