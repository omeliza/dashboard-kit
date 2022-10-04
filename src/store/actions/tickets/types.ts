import {
  ActionPayloadTicketType,
  IAddTicket,
  CurrentTicket,
  IUpdateTicket,
  IDeleteTicket,
  ISetCurrentTicketId,
  ISetCurrentTicket,
  ISetPersonPriority,
  ISetSearchedText,
  ITicketOrder,
} from 'store/reducers/tickets/types';

export type AddTicketAC = (newContact: ActionPayloadTicketType) => IAddTicket;
export type UpdateTicketAC = (ticket: CurrentTicket) => IUpdateTicket;
export type DeleteTicketAC = (id: number) => IDeleteTicket;
export type SetCurrentTicketIdAC = (id: number) => ISetCurrentTicketId;
export type SetCurrentTicketAC = (
  currentTicket: CurrentTicket,
) => ISetCurrentTicket;
export type SetPersonPriorityAC = (priority: string) => ISetPersonPriority;
export type SetSearchedTextAC = (text: string) => ISetSearchedText;
export type TicketOrderAC = (order: string) => ITicketOrder;
