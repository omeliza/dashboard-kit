export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  id: number;
}
export interface IAuthState {
  isAuth: boolean;
  user: IUser;
}

export interface ISetUser {
  type: 'SET_USER';
  user: IUser;
}
export interface IAuth {
  type: 'SET_AUTH';
  isAuth: boolean;
}
