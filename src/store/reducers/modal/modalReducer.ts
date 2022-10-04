/* eslint-disable @typescript-eslint/naming-convention */
import { Reducer } from 'redux';

import { initialState } from 'store/reducers/modal/initState';
import {
  InitState,
  IToggleContactModal,
  IToggleTicketModal,
} from 'store/reducers/modal/types';

type actions = IToggleTicketModal | IToggleContactModal;

const modalReducer: Reducer<InitState, actions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'TOGGLE-TICKET-MODAL':
      return { ...state, isTicketModalOpen: !state.isTicketModalOpen };
    case 'TOGGLE-CONTACT-MODAL':
      return { ...state, isContactModalOpen: !state.isContactModalOpen };
    default:
      return { ...state };
  }
};

export default modalReducer;
