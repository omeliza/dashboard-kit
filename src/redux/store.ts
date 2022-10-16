import { combineReducers, configureStore } from '@reduxjs/toolkit';

import sidebarSlice from 'redux/slices/sidebar/sidebar.slice';
import modalSlice from 'redux/slices/modal/modal.slice';
import authSlice from 'redux/slices/auth/auth.slice';
import contactsSlice from 'redux/slices/contacts/contacts.slice';
import ticketsSlice from 'redux/slices/tickets/tickets.slice';
import wizardSlice from 'redux/slices/wizard/wizard.slice';

const rootReducer = combineReducers({
  sidebar: sidebarSlice,
  modal: modalSlice,
  auth: authSlice,
  contacts: contactsSlice,
  tickets: ticketsSlice,
  wizard: wizardSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
