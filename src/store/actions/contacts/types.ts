import {
  AddContact,
  IContact,
  ICreateContactsError,
  ICreateContactStart,
  ICreateContactSuccess,
  ICurrentContact,
  IDeleteContactError,
  IDeleteContactStart,
  IDeleteContactSuccess,
  ILoadContactsError,
  ILoadContactsSuccess,
  ISetCurrentContact,
  ISetCurrentContactId,
  ISetOrder,
  ISetSearchName,
  IUpdateContact,
  IUpdateContactError,
  IUpdateContactStart,
  IUpdateContactSuccess,
} from 'store/reducers/contacts/types';

export type UpdateContactAC = (contact: ICurrentContact) => IUpdateContact;
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
  newContact: AddContact,
) => ICreateContactStart;
export type CreateContactSuccessAC = (
  newContact: AddContact,
) => ICreateContactSuccess;
export type CreateContactErrorAC = (error: string) => ICreateContactsError;

export type DeleteContactStartAC = (id: number) => IDeleteContactStart;
export type DeleteContactSuccessAC = (id: number) => IDeleteContactSuccess;
export type DeleteContactErrorAC = (error: string) => IDeleteContactError;

export type UpdateContactStartAC = (
  updatedContact: ICurrentContact,
) => IUpdateContactStart;
export type UpdateContactSuccessAC = (
  updatedContact: ICurrentContact,
) => IUpdateContactSuccess;
export type UpdateContactErrorAC = (error: string) => IUpdateContactError;
