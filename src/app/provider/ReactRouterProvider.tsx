import type { FC, ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorLayout, Layout } from '@/pages/layout';
import { HomePageRoute } from '@/pages/home';
import { PageNotFoundRoute, ServerErrorPageRoute } from '@/pages/errors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [HomePageRoute],
  },
  {
    path: '/error',
    element: <ErrorLayout />,
    children: [PageNotFoundRoute, ServerErrorPageRoute],
  },
]);

export const ReactRouterProvider: FC = (): ReactElement => <RouterProvider router={router} />;
