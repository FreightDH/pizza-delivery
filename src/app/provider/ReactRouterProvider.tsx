import type { FC, ReactElement } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorLayout, Layout, ProfileLayout } from '@/pages/layout';

import { HomePageRoute } from '@/pages/home';
import { ProfileBonusesRoute, ProfileHistoryRoute, ProfileInfoRoute } from '@/pages/profile';
import { CartPageRoute } from '@/pages/cart';
import { OrderPlacementPageRoute } from '@/pages/order-placement';
import { OrderPlacedPageRoute } from '@/pages/order-placed';
import { PageNotFoundRoute, ServerErrorPageRoute } from '@/pages/errors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [HomePageRoute],
    errorElement: <Navigate to="/error/404" />,
  },
  {
    path: '/profile',
    element: <ProfileLayout />,
    children: [ProfileBonusesRoute, ProfileInfoRoute, ProfileHistoryRoute],
  },
  {
    path: '/cart',
    element: <Layout />,
    children: [CartPageRoute, OrderPlacementPageRoute, OrderPlacedPageRoute],
  },
  {
    path: '/error',
    element: <ErrorLayout />,
    children: [PageNotFoundRoute, ServerErrorPageRoute],
  },
]);

export const ReactRouterProvider: FC = (): ReactElement => <RouterProvider router={router} />;
