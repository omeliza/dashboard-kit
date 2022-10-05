import {
  AddContact,
  IAddContact,
  IContact,
  ICurrentContact,
  IDeleteContact,
  ILoadContactsError,
  ILoadContactsSuccess,
  ISetCurrentContact,
  ISetCurrentContactId,
  ISetOrder,
  ISetSearchName,
  IUpdateContact,
} from 'store/reducers/contacts/types';

export type AddContactAC = (newContact: AddContact) => IAddContact;
export type UpdateContactAC = (contact: ICurrentContact) => IUpdateContact;
export type DeleteContactAC = (id: number) => IDeleteContact;
export type SetCurrentContactIdAC = (
  id: number | undefined,
) => ISetCurrentContactId;
export type SetCurrentContactAC = (
  currentContact: ICurrentContact,
) => ISetCurrentContact;
export type SetSearchNameAC = (name: string) => ISetSearchName;
export type SetOrderAC = (order: string) => ISetOrder;

export type LoadContactsSuccessAC = (
  contacts: IContact[],
) => ILoadContactsSuccess;
export type LoadContactsErrorAC = (error: string) => ILoadContactsError;
