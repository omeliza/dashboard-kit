import React from 'react';
import { Box, Divider, List, styled } from '@mui/material';

import overview from 'assets/overview.svg';
import tickets from 'assets/tickets.png';
import contacts from 'assets/contacts.png';
import settings from 'assets/settings.png';
import CustomListItem from 'components/Sidebar/CustomListItem/CustomListItem';
import { $bg, $grey, $white3 } from 'constants/colors';
import Logo32 from 'components/Logo/Logo32/Logo32';

const StyledBox = styled(Box)`
  grid-area: s;
  position: static;
  width: 255px;
  height: 100%;
  background-color: ${$bg};
`;

const StyledList = styled(List)({
  color: `${$grey}`,
  letterSpacing: '0.2px',
  // borderLeft: `3px solid ${$bg}`,
  '&& .Mui-selected, && .Mui-selected:hover': {
    color: `${$white3}`,
    backgroundColor: 'rgba(159, 162, 180, 0.08)',
    borderLeft: `3px solid ${$white3}`,
  },
});

const SideBar = () => (
  <StyledBox>
    <Logo32 />
    <StyledList>
      <CustomListItem src={overview} itemIndex={0} name="Overview" link="/" />
      <CustomListItem
        src={tickets}
        itemIndex={1}
        name="Tickets"
        link="/tickets"
      />
      <CustomListItem
        src={contacts}
        itemIndex={2}
        name="Contacts"
        link="/contacts"
      />
      <Divider />
      <CustomListItem
        src={settings}
        itemIndex={3}
        name="Settings"
        link="/settings"
      />
    </StyledList>
  </StyledBox>
);

export default SideBar;
