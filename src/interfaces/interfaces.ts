import { ChangeEvent, ReactNode } from 'react';

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
  value?: string | number;
  changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export interface IErrorProps {
  resetErrorBoundary: () => void;
}

export interface ICustomListItem {
  // src: string;
  itemIndex: number;
  name: string;
  link: string;
  children: ReactNode;
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
  id?: number;
  src: string;
  name?: string;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}
export interface ITicketModal {
  ticketDetails: string;
  customerName: string;
  date: string;
  priority: 'low' | 'normal' | 'high';
}

export interface TicketsColumn {
  id: 'ticketDetails' | 'customerName' | 'date' | 'priority';
  label: string;
  minWidth?: number;
}

export interface IButtonProps {
  name: string;
}

export interface ContactsColumn {
  id: 'name' | 'email' | 'address' | 'createdAt';
  label: string;
  minWidth?: number;
}
