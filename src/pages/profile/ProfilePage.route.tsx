import type { RouteObject } from 'react-router-dom';

import { ProfileBonuses } from './UI/ProfileBonuses.ui';
import { ProfileInfo } from './UI/ProfileInfo.ui';
import { ProfileHistory } from './UI/ProfileHistory.ui';

export const ProfileBonusesRoute: RouteObject = {
  path: 'bonuses',
  element: <ProfileBonuses />,
};

export const ProfileInfoRoute: RouteObject = {
  path: 'info',
  element: <ProfileInfo />,
};

export const ProfileHistoryRoute: RouteObject = {
  path: 'history',
  element: <ProfileHistory />,
};
