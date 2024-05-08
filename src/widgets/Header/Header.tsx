import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { MenuBurger } from '@/shared/UI/MenuBurger';

import { logo } from './assets';
import cl from './Header.module.scss';

interface HeaderProps {
  isErrorPage?: boolean;
}

export const Header: FC<HeaderProps> = ({ isErrorPage = false }): ReactElement => {
  return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.header__body}>
          <Link className={cl.logo} to="/">
            <img alt="logo" src={logo} />
            <div>
              <h1 className={cl.logo__title}>Pizza Delivery</h1>
              <div className={cl.logo__subtitle}>самая вкусная пицца во вселенной</div>
            </div>
          </Link>
          <MenuBurger isErrorPage={isErrorPage} />
        </div>
      </div>
    </header>
  );
};
