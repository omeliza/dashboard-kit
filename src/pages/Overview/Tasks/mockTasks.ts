import greenFlag from 'assets/new.png';
import greyFlag from 'assets/default.png';
import yellowFlag from 'assets/urgent.png';

export const mockTasks = [
  {
    label: 'Finish ticket update',
    src: yellowFlag,
    alt: 'urgent',
  },
  {
    label: 'Create new ticket example',
    src: greenFlag,
    alt: 'new',
  },
  {
    label: 'Update ticket report',
    src: greyFlag,
    alt: 'default',
  },
];
