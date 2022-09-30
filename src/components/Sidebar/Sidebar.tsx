import React from 'react';
import { Box, List, styled } from '@mui/material';

import overview from 'assets/overview.svg';
import tickets from 'assets/tickets.svg';
import contacts from 'assets/contacts.svg';
import CustomListItem from 'components/Sidebar/CustomListItem/CustomListItem';
import { $bg, $grey, $white3 } from 'constants/colors';
import Logo32 from 'components/Logo/Logo32/Logo32';

const StyledBox = styled(Box)`
  grid-area: s;
  position: static;
  width: 255px;
  min-height: 100vh;
  background-color: ${$bg};
`;

const StyledList = styled(List)({
  color: `${$grey}`,
  fill: `${$grey}`,
  letterSpacing: '0.2px',
  // filter:
  //   'invert(72%) sepia(9%) saturate(328%) hue-rotate(195deg) brightness(93%) contrast(82%)',
  '&& .Mui-selected, && .Mui-selected:hover': {
    color: `${$white3}`,
    fill: `${$white3}`,
    backgroundColor: 'rgba(159, 162, 180, 0.08)',
    // filter:
    //   'invert(100%) sepia(99%) saturate(6993%) hue-rotate(179deg) brightness(103%) contrast(101%)',
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
    </StyledList>
  </StyledBox>
);

export default SideBar;
