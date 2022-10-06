/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/naming-convention */
import { Reducer } from 'redux';

import { initialState } from 'store/reducers/contacts/initState';
import {
  IContactsState,
  ISetCurrentContact,
  ISetCurrentContactId,
  ISetOrder,
  ISetSearchName,
  IUpdateContact,
  ILoadContactsStart,
  ILoadContactsSuccess,
  ILoadContactsError,
  ICreateContactStart,
  ICreateContactSuccess,
  ICreateContactsError,
  IDeleteContactStart,
  IDeleteContactSuccess,
  IDeleteContactError,
} from 'store/reducers/contacts/types';
import * as types from 'constants/actionTypes';

type actions =
  | IUpdateContact
  | ISetCurrentContactId
  | ISetCurrentContact
  | ISetSearchName
  | ISetOrder
  | ILoadContactsStart
  | ILoadContactsSuccess
  | ILoadContactsError
  | ICreateContactStart
  | ICreateContactSuccess
  | ICreateContactsError
  | IDeleteContactStart
  | IDeleteContactSuccess
  | IDeleteContactError;

const contactReducer: Reducer<IContactsState, actions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case types.UPDATE_CONTACT:
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
                  src: action.contact.src ? action.contact.src : contact.src,
                }
              : user,
          ),
        };
      }
      return { ...state };
    case types.SET_CURRENT_CONTACT_ID:
      return { ...state, currentId: action.id };
    case types.SET_CURRENT_CONTACT:
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
    case types.SET_SEARCH_NAME:
      return { ...state, searchName: action.name };
    case types.SET_ORDER:
      return { ...state, order: action.order };
    case types.LOAD_CONTACTS_START:
    case types.CREATE_CONTACT_START:
    case types.DELETE_CONTACT_START:
      return { ...state, loading: true };
    case types.LOAD_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...action.contacts],
      };
    case types.CREATE_CONTACT_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list.filter((u) => u.id !== action.id)],
      };
    case types.LOAD_CONTACTS_ERROR:
    case types.CREATE_CONTACT_ERROR:
    case types.DELETE_CONTACT_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};

export default contactReducer;
