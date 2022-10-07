// import yasirstein from 'assets/table/chrisevans.png';
// import lucasharrington from 'assets/table/cristianbale.png';
// import carltonblackmore from 'assets/table/henrycavil.png';
// import elenasheldon from 'assets/table/mattdamon.png';
// import kimgould from 'assets/table/robertdowney.png';
// import danikabass from 'assets/table/samsmith.png';
// import shaynatierney from 'assets/table/steverogers.png';
// import mandeepwalton from 'assets/table/tomcruise.png';
import { IContactsState } from 'redux/slices/contacts/types';

export const initialState: IContactsState = {
  list: [],
  currentId: undefined,
  currentContact: {
    id: undefined,
    src: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  },
  searchName: '',
  order: '',
  loading: false,
  error: null,
};
