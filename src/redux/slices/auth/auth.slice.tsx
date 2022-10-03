import { createSlice } from '@reduxjs/toolkit';

import { initialState } from 'redux/slices/auth/initState';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    authenticated: (state) => {
      state.isAuth = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, authenticated } = authSlice.actions;

export default authSlice.reducer;
