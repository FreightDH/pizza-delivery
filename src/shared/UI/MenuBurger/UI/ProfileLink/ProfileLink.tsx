import type { FC, ReactElement } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { cn, useBreakpoint } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';
import { useAuth } from '@/shared/lib/contexts/AuthContext';
import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { profileIcon, profileLeaveIcon } from '../../assets';
import cl from './ProfileLink.module.scss';

export const ProfileLink: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const urlArray = pathname.split('/');
  const isProfilePage = urlArray.includes('profile');

  const { isMenuOpen, setMenuOpen } = useControls();
  const breakpoint = useBreakpoint();
  const { isAuth, signOut } = useAuth();
  const { openCard, setAuthCardOpen } = usePopup();

  const handleSignOut = () => {
    signOut();
    setMenuOpen(false);
    navigate('/');
  };

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

  if (isMenuOpen && breakpoint === 'xs') {
    return (
      <>
        <Link className={cn(cl.profile, {}, [cl.menuOpen])} to="/profile/bonuses">
          <img alt="profile-icon" src={profileIcon} />
          <span>Личный кабинет</span>
        </Link>
        <button className={cn(cl.profile, {}, [cl.menuOpen, cl.leave])} onClick={handleSignOut}>
          <img alt="profile-leave-icon" src={profileLeaveIcon} />
          <span>Выйти из личного кабинета</span>
        </button>
      </>
    );
  }

  if (isProfilePage) {
    return (
      <button className={cn(cl.profile, {}, [cl.leave])} onClick={handleSignOut}>
        <img alt="profile-leave-icon" src={profileLeaveIcon} />
      </button>
    );
  }

  return (
    <Link className={cn(cl.profile)} to="/profile/bonuses">
      <img alt="profile-icon" src={profileIcon} />
    </Link>
  );
};
