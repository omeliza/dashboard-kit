import { IUser, ISetUser, IAuth } from 'store/reducers/auth/types';

export type SetUserAC = (user: IUser) => ISetUser;
export type SetAuthAC = (isAuth: boolean) => IAuth;
