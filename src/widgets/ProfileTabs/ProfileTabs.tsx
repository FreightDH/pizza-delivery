import type { FC, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/shared/lib';

import cl from './ProfileTabs.module.scss';

export const ProfileTabs: FC = (): ReactElement => {
  const { pathname } = useLocation();
  const urlArray = pathname.split('/');
  const currentPage = urlArray[urlArray.length - 1];

  return (
    <div className={cl.tabs}>
      <Link className={cn(cl.tab, { [cl.active]: currentPage === 'bonuses' })} to="bonuses">
        Мои бонусы
      </Link>
      <Link className={cn(cl.tab, { [cl.active]: currentPage === 'info' })} to="info">
        Личные данные
      </Link>
      <Link className={cn(cl.tab, { [cl.active]: currentPage === 'history' })} to="history">
        История заказов
      </Link>
    </div>
  );
};
