import {
  AddContactAC,
  DeleteContactAC,
  SetCurrentContactAC,
  SetCurrentContactIdAC,
  SetOrderAC,
  SetSearchNameAC,
  UpdateContactAC,
} from 'store/actions/contacts/types';

export const addContact: AddContactAC = (newContact) => {
  return {
    type: 'ADD_CONTACT',
    newContact,
  };
};

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
