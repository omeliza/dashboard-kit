import {
  CreateContactErrorAC,
  CreateContactStartAC,
  DeleteContactAC,
  LoadContactsErrorAC,
  LoadContactsSuccessAC,
  SetCurrentContactAC,
  SetCurrentContactIdAC,
  SetOrderAC,
  SetSearchNameAC,
  UpdateContactAC,
} from 'store/actions/contacts/types';
import * as types from 'constants/actionTypes';

export const updateContact: UpdateContactAC = (contact) => {
  return { type: 'UPDATE_CONTACT', contact };
};

export const deleteContact: DeleteContactAC = (id) => {
  return { type: 'DELETE_CONTACT', id };
};

export const setCurrentContactId: SetCurrentContactIdAC = (id) => {
  return { type: 'SET_CURRENT_CONTACT_ID', id };
};

export const setCurrentContact: SetCurrentContactAC = (currentContact) => {
  return { type: 'SET_CURRENT_CONTACT', currentContact };
};

export const setSearchName: SetSearchNameAC = (name) => {
  return { type: 'SET_SEARCH_NAME', name };
};

export const setOrder: SetOrderAC = (order) => {
  return { type: 'SET_ORDER', order };
};

export const loadContactsStart = () => {
  return {
    type: types.LOAD_CONTACTS_START,
  };
};

export const loadContactsSuccess: LoadContactsSuccessAC = (contacts) => {
  return {
    type: types.LOAD_CONTACTS_SUCCESS,
    contacts,
  };
};

export const loadContactsError: LoadContactsErrorAC = (error) => ({
  type: types.LOAD_CONTACTS_ERROR,
  error,
});

export const createContactStart: CreateContactStartAC = (newContact) => {
  return {
    type: types.CREATE_CONTACT_START,
    newContact,
  };
};

export const createContactSuccess = () => {
  return {
    type: types.CREATE_CONTACT_SUCCESS,
  };
};

export const createContactError: CreateContactErrorAC = (error) => ({
  type: types.CREATE_CONTACT_ERROR,
  error,
});
