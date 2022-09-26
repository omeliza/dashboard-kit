import { createSlice } from '@reduxjs/toolkit';

type InitState = {
  isContactModalOpen: boolean;
  isTicketModalOpen: boolean;
};
const initialState: InitState = {
  isTicketModalOpen: false,
  isContactModalOpen: false,
};

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
