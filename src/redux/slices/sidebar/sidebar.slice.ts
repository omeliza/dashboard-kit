import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitState } from 'redux/slices/sidebar/types';

const initialState: InitState = {
  selectedIndex: 0,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSelectedIndex: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },
  },
});

export default sidebarSlice.reducer;

export const { setSelectedIndex } = sidebarSlice.actions;
