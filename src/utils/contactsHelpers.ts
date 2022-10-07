import axios, { AxiosResponse } from 'axios';
import { format } from 'date-fns';

import { AddContact, ICurrentContact } from 'store/reducers/contacts/types';

export const getContacts = async () => {
  const response = await axios.get('http://localhost:5000/list');
  return response;
};

export const addContact = async (user: AddContact, listLength: number) => {
  const response = await axios.post('http://localhost:5000/list', {
    id: listLength + 1,
    src: user.src,
    name: user.name,
    email: user.email,
    address: user.address,
    createdAt: format(new Date(), 'LLLL dd, yyyy'),
  });
  return response;
};

export const deleteContact = async (id: number) => {
  const response: AxiosResponse = await axios.delete(
    `http://localhost:5000/list/${id}`,
  );
  return response;
};

export const updateContact = async (updatedContact: ICurrentContact) => {
  const response: AxiosResponse = await axios.put(
    `http://localhost:5000/list/${updatedContact.id}`,
    {
      id: updatedContact.id,
      src: updatedContact.src,
      name: `${updatedContact.firstName} ${updatedContact.lastName}`,
      email: updatedContact.email,
      address: updatedContact.address,
      createdAt: format(new Date(), 'LLLL dd, yyyy'),
    },
  );
  return response;
};
