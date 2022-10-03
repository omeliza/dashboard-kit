import React from 'react';

import CustomListItem from 'components/Sidebar/CustomListItem/CustomListItem';
import LogoSmall from 'components/Logo/LogoSmall/LogoSmall';
import { StyledBox, StyledList } from 'components/Sidebar/styles';
import OverviewIcon from 'components/Icons/OverviewIcon';
import TicketsIcon from 'components/Icons/TicketsIcon';
import ContactsIcon from 'components/Icons/ContactsIcon';

const SideBar = () => (
  <StyledBox>
    <LogoSmall />
    <StyledList>
      <CustomListItem itemIndex={0} name="Overview" link="/">
        <OverviewIcon />
      </CustomListItem>
      <CustomListItem itemIndex={1} name="Tickets" link="/tickets">
        <TicketsIcon />
      </CustomListItem>
      <CustomListItem itemIndex={2} name="Contacts" link="/contacts">
        <ContactsIcon />
      </CustomListItem>
    </StyledList>
  </StyledBox>
);

export default SideBar;
