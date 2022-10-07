/* eslint-disable @typescript-eslint/naming-convention */
import { Reducer } from 'redux';

import { initialState } from 'store/reducers/auth/initState';
import { ISetUser, IAuth, IAuthState } from 'store/reducers/auth/types';

type actions = ISetUser | IAuth;

const authReducer: Reducer<IAuthState, actions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: {
          id: action.user.id,
          firstname: action.user.firstname,
          lastname: action.user.lastname,
          email: action.user.email,
        },
      };
    case 'SET_AUTH':
      return { ...state, isAuth: action.isAuth };
    default:
      return { ...state };
  }
};

export default authReducer;
