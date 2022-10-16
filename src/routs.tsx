import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Forgot from 'pages/Forgot/Forgot';
import Reset from 'pages/Reset/Reset';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import NotFound from 'pages/NotFound/NotFound';
import Layout from 'containers/Layout/Layout';
import Overview from 'pages/Overview/Overview';
import Tickets from 'pages/Tickets/Tickets';
import Contacts from 'pages/Contacts/Contacts';
import Error from 'pages/Error/Error';
import Issues from 'pages/Issues/Issues';
import Step1 from 'pages/Issues/Step1/Step1';
import Step2 from 'pages/Issues/Step2/Step2';
import Step3 from 'pages/Issues/Step3/Step3';

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
    errorElement: <Error />,
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
      {
        path: 'issues',
        element: <Issues />,
      },
      {
        path: '/step1',
        element: <Step1 />,
      },
      {
        path: '/step2',
        element: <Step2 />,
      },
      {
        path: '/step3',
        element: <Step3 />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
