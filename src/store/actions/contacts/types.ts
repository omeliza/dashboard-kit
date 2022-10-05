import {
  AddContact,
  IAddContact,
  ICurrentContact,
  IDeleteContact,
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
