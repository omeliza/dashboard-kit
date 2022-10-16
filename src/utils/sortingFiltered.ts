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
  if (name) {
    switch (order) {
      case 'asc':
        return contactsFiltering(data, name).sort((a, b) =>
          a.name > b.name ? 1 : -1,
        );
      case 'desc':
        return contactsFiltering(data, name).sort((a, b) =>
          a.name > b.name ? -1 : 1,
        );
      case '':
        return contactsFiltering(data, name);
      default:
        break;
    }
  }
  if (name === '') {
    switch (order) {
      case 'desc':
        return [...data].sort((a, b) => (a.name > b.name ? -1 : 1));
      case 'asc':
        return [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
      default:
        break;
    }
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
  if (text) {
    switch (order) {
      case 'asc':
        return ticketsFiltering(data, text).sort((a, b) =>
          a.customerName > b.customerName ? 1 : -1,
        );
      case 'desc':
        return ticketsFiltering(data, text).sort((a, b) =>
          a.customerName > b.customerName ? -1 : 1,
        );
      case '':
        return ticketsFiltering(data, text);
      default:
        break;
    }
  }
  if (text === '') {
    switch (order) {
      case 'desc':
        return [...data].sort((a, b) =>
          a.customerName > b.customerName ? -1 : 1,
        );
      case 'asc':
        return [...data].sort((a, b) =>
          a.customerName > b.customerName ? 1 : -1,
        );
      default:
        break;
    }
  }
  return data;
};
