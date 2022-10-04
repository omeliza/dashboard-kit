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
}

export interface IAddContact {
  type: 'ADD_CONTACT';
  newContact: AddContact;
}

export interface IUpdateContact {
  type: 'UPDATE_CONTACT';
  contact: ICurrentContact;
}

export interface IDeleteContact {
  type: 'DELETE_CONTACT';
  id: number;
}

export interface ISetCurrentContactId {
  type: 'SET_CURRENT_CONTACT_ID';
  id: number;
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
