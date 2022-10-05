/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/naming-convention */
import { Reducer } from 'redux';
import { format } from 'date-fns';

import { initialState } from 'store/reducers/contacts/initState';
import {
  IAddContact,
  IContactsState,
  IDeleteContact,
  ISetCurrentContact,
  ISetCurrentContactId,
  ISetOrder,
  ISetSearchName,
  IUpdateContact,
} from 'store/reducers/contacts/types';

type actions =
  | IAddContact
  | IUpdateContact
  | IDeleteContact
  | ISetCurrentContactId
  | ISetCurrentContact
  | ISetSearchName
  | ISetOrder;

const contactReducer: Reducer<IContactsState, actions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            src: action.newContact.src,
            name: action.newContact.name,
            email: action.newContact.email,
            address: action.newContact.address,
            createdAt: format(new Date(), 'LLLL dd, yyyy'),
          },
        ],
      };
    case 'UPDATE_CONTACT':
      const contact = state.list.find((u) => u.id === action.contact.id);
      if (contact) {
        return {
          ...state,
          list: state.list.map((user) =>
            user.id === action.contact.id
              ? {
                  ...contact,
                  address: action.contact.address,
                  email: action.contact.email,
                  name: `${action.contact.firstName} ${action.contact.lastName}`,
                  src: action.contact.src.length
                    ? action.contact.src
                    : contact.src,
                }
              : user,
          ),
        };
      }
      return { ...state };
    case 'DELETE_CONTACT':
      const filteredContacts = state.list.filter((u) => u.id !== action.id);
      return { ...state, list: [...filteredContacts] };
    case 'SET_CURRENT_CONTACT_ID':
      return { ...state, currentId: action.id };
    case 'SET_CURRENT_CONTACT':
      return {
        ...state,
        currentContact: {
          id: action.currentContact.id,
          src: action.currentContact.src,
          address: action.currentContact.address,
          email: action.currentContact.email,
          firstName: action.currentContact.firstName,
          lastName: action.currentContact.lastName,
        },
      };
    case 'SET_SEARCH_NAME':
      return { ...state, searchName: action.name };
    case 'SET_ORDER':
      return { ...state, order: action.order };
    default:
      return { ...state };
  }
};

export default contactReducer;
