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
