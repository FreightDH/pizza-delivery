import type { FC, ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CartLayout, ErrorLayout, Layout, ProfileLayout } from '@/pages/layout';

import { HomePageRoute } from '@/pages/home';
import { ProfileBonusesRoute, ProfileHistoryRoute, ProfileInfoRoute } from '@/pages/profile';
import { CartPageRoute } from '@/pages/cart';
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
    path: '/cart',
    element: <CartLayout />,
    children: [CartPageRoute],
  },
  {
    path: '/error',
    element: <ErrorLayout />,
    children: [PageNotFoundRoute, ServerErrorPageRoute],
  },
]);

export const ReactRouterProvider: FC = (): ReactElement => <RouterProvider router={router} />;
