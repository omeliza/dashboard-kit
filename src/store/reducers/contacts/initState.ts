import { IContactsState } from 'store/reducers/contacts/types';

export const initialState: IContactsState = {
  list: [],
  loading: false,
  error: '',
  currentId: undefined,
  currentContact: {
    id: undefined,
    src: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  },
  searchName: '',
  order: '',
};
