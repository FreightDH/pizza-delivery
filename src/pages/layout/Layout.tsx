import type { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export const Layout: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
