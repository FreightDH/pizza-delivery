import { useCallback, useEffect, useMemo, useState, type FC, type ReactElement, type ReactNode } from 'react';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { changeUser, setUserNull } from '@/entities/user/userSlice';

import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }): ReactElement => {
  const dispatch = useAppDispatch();
  const [isAuth, setAuth] = useState(false);

  const signIn = useCallback(
    (phone: string) => {
      dispatch(changeUser({ field: 'phone', value: phone }));
      setAuth(true);
      localStorage.setItem('isAuth', 'true');
    },
    [dispatch]
  );

  const signOut = useCallback(() => {
    dispatch(setUserNull());
    setAuth(false);
    localStorage.removeItem('isAuth');
  }, [dispatch]);

  useEffect(() => {
    setAuth(!!localStorage.getItem('isAuth'));
  }, []);

  const value = useMemo(
    () => ({
      isAuth,
      setAuth,
      signIn,
      signOut,
    }),
    [isAuth, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
