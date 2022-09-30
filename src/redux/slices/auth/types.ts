export interface IAuthState {
  isAuth: boolean;
  user: {
    firstname: string;
    lastname: string;
    email: string;
    id: number;
  };
}
