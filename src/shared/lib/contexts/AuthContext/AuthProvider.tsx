import { useEffect, useMemo, useState, type FC, type ReactElement, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }): ReactElement => {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState<User | null>({
    firstName: '',
    lastName: '',
    birthdayDate: '',
    phone: '',
    email: '',
  });

  const signIn = (phone: string) => {
    setUser({ phone, firstName: '', lastName: '', birthdayDate: '', email: '' });
    setAuth(true);
    localStorage.setItem('isAuth', 'true');
  };

  const signOut = () => {
    setUser(null);
    setAuth(false);
    localStorage.removeItem('isAuth');
  };

  useEffect(() => {
    setAuth(!!localStorage.getItem('isAuth'));
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuth,
      setAuth,
      signIn,
      signOut,
    }),
    [isAuth, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
