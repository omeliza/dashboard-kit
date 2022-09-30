import { IContact } from 'redux/slices/contacts/types';
import { ITicket } from 'redux/slices/tickets/types';

const contactsFiltering = (arr: IContact[], text: string) => {
  return [...arr].filter((str: { name: string; address: string }) =>
    str.name.toLowerCase().concat(str.address.toLowerCase()).includes(text),
  );
};

export const sortingFilteredContacts = (
  name: string | undefined,
  order: string,
  data: IContact[],
) => {
  if (order === 'asc' && name) {
    return contactsFiltering(data, name).sort((a, b) =>
      a.name > b.name ? 1 : -1,
    );
  }
  if (order === 'desc' && name) {
    return contactsFiltering(data, name).sort((a, b) =>
      a.name > b.name ? -1 : 1,
    );
  }
  if (order === '' && name) {
    return contactsFiltering(data, name);
  }
  if (order === 'desc' && name === '') {
    return [...data].sort((a, b) => (a.name > b.name ? -1 : 1));
  }
  if (order === 'asc' && name === '') {
    return [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return data;
};

const ticketsFiltering = (arr: ITicket[], text: string) => {
  return [...arr].filter(
    (str: { ticketDetails: string; priority: string; customerName: string }) =>
      str.ticketDetails
        .toLowerCase()
        .concat(str.priority)
        .concat(str.customerName.toLowerCase())
        .includes(text),
  );
};

export const sortingFilteredTickets = (
  text: string | undefined,
  order: string,
  data: ITicket[],
) => {
  if (order === 'asc' && text) {
    return ticketsFiltering(data, text).sort((a, b) =>
      a.customerName > b.customerName ? 1 : -1,
    );
  }
  if (order === 'desc' && text) {
    return ticketsFiltering(data, text).sort((a, b) =>
      a.customerName > b.customerName ? -1 : 1,
    );
  }
  if (order === '' && text) {
    return ticketsFiltering(data, text);
  }
  if (order === 'desc' && text === '') {
    return [...data].sort((a, b) => (a.customerName > b.customerName ? -1 : 1));
  }
  if (order === 'asc' && text === '') {
    return [...data].sort((a, b) => (a.customerName > b.customerName ? 1 : -1));
  }
  return data;
};
