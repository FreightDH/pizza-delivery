import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';
import { useAuth } from '@/shared/lib/contexts/AuthContext';
import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { profileIcon } from '../../assets';
import cl from './ProfileLink.module.scss';

export const ProfileLink: FC = (): ReactElement => {
  const { isMenuOpen, setMenuOpen } = useControls();
  const { isAuth } = useAuth();
  const { openCard, setAuthCardOpen } = usePopup();

  if (!isAuth) {
    return (
      <button
        className={cn(cl.profile, { [cl.menuOpen]: isMenuOpen })}
        onClick={() => {
          setMenuOpen(false);
          openCard(setAuthCardOpen);
        }}
      >
        <img alt="profile-icon" src={profileIcon} />
        {isMenuOpen && <span>Личный кабинет</span>}
      </button>
    );
  }

  return (
    <Link className={cn(cl.profile, { [cl.menuOpen]: isMenuOpen })} to="/profile">
      <img alt="profile-icon" src={profileIcon} />
      {isMenuOpen && <span>Личный кабинет</span>}
    </Link>
  );
};
