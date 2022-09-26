import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { router } from 'routs';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { setupStore } from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Mulish',
      textTransform: 'none',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    },
  },
});

const store = setupStore();

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>,
);
