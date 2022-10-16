/* eslint-disable prefer-destructuring */
import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { format } from 'date-fns';

import { initialState } from 'redux/slices/contacts/initState';
import type { RootState } from 'redux/store';
import {
  AddContact,
  IContact,
  ICurrentContact,
} from 'redux/slices/contacts/types';

const url = process.env.REACT_APP_JSON_SERVER_URL_CONTACTS as string;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    const { status, data } = await axios.get<IContact[]>(url);
    if (status !== 200) {
      return rejectWithValue('Server Error');
    }
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact: AddContact, { rejectWithValue, getState }) => {
    const {
      contacts: { list },
    } = getState() as RootState;
    const { status, data } = await axios.post<IContact>(url, {
      id: list.length + 1,
      src: contact.src,
      name: contact.name,
      email: contact.email,
      address: contact.address,
      createdAt: format(new Date(), 'LLLL dd, yyyy'),
    });
    if (status !== 201) {
      return rejectWithValue('Error! Cannot add new contact.');
    }
    return data as IContact;
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact: ICurrentContact, { rejectWithValue, getState }) => {
    const {
      contacts: { list },
    } = getState() as RootState;
    const cont = list.find((u) => u.id === contact.id);
    if (cont) {
      const { status, data } = await axios.put(`${url}/${contact.id}`, {
        ...cont,
        src: contact.src || '',
        name: `${contact.firstName} ${contact.lastName}`,
        email: contact.email,
        address: contact.address,
      });
      if (status !== 200) {
        return rejectWithValue('Error! Cannot update contact.');
      }
      return data;
    }
    return rejectWithValue('There is no such contact!');
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: number, { rejectWithValue }) => {
    const { status } = await axios.delete(`${url}/${id}`);
    if (status !== 200) {
      return rejectWithValue('Error! Cannot update contact.');
    }
    return id;
  },
);

export function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setCurrentId: (state, action: PayloadAction<number | undefined>) => {
      state.currentId = action.payload;
    },
    setCurrentContact: (state, action: PayloadAction<ICurrentContact>) => {
      state.currentContact.id = action.payload.id;
      state.currentContact.src = action.payload.src;
      state.currentContact.address = action.payload.address;
      state.currentContact.email = action.payload.email;
      state.currentContact.firstName = action.payload.firstName;
      state.currentContact.lastName = action.payload.lastName;
    },
    setSearchName: (state, action: PayloadAction<string>) => {
      state.searchName = action.payload;
    },
    setOrder: (state, action: PayloadAction<string>) => {
      state.order = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.loading = false;
      })
      .addCase(updateContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const contact = state.list.find((u) => u.id === action.payload.id);
        if (contact) {
          contact.address = action.payload.address;
          contact.email = action.payload.email;
          contact.name = action.payload.name;
          if (action.payload.src) contact.src = action.payload.src;
        }
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
        state.currentContact.id = undefined;
        state.currentContact.address = '';
        state.currentContact.email = '';
        state.currentContact.firstName = '';
        state.currentContact.lastName = '';
        state.currentContact.src = '';
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default contactsSlice.reducer as Reducer<typeof initialState>;

export const { setCurrentId, setCurrentContact, setSearchName, setOrder } =
  contactsSlice.actions;
