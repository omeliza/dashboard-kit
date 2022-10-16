import SplitIcon from '@mui/icons-material/HorizontalSplit';

import ContactsIcon from 'components/Icons/ContactsIcon';
import OverviewIcon from 'components/Icons/OverviewIcon';
import TicketsIcon from 'components/Icons/TicketsIcon';
import { SidebarArr } from 'interfaces/interfaces';

export const sidebarArr: SidebarArr[] = [
  {
    index: 0,
    name: 'Overview',
    link: '/',
    icon: <OverviewIcon sx={{ mt: '5px' }} />,
  },
  {
    index: 1,
    name: 'Tickets',
    link: '/tickets',
    icon: <TicketsIcon sx={{ mt: '5px' }} />,
  },
  {
    index: 2,
    name: 'Contacts',
    link: '/contacts',
    icon: <ContactsIcon sx={{ mt: '5px' }} />,
  },
  {
    index: 3,
    name: 'Issues',
    link: '/issues',
    icon: <SplitIcon sx={{ fontSize: 14 }} />,
  },
];
