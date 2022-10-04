import {
  AddTicketAC,
  DeleteTicketAC,
  SetCurrentTicketAC,
  SetCurrentTicketIdAC,
  SetPersonPriorityAC,
  SetSearchedTextAC,
  TicketOrderAC,
  UpdateTicketAC,
} from 'store/actions/tickets/types';

export const addTicket: AddTicketAC = (newTicket) => {
  return {
    type: 'ADD_TICKET',
    newTicket,
  };
};

export const updateTicket: UpdateTicketAC = (ticket) => {
  return { type: 'UPDATE_TICKET', ticket };
};

export const deleteTicket: DeleteTicketAC = (id) => {
  return {
    type: 'DELETE_TICKET',
    id,
  };
};

export const setCurrentTicketId: SetCurrentTicketIdAC = (id) => {
  return { type: 'CURRENT_TICKET_ID', id };
};

export const setCurrentTicket: SetCurrentTicketAC = (currentTicket) => {
  return { type: 'CURRENT_TICKET', currentTicket };
};

export const setPersonPriority: SetPersonPriorityAC = (priority) => {
  return {
    type: 'PERSON_PRIORITY',
    priority,
  };
};

export const setSearchedText: SetSearchedTextAC = (text) => {
  return { type: 'SEARCHED_TEXT', text };
};

export const ticketOrder: TicketOrderAC = (order) => {
  return { type: 'TICKET_ORDER', order };
};
