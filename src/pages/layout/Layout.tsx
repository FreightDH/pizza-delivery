import type { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { ProfileTabs } from '@/widgets/ProfileTabs';

import cl from './ProfileLayout.module.scss';

export const Layout: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const ProfileLayout: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <main className={cl.page}>
        <div className="page__container">
          <div className={cl.page__body}>
            <h1 className={cl.page__title}>Личный кабинет</h1>
            <ProfileTabs />
            <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export const ErrorLayout: FC = (): ReactElement => {
  return (
    <>
      <Header isErrorPage />
      <Outlet />
    </>
  );
};
