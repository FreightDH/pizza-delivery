import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib';
import { useControls } from '@/shared/lib/contexts/ControlsContext';

import { profileIcon } from '../../assets';
import cl from './ProfileLink.module.scss';

export const ProfileLink: FC = (): ReactElement => {
  const { isMenuOpen } = useControls();

  return (
    <Link className={cn(cl.profile, { [cl.menuOpen]: isMenuOpen })} to="/profile">
      <img alt="profile-icon" src={profileIcon} />
      {isMenuOpen && <span>Личный кабинет</span>}
    </Link>
  );
};
