import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Auth from 'pages/Auth/Auth';
import Forgot from 'pages/Forgot/Forgot';
import Reset from 'pages/Reset/Reset';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/signup',
    element: <Auth />,
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
]);
