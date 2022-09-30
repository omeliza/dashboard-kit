import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format, formatDistanceToNow } from 'date-fns';

import chrisevans from 'assets/table/chrisevans.png';
import cristianbale from 'assets/table/cristianbale.png';
import henrycavil from 'assets/table/henrycavil.png';
import mattdamon from 'assets/table/mattdamon.png';
import robertdowney from 'assets/table/robertdowney.png';
import samsmith from 'assets/table/samsmith.png';
import steverogers from 'assets/table/steverogers.png';
import tomcruise from 'assets/table/tomcruise.png';
import {
  ITicketsState,
  ActionPayloadTicketType,
  CurrentTicket,
} from 'redux/slices/tickets/types';

const initialState: ITicketsState = {
  list: [
    {
      id: 1,
      src: tomcruise,
      ticketDetails: 'Contact Email not Linked',
      updated: '1 day ago',
      customerName: 'Tom Cruise',
      customerDate: '24.05.2019',
      date: 'May 26, 2019',
      time: '6:30 PM',
      priority: 'high',
    },
    {
      id: 2,
      src: mattdamon,
      ticketDetails: 'Adding Images to Featured Posts',
      updated: '1 day ago',
      customerName: 'Matt Damon',
      customerDate: '24.05.2019',
      date: 'May 26, 2019',
      time: '8:00 AM',
      priority: 'low',
    },
    {
      id: 3,
      src: robertdowney,
      ticketDetails: 'When will I be charged this month?',
      updated: '1 day ago',
      customerName: 'Robert Downey',
      customerDate: '24.05.2019',
      date: 'May 26, 2019',
      time: '7:30 PM',
      priority: 'high',
    },
    {
      id: 4,
      src: cristianbale,
      ticketDetails: 'Payment not going through',
      updated: '2 days ago',
      customerName: 'Cristian Bale',
      customerDate: '24.05.2019',
      date: 'May 25, 2019',
      time: '5:00 PM',
      priority: 'normal',
    },
    {
      id: 5,
      src: henrycavil,
      ticketDetails: 'Unable to add replies',
      updated: '2 days ago',
      customerName: 'Henry Cavil',
      customerDate: '24.05.2019',
      date: 'May 25, 2019',
      time: '4:00 PM',
      priority: 'high',
    },
    {
      id: 6,
      src: chrisevans,
      ticketDetails: 'Downtime since last week',
      updated: '3 days ago',
      customerName: 'Chris Evans',
      customerDate: '23.05.2019',
      date: 'May 25, 2019',
      time: '2:00 PM',
      priority: 'normal',
    },
    {
      id: 7,
      src: samsmith,
      ticketDetails: 'Referral Bonus',
      updated: '4 days ago',
      customerName: 'Sam Smith',
      customerDate: '22.05.2019',
      date: 'May 25, 2019',
      time: '11:30 AM',
      priority: 'low',
    },
    {
      id: 8,
      src: steverogers,
      ticketDetails: 'How do I change my password?',
      updated: '6 days ago',
      customerName: 'Steve Rogers',
      customerDate: '21.05.2019',
      date: 'May 24, 2019',
      time: '1:00 PM',
      priority: 'normal',
    },
  ],
  currentTicketId: undefined,
  currentTicket: {
    id: undefined,
    ticketDetails: '',
    customerName: '',
    priority: '',
    date: '',
  },
  personPriority: '',
  searchedText: '',
  ticketOrder: '',
};

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
