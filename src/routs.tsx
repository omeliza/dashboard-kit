import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Forgot from 'pages/Forgot/Forgot';
import Reset from 'pages/Reset/Reset';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import NotFound from 'pages/NotFound/NotFound';
import Layout from 'components/Layout/Layout';
import Overview from 'pages/Overview/Overview';
import Tickets from 'pages/Tickets/Tickets';
import Contacts from 'pages/Contacts/Contacts';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot',
    element: <Forgot />,
  },
  {
    path: '/forgot-success',
    element: <Forgot />,
  },
  {
    path: '/reset',
    element: <Reset />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      {
        path: 'tickets',
        element: <Tickets />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
