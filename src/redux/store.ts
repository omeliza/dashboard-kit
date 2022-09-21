import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-named-as-default
import sidebarSlice from 'redux/slices/sidebar/sidebar.slice';

const store = configureStore({
  reducer: {
    sidebarSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
