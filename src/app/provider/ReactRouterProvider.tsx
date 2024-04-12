import type { FC, ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/pages/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [],
  },
]);

export const ReactRouterProvider: FC = (): ReactElement => <RouterProvider router={router} />;
