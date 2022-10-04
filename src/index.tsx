import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import 'index.css';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import App from 'components/App';
import configureStore from 'store/store';

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

const store = configureStore();

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>,
);
