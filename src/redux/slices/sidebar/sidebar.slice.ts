import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from 'redux/slices/sidebar/initState';

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
