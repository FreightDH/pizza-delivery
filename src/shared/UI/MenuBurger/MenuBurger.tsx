import type { FC, ReactElement } from 'react';

import { cn, useScrollBlock } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';

import { ProfileLink } from './UI/ProfileLink';
import { CartLink } from './UI/CartLink';

import cl from './MenuBurger.module.scss';

interface MenuBurgerProps {
  isErrorPage?: boolean;
}

export const MenuBurger: FC<MenuBurgerProps> = ({ isErrorPage = false }): ReactElement => {
  const { isMenuOpen, setMenuOpen, menuRef, toggleMenuRef } = useControls();
  const { blockScroll, allowScroll } = useScrollBlock();

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      blockScroll();
      setMenuOpen(true);
    } else {
      allowScroll();
      setMenuOpen(false);
    }
  };

  if (isErrorPage) {
    return <></>;
  }

  return (
    <div className={cn(cl.menu, { [cl.menuOpen]: isMenuOpen })}>
      <button ref={toggleMenuRef} className={cl.menu__icon} type="button" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={cn(cl.menu__body, { [cl.menuOpen]: isMenuOpen })}>
        <ul ref={menuRef} className={cl.menu__list}>
          <li className={cl.contacts}>
            <div className={cl.contacts__phone}>
              <a href="tel:88001234567">8-800-123-45-67</a>
            </div>
            <p className={cl.contacts__text}>Звонок по России бесплатный</p>
          </li>
          <li className={cl.links}>
            <ProfileLink />
            <CartLink />
          </li>
        </ul>
      </nav>
    </div>
  );
};
