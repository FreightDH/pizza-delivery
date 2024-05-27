import type { FC, ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorLayout, Layout, ProfileLayout } from '@/pages/layout';
import { HomePageRoute } from '@/pages/home';
import { ProfileBonusesRoute, ProfileHistoryRoute, ProfileInfoRoute } from '@/pages/profile';
import { PageNotFoundRoute, ServerErrorPageRoute } from '@/pages/errors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [HomePageRoute],
  },
  {
    path: '/profile',
    element: <ProfileLayout />,
    children: [ProfileBonusesRoute, ProfileInfoRoute, ProfileHistoryRoute],
  },
  {
    path: '/error',
    element: <ErrorLayout />,
    children: [PageNotFoundRoute, ServerErrorPageRoute],
  },
]);

export const ReactRouterProvider: FC = (): ReactElement => <RouterProvider router={router} />;
