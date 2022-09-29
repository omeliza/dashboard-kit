/* eslint-disable prefer-destructuring */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';

import yasirstein from 'assets/table/chrisevans.png';
import lucasharrington from 'assets/table/cristianbale.png';
import carltonblackmore from 'assets/table/henrycavil.png';
import elenasheldon from 'assets/table/mattdamon.png';
import kimgould from 'assets/table/robertdowney.png';
import danikabass from 'assets/table/samsmith.png';
import shaynatierney from 'assets/table/steverogers.png';
import mandeepwalton from 'assets/table/tomcruise.png';
import {
  AddContact,
  IContactsState,
  ICurrentContact,
} from 'redux/slices/contacts/types';

const initialState: IContactsState = {
  list: [
    {
      id: 1,
      src: mandeepwalton,
      name: 'Mandeep Walton',
      email: 'mandeep.walton@gmail.com',
      address:
        'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate",B98 9PA',
      createdAt: 'May 26, 2019',
    },
    {
      id: 2,
      src: elenasheldon,
      name: 'Elena Sheldon',
      email: 'elena.sheldon@gmail.com',
      address: 'South Lodge, Reddish Lane, Lymm,WA13 9PY',
      createdAt: 'May 26, 2019',
    },
    {
      id: 3,
      src: kimgould,
      name: 'Kim Gould',
      email: 'kim.gould@gmail.com',
      address: '15 Romilly Street, Liverpool,L6 9JL',
      createdAt: 'May 26, 2019',
    },
    {
      id: 4,
      src: lucasharrington,
      name: 'Lucas Harrington',
      email: 'harringtonl@gmail.com',
      address: '13 Balfour Crescent, Bracknell, RG12 7JA',
      createdAt: 'May 25, 2019',
    },
    {
      id: 5,
      src: carltonblackmore,
      name: 'Carlton Blackmore',
      email: 'carlton.blackmore@gmail.com',
      address: '267 Rundells, Harlow,CM18 7HH',
      createdAt: 'May 25, 2019',
    },
    {
      id: 6,
      src: yasirstein,
      name: 'Yasir Stein',
      email: 'yasir.stein@gmail.com',
      address: '47 Chelmsford Close, Hull,HU9 5DR',
      createdAt: 'May 25, 2019',
    },
    {
      id: 7,
      src: danikabass,
      name: 'Danika Bass',
      email: 'danika.bass@gmail.com',
      address: '65 Chapel Street, Salford,M3 5BZ',
      createdAt: 'May 25, 2019',
    },
    {
      id: 8,
      src: shaynatierney,
      name: 'Shayna Tierney',
      email: 'shayna.tierney@gmail.com',
      address: '16 Cedar Avenue, Poulton-Le-Fylde",FY6 8DQ',
      createdAt: 'May 24, 2019',
    },
  ],
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
};

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
} = contactsSlice.actions;
