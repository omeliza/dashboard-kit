/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';
import { format, formatDistanceToNow } from 'date-fns';

import { initialState } from 'store/reducers/tickets/initState';
import {
  IAddTicket,
  IUpdateTicket,
  IDeleteTicket,
  ISetCurrentTicketId,
  ISetCurrentTicket,
  ISetPersonPriority,
  ISetSearchedText,
  ITicketOrder,
  ITicketsState,
} from 'store/reducers/tickets/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
type actions =
  | IAddTicket
  | IUpdateTicket
  | IDeleteTicket
  | ISetCurrentTicketId
  | ISetCurrentTicket
  | ISetPersonPriority
  | ISetSearchedText
  | ITicketOrder;

const ticketReducer: Reducer<ITicketsState, actions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'ADD_TICKET':
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            src: '',
            ticketDetails: action.newTicket.ticketDetails,
            customerName: action.newTicket.customerName,
            customerDate: format(new Date(), 'dd.MM.yyyy'),
            date: format(new Date(action.newTicket.date), 'LLLL dd, yyyy'),
            time: format(new Date(action.newTicket.date), 'h a'),
            updated: formatDistanceToNow(new Date(), {
              addSuffix: true,
              includeSeconds: true,
            }),
            priority: action.newTicket.priority,
          },
        ],
      };
    case 'UPDATE_TICKET':
      const ticket = state.list.find((u) => u.id === action.ticket.id);
      if (ticket) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              ...ticket,
              ticketDetails: action.ticket.ticketDetails,
              customerName: action.ticket.customerName,
              priority: action.ticket.priority,
              updated: formatDistanceToNow(new Date(), {
                addSuffix: true,
                includeSeconds: true,
              }),
            },
          ],
        };
      }
      return { ...state };
    case 'DELETE_TICKET':
      const filteredTickets = state.list.filter((u) => u.id !== action.id);
      return { ...state, list: [...filteredTickets] };
    case 'CURRENT_TICKET_ID':
      return { ...state, currentTicketId: action.id };
    case 'CURRENT_TICKET':
      return {
        ...state,
        currentTicket: {
          id: action.currentTicket.id,
          customerName: action.currentTicket.customerName,
          ticketDetails: action.currentTicket.ticketDetails,
          priority: action.currentTicket.priority,
          date: '',
        },
      };
    case 'PERSON_PRIORITY':
      return { ...state, personPriority: action.priority };
    case 'SEARCHED_TEXT':
      return { ...state, searchedText: action.text };
    case 'TICKET_ORDER':
      return { ...state, ticketOrder: action.order };
    default:
      return { ...state };
  }
};

export default ticketReducer;
