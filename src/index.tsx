import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routs';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
