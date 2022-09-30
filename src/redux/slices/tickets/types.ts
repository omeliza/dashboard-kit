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
