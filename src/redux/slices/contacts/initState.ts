import yasirstein from 'assets/table/chrisevans.png';
import lucasharrington from 'assets/table/cristianbale.png';
import carltonblackmore from 'assets/table/henrycavil.png';
import elenasheldon from 'assets/table/mattdamon.png';
import kimgould from 'assets/table/robertdowney.png';
import danikabass from 'assets/table/samsmith.png';
import shaynatierney from 'assets/table/steverogers.png';
import mandeepwalton from 'assets/table/tomcruise.png';
import { IContactsState } from 'redux/slices/contacts/types';

export const initialState: IContactsState = {
  list: [
    {
      id: 1,
      src: mandeepwalton,
      name: 'Mandeep Walton',
      email: 'mandeep.walton@gmail.com',
      address:
        'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate",B98 9PA',
      createdAt: 'May 26, 2019',
    },
    {
      id: 2,
      src: elenasheldon,
      name: 'Elena Sheldon',
      email: 'elena.sheldon@gmail.com',
      address: 'South Lodge, Reddish Lane, Lymm,WA13 9PY',
      createdAt: 'May 26, 2019',
    },
    {
      id: 3,
      src: kimgould,
      name: 'Kim Gould',
      email: 'kim.gould@gmail.com',
      address: '15 Romilly Street, Liverpool,L6 9JL',
      createdAt: 'May 26, 2019',
    },
    {
      id: 4,
      src: lucasharrington,
      name: 'Lucas Harrington',
      email: 'harringtonl@gmail.com',
      address: '13 Balfour Crescent, Bracknell, RG12 7JA',
      createdAt: 'May 25, 2019',
    },
    {
      id: 5,
      src: carltonblackmore,
      name: 'Carlton Blackmore',
      email: 'carlton.blackmore@gmail.com',
      address: '267 Rundells, Harlow,CM18 7HH',
      createdAt: 'May 25, 2019',
    },
    {
      id: 6,
      src: yasirstein,
      name: 'Yasir Stein',
      email: 'yasir.stein@gmail.com',
      address: '47 Chelmsford Close, Hull,HU9 5DR',
      createdAt: 'May 25, 2019',
    },
    {
      id: 7,
      src: danikabass,
      name: 'Danika Bass',
      email: 'danika.bass@gmail.com',
      address: '65 Chapel Street, Salford,M3 5BZ',
      createdAt: 'May 25, 2019',
    },
    {
      id: 8,
      src: shaynatierney,
      name: 'Shayna Tierney',
      email: 'shayna.tierney@gmail.com',
      address: '16 Cedar Avenue, Poulton-Le-Fylde",FY6 8DQ',
      createdAt: 'May 24, 2019',
    },
  ],
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
};
