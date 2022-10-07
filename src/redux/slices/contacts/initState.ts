import { IContactsState } from 'redux/slices/contacts/types';

export const initialState: IContactsState = {
  list: [],
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
  loading: false,
  error: null,
};
