import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { format, formatDistanceToNow } from 'date-fns';

import { isError } from 'redux/slices/contacts/contacts.slice';
import { initialState } from 'redux/slices/tickets/initState';
import {
  ActionPayloadTicketType,
  CurrentTicket,
  ITicket,
} from 'redux/slices/tickets/types';
import type { RootState } from 'redux/store';

const url = process.env.REACT_APP_JSON_SERVER_URL_TICKETS as string;

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, { rejectWithValue }) => {
    const { status, data } = await axios.get(url);
    if (status !== 200) return rejectWithValue('Server Error');
    return (await data) as ITicket[];
  },
);

export const addTicket = createAsyncThunk(
  'tickets/addTickets',
  async (contact: ActionPayloadTicketType, { rejectWithValue, getState }) => {
    const {
      tickets: { list },
    } = getState() as RootState;
    const { status, data } = await axios.post(url, {
      id: list.length + 1,
      src: '',
      ticketDetails: contact.ticketDetails,
      customerName: contact.customerName,
      customerDate: format(new Date(), 'dd.MM.yyyy'),
      date: format(new Date(contact.date), 'LLLL dd, yyyy'),
      time: format(new Date(contact.date), 'h a'),
      updated: formatDistanceToNow(new Date(), {
        addSuffix: true,
        includeSeconds: true,
      }),
      priority: contact.priority,
    });
    if (status !== 201) {
      return rejectWithValue('Error! Cannot add new ticket.');
    }
    return data;
  },
);

export const updateTicket = createAsyncThunk(
  'tickets/updateTicket',
  async (ticket: CurrentTicket, { rejectWithValue, getState }) => {
    const {
      tickets: { list },
    } = getState() as RootState;
    const tick = list.find((u) => u.id === ticket.id);
    if (tick) {
      const { status, data } = await axios.put(`${url}/${ticket.id}`, {
        ...tick,
        ticketDetails: ticket.ticketDetails,
        customerName: ticket.customerName,
        priority: ticket.priority,
        updated: formatDistanceToNow(new Date(), {
          addSuffix: true,
          includeSeconds: true,
        }),
      });
      if (status !== 200) {
        return rejectWithValue('Error! Cannot update ticket.');
      }
      return data;
    }
    return rejectWithValue('There is no such ticket!');
  },
);

export const deleteTicket = createAsyncThunk(
  'tickets/deleteTicket',
  async (id: number, { rejectWithValue }) => {
    const { status } = await axios.delete(`${url}/${id}`);
    if (status !== 200) {
      return rejectWithValue('Error! Cannot update ticket.');
    }
    return id;
  },
);

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
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
  extraReducers(builder) {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.loading = false;
      })
      .addCase(updateTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTicket.fulfilled, (state, action) => {
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
        state.error = null;
      })
      .addCase(deleteTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTicket.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
        state.currentTicketId = undefined;
        state.currentTicket.id = undefined;
        state.currentTicket.ticketDetails = '';
        state.currentTicket.customerName = '';
        state.currentTicket.priority = '';
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default ticketsSlice.reducer;

export const {
  setCurrentTicketId,
  setCurrentTicket,
  setPersonPriority,
  setSearchedText,
  setTicketOrder,
} = ticketsSlice.actions;
