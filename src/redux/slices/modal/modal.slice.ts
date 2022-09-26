import { createSlice } from '@reduxjs/toolkit';

type InitState = {
  isOpen: boolean;
};
const initialState: InitState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export default modalSlice.reducer;

export const { open, close } = modalSlice.actions;
