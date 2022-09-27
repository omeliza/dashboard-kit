import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  isAuth: boolean;
  user: {
    firstname: string;
    lastname: string;
    email: string;
    id: number;
  };
}
const initialState: IAuthState = {
  isAuth: false,
  user: {
    firstname: '',
    lastname: '',
    email: '',
    id: 0,
  },
};

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
