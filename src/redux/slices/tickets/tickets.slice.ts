import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format, formatDistanceToNow } from 'date-fns';

import { initialState } from 'redux/slices/tickets/initState';
import {
  ActionPayloadTicketType,
  CurrentTicket,
} from 'redux/slices/tickets/types';

export const ticketsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<ActionPayloadTicketType>) => {
      state.list.push({
        id: state.list.length + 2,
        src: '',
        ticketDetails: action.payload.ticketDetails,
        customerName: action.payload.customerName,
        customerDate: format(new Date(), 'dd.MM.yyyy'),
        date: format(new Date(action.payload.date), 'LLLL dd, yyyy'),
        time: format(new Date(action.payload.date), 'h a'),
        updated: formatDistanceToNow(new Date(), {
          addSuffix: true,
          includeSeconds: true,
        }),
        priority: action.payload.priority,
      });
    },
    updateTicket: (state, action: PayloadAction<CurrentTicket>) => {
      const ticket = state.list.find((u) => u.id === action.payload.id);
      if (ticket) {
        ticket.ticketDetails = action.payload.ticketDetails;
        ticket.customerName = action.payload.customerName;
        ticket.priority = action.payload.priority;
        ticket.updated = formatDistanceToNow(new Date(), {
          addSuffix: true,
          includeSeconds: true,
        });
      }
    },
    deleteTicket: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
    setCurrentTicketId: (state, action: PayloadAction<number | undefined>) => {
      state.currentTicketId = action.payload;
    },
    setCurrentTicket: (state, action) => {
      state.currentTicket.id = action.payload.id;
      state.currentTicket.customerName = action.payload.customerName;
      state.currentTicket.ticketDetails = action.payload.ticketDetails;
      state.currentTicket.priority = action.payload.priority;
    },
    setPersonPriority: (state, action: PayloadAction<string>) => {
      state.personPriority = action.payload;
    },
    setSearchedText: (state, action: PayloadAction<string>) => {
      state.searchedText = action.payload;
    },
    setTicketOrder: (state, action: PayloadAction<string>) => {
      state.ticketOrder = action.payload;
    },
  },
});

export default ticketsSlice.reducer;

export const {
  addTicket,
  updateTicket,
  deleteTicket,
  setCurrentTicketId,
  setCurrentTicket,
  setPersonPriority,
  setSearchedText,
  setTicketOrder,
} = ticketsSlice.actions;
