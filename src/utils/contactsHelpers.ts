import axios, { AxiosResponse } from 'axios';
import { format } from 'date-fns';

import { ICreateContactStart } from 'store/reducers/contacts/types';

export const getContacts = async () => {
  const response = await axios.get('http://localhost:5000/list');
  return response;
};

export const addContact = async (
  user: ICreateContactStart,
  listLength: number,
) => {
  const response = await axios.post('http://localhost:5000/list', {
    id: listLength + 1,
    src: user.newContact.src,
    name: user.newContact.name,
    email: user.newContact.email,
    address: user.newContact.address,
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
// { data: { id } },
