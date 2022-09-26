import { combineReducers, configureStore } from '@reduxjs/toolkit';

import sidebarSlice from 'redux/slices/sidebar/sidebar.slice';
import modalSlice from 'redux/slices/modal/modal.slice';

const rootReducer = combineReducers({
  sidebar: sidebarSlice,
  modal: modalSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
