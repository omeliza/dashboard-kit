import React from 'react';

import LogoSmall from 'components/Logo/LogoSmall/LogoSmall';
import { StyledBox, StyledList } from 'containers/Sidebar/styles';
import { sidebarArr } from 'containers/Sidebar/data';
import CustomListItem from 'containers/Sidebar/CustomListItem/CustomListItem';

const SideBar = () => (
  <StyledBox>
    <LogoSmall />
    <StyledList>
      {sidebarArr.map((item) => (
        <CustomListItem
          key={item.index}
          itemIndex={item.index}
          name={item.name}
          link={item.link}
        >
          {item.icon}
        </CustomListItem>
      ))}
    </StyledList>
  </StyledBox>
);

export default SideBar;
