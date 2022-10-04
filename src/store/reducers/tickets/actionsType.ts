export interface ITicket {
  id: number | undefined;
  src: string;
  ticketDetails: string;
  updated: string;
  customerName: string;
  customerDate: string;
  date: string;
  time: string;
  priority: string;
}

export type ActionPayloadTicketType = Pick<
  ITicket,
  'ticketDetails' | 'customerName' | 'priority' | 'date'
>;

export type CurrentTicket = Pick<
  ITicket,
  'id' | 'ticketDetails' | 'customerName' | 'priority' | 'date'
>;

export interface ITicketsState {
  list: ITicket[];
  currentTicketId: number | undefined;
  currentTicket: CurrentTicket;
  personPriority: string;
  searchedText: string;
  ticketOrder: string;
}

export interface AddTicket {
  type: 'ADD_TICKET';
  newTicket: ActionPayloadTicketType;
}
export interface UpdateTicket {
  type: 'UPDATE_TICKET';
  ticket: CurrentTicket;
}
export interface DeleteTicket {
  type: 'DELETE_TICKET';
  id: number;
}
export interface SetCurrentTicketId {
  type: 'CURRENT_TICKET_ID';
  id: number;
}
export interface SetCurrentTicket {
  type: 'CURRENT_TICKET';
  currentTicket: CurrentTicket;
}
export interface SetPersonPriority {
  type: 'PERSON_PRIORITY';
  priority: string;
}
export interface SetSearchedText {
  type: 'SEARCHED_TEXT';
  text: string;
}
export interface TicketOrder {
  type: 'TICKET_ORDER';
  order: string;
}
