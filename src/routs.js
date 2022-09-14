import { createBrowserRouter } from 'react-router-dom';
import { Auth } from './pages/Auth/Auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/signup',
    element: <Auth />,
  },
]);
