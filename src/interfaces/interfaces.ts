export interface IForgot {
  email: string;
}
export interface IAuthFormInputs {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  confirmPassword?: string;
}

export interface IReset {
  password: string;
  confirmPassword: string;
}

export interface IInputProps {
  placeholder: string;
  type: string;
  label: string;
  name: string;
}
