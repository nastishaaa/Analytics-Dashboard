import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layout/RootLayout';
import React, { lazy } from 'react';

import './App.css'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const OverviewPage = lazy(() => import('./pages/OverviewPage/OverviewPage'));
const ReportsPage = lazy(() => import('./pages/ReportsPage/ReportsPage'));
const UsersPage = lazy(() => import('./pages/UsersPage/UsersPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> as React.ReactElement },
      { path: '/overview', element: <OverviewPage /> as React.ReactElement },
      { path: '/reports', element: <ReportsPage /> as React.ReactElement },
      { path: '/users', element: <UsersPage /> as React.ReactElement },
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
