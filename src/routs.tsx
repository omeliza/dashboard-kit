import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Forgot from 'pages/Forgot/Forgot';
import Reset from 'pages/Reset/Reset';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import NotFound from 'pages/NotFound/NotFound';

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
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
