import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { setupStore } from 'redux/store';
import App from 'components/App';

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
        <App />
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>,
);
