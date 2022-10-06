import {
  CreateContactErrorAC,
  CreateContactStartAC,
  DeleteContactErrorAC,
  DeleteContactStartAC,
  DeleteContactSuccessAC,
  LoadContactsErrorAC,
  LoadContactsSuccessAC,
  SetCurrentContactAC,
  SetCurrentContactIdAC,
  SetOrderAC,
  SetSearchNameAC,
  UpdateContactAC,
  UpdateContactErrorAC,
  UpdateContactStartAC,
} from 'store/actions/contacts/types';
import * as types from 'constants/actionTypes';

export const updateContact: UpdateContactAC = (contact) => {
  return { type: 'UPDATE_CONTACT', contact };
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

export const createContactError: CreateContactErrorAC = (error) => {
  return {
    type: types.CREATE_CONTACT_ERROR,
    error,
  };
};

export const deleteContactStart: DeleteContactStartAC = (id) => {
  return {
    type: types.DELETE_CONTACT_START,
    id,
  };
};

export const deleteContactSuccess: DeleteContactSuccessAC = (id) => {
  return {
    type: types.DELETE_CONTACT_SUCCESS,
    id,
  };
};

export const deleteContactError: DeleteContactErrorAC = (error) => {
  return {
    type: types.DELETE_CONTACT_ERROR,
    error,
  };
};

export const updateContactStart: UpdateContactStartAC = (updatedContact) => {
  return {
    type: types.UPDATE_CONTACT_START,
    updatedContact,
  };
};

export const updateContactSuccess = () => {
  return {
    type: types.UPDATE_CONTACT_SUCCESS,
  };
};

export const updateContactError: UpdateContactErrorAC = (error) => {
  return {
    type: types.UPDATE_CONTACT_ERROR,
    error,
  };
};
