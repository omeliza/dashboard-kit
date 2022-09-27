import { ReactNode } from 'react';

export interface IForgot {
  email: string;
}
export interface IAuthFormInputs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword?: string;
}

export interface IReset {
  password: string;
  confirmPassword: string;
}

export type SignUp = Omit<IAuthFormInputs, 'confirmPassword'>;
export type SignIn = Pick<SignUp, 'email' | 'password'>;

export interface IInputProps {
  placeholder: string;
  type: string;
  label: string;
  name: string;
  min?: string;
}

export interface IErrorProps {
  resetErrorBoundary: () => void;
}

export interface ICustomListItem {
  src: string;
  itemIndex: number;
  name: string;
  link: string;
}
export interface ICheckbox {
  label: string;
  icon: ReactNode;
  checkedIcon: ReactNode;
}
export interface ICustomBox {
  children: ReactNode;
}
export interface IContactModal {
  image?: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
}
export interface ITicketModal {
  ticketDetails: string;
  customerName: string;
  date: string;
  priority: 'low' | 'normal' | 'high';
}
