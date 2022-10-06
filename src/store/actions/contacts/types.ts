import {
  IContact,
  ICreateContactsError,
  ICreateContactStart,
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

export type CreateContactStartAC = (
  newContact: IContact,
) => ICreateContactStart;
export type CreateContactErrorAC = (error: string) => ICreateContactsError;
