import type { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

export const Layout: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
