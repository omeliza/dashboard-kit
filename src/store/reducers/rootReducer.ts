import { combineReducers } from 'redux';

import contactReducer from 'store/reducers/contacts/contactReducer';
import authReducer from 'store/reducers/auth/authReducer';
import modalReducer from 'store/reducers/modal/modalReducer';
import sidebarReducer from 'store/reducers/sidebar/sidebarReducer';
import ticketReducer from 'store/reducers/tickets/ticketReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  tickets: ticketReducer,
  sidebar: sidebarReducer,
  modal: modalReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
