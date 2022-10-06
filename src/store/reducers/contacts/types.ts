import * as types from 'constants/actionTypes';

export interface IContact {
  id: number | undefined;
  src: string;
  name: string;
  email: string;
  address: string;
  createdAt: string;
}

export type UpdateContact = Omit<IContact, 'createdAt'>;
export type AddContact = Omit<UpdateContact, 'id'>;

export interface ICurrentContact {
  id: number | undefined;
  src: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

export interface IContactsState {
  list: IContact[];
  currentId: number | undefined;
  currentContact: ICurrentContact;
  searchName: string;
  order: string;
  loading: boolean;
  error: string;
}

export interface IUpdateContact {
  type: 'UPDATE_CONTACT';
  contact: ICurrentContact;
}

export interface ISetCurrentContactId {
  type: 'SET_CURRENT_CONTACT_ID';
  id: number | undefined;
}

export interface ISetCurrentContact {
  type: 'SET_CURRENT_CONTACT';
  currentContact: ICurrentContact;
}

export interface ISetSearchName {
  type: 'SET_SEARCH_NAME';
  name: string;
}

export interface ISetOrder {
  type: 'SET_ORDER';
  order: string;
}

export interface ILoadContactsStart {
  type: 'LOAD_CONTACTS_START';
}

export interface ILoadContactsSuccess {
  type: 'LOAD_CONTACTS_SUCCESS';
  contacts: IContact[];
}

export interface ILoadContactsError {
  type: 'LOAD_CONTACTS_ERROR';
  error: string;
}

export interface ICreateContactStart {
  type: typeof types.CREATE_CONTACT_START;
  newContact: AddContact;
}

export interface ICreateContactSuccess {
  type: 'CREATE_CONTACT_SUCCESS';
}
export interface ICreateContactsError {
  type: 'CREATE_CONTACT_ERROR';
  error: string;
}

export interface IDeleteContactStart {
  type: 'DELETE_CONTACT_START';
  id: number;
}

export interface IDeleteContactSuccess {
  type: 'DELETE_CONTACT_SUCCESS';
  id: number;
}

export interface IDeleteContactError {
  type: typeof types.DELETE_CONTACT_ERROR;
  error: string;
}
