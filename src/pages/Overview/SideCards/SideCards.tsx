import { Divider, Typography } from '@mui/material';
import React from 'react';

import { SideCard, SideCardWrapper } from 'pages/Overview/SideCards/styles';
import { mockSideCardData } from 'pages/Overview/SideCards/mockData';

const SideCards = () => (
  <SideCardWrapper>
    {mockSideCardData.map((item, i) => (
      <div key={item.title}>
        <SideCard>
          <Typography>{item.title}</Typography>
          <Typography>{item.value}</Typography>
        </SideCard>
        {i !== mockSideCardData.length - 1 && <Divider />}
      </div>
    ))}
  </SideCardWrapper>
);

export default SideCards;
