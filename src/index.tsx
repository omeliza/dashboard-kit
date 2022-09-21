import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from 'routs';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import store from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ErrorBoundary>,
);
