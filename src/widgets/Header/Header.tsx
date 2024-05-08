import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { CustomButton } from '@/shared/UI/CustomButton';

import { cartIcon, logo, profileIcon } from './assets';
import cl from './Header.module.scss';

export const Header: FC = (): ReactElement => {
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
          <div className={cl.contacts}>
            <div className={cl.contacts__phone}>
              <a href="tel:88001234567">8-800-123-45-67</a>
            </div>
            <p className={cl.contacts__text}>Звонок по России бесплатный</p>
          </div>
          <div className={cl.links}>
            <Link className={cl.links__profile} to="/profile">
              <img alt="profile-icon" src={profileIcon} />
            </Link>
            <Link to="/cart">
              <CustomButton primary>
                <div className={cl.button__body}>
                  <div>0 ₽</div>
                  <div className={cl.button__divider}></div>
                  <div className={cl.button__count}>
                    <img alt="cart-icon" src={cartIcon} />
                    <span>0</span>
                  </div>
                </div>
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
