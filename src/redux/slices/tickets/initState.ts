// import chrisevans from 'assets/table/chrisevans.png';
// import cristianbale from 'assets/table/cristianbale.png';
// import henrycavil from 'assets/table/henrycavil.png';
// import mattdamon from 'assets/table/mattdamon.png';
// import robertdowney from 'assets/table/robertdowney.png';
// import samsmith from 'assets/table/samsmith.png';
// import steverogers from 'assets/table/steverogers.png';
// import tomcruise from 'assets/table/tomcruise.png';
import { ITicketsState } from 'redux/slices/tickets/types';

export const initialState: ITicketsState = {
  list: [],
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
  loading: false,
  error: null,
};
