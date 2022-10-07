/* eslint-disable prefer-destructuring */
import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { format } from 'date-fns';

import { initialState } from 'redux/slices/contacts/initState';
import {
  AddContact,
  IContact,
  ICurrentContact,
} from 'redux/slices/contacts/types';

const url = process.env.REACT_APP_JSON_SERVER_URL as string;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    const response = await axios.get(url);
    if (response.status !== 200) return rejectWithValue('Server Error');
    return (await response.data) as IContact[];
  },
);

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<AddContact>) => {
      state.list.push({
        id: state.list.length + 2,
        src: action.payload.src,
        name: action.payload.name,
        email: action.payload.email,
        address: action.payload.address,
        createdAt: format(new Date(), 'LLLL dd, yyyy'),
      });
    },
    updateContact: (state, action: PayloadAction<ICurrentContact>) => {
      const contact = state.list.find((u) => u.id === action.payload.id);
      if (contact) {
        contact.address = action.payload.address;
        contact.email = action.payload.email;
        contact.name = `${action.payload.firstName} ${action.payload.lastName}`;
        if (action.payload.src) contact.src = action.payload.src;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
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
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default contactsSlice.reducer;

export const {
  addContact,
  setCurrentId,
  updateContact,
  deleteContact,
  setCurrentContact,
  setSearchName,
  setOrder,
} = contactsSlice.actions;
