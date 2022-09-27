/* eslint-disable no-console */
import axios from 'axios';

import { IForgot, IReset } from 'interfaces/interfaces';

const url = process.env.REACT_APP_SERVER_URL;

export const onForgotSubmit = (data: IForgot) => {
  console.log(data);
};

export const onResetSubmit = (data: IReset) => {
  console.log(data);
};

export const signUp = (
  email: string,
  firstName: string,
  lastName: string,
  password: string,
) => {
  return axios.post<string>(`${url}/auth/signup`, {
    email,
    firstName,
    lastName,
    password,
  });
};

export const signIn = (email: string, password: string) => {
  return axios.post(`${url}/auth/signin`, {
    email,
    password,
  });
};
