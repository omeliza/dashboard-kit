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

export interface IAddTicket {
  type: 'ADD_TICKET';
  newTicket: ActionPayloadTicketType;
}

export interface IUpdateTicket {
  type: 'UPDATE_TICKET';
  ticket: CurrentTicket;
}

export interface IDeleteTicket {
  type: 'DELETE_TICKET';
  id: number;
}

export interface ISetCurrentTicketId {
  type: 'CURRENT_TICKET_ID';
  id: number | undefined;
}

export interface ISetCurrentTicket {
  type: 'CURRENT_TICKET';
  currentTicket: CurrentTicket;
}

export interface ISetPersonPriority {
  type: 'PERSON_PRIORITY';
  priority: string;
}

export interface ISetSearchedText {
  type: 'SEARCHED_TEXT';
  text: string;
}

export interface ITicketOrder {
  type: 'TICKET_ORDER';
  order: string;
}
