import { IAuthState } from 'redux/slices/auth/types';

export const initialState: IAuthState = {
  isAuth: false,
  user: {
    firstname: '',
    lastname: '',
    email: '',
    id: 0,
  },
};
