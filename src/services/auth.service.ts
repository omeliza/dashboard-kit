/* eslint-disable no-console */
import { IAuthFormInputs, IForgot, IReset } from 'interfaces/interfaces';

export const onAuthSubmit = (data: IAuthFormInputs) => {
  console.log(data);
};

export const onForgotSubmit = (data: IForgot) => {
  console.log(data);
};

export const onResetSubmit = (data: IReset) => {
  console.log(data);
};
