import { createSlice } from '@reduxjs/toolkit';

import { initialState } from 'redux/slices/modal/initState';

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleTicketModal: (state) => {
      state.isTicketModalOpen = !state.isTicketModalOpen;
    },
    toggleContactModal: (state) => {
      state.isContactModalOpen = !state.isContactModalOpen;
    },
  },
});

export default modalSlice.reducer;

export const { toggleContactModal, toggleTicketModal } = modalSlice.actions;
