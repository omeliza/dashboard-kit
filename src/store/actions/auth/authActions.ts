import { SetUserAC, SetAuthAC } from 'store/actions/auth/types';

export const setUser: SetUserAC = (user) => {
  return { type: 'SET_USER', user };
};

export const setAuth: SetAuthAC = (isAuth) => {
  return { type: 'SET_AUTH', isAuth };
};
