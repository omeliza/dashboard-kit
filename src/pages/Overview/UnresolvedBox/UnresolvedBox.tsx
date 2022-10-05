import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

import {
  BottomCardTitle,
  BottomDetailsBtn,
  BottomSubtitle,
  BottomTitleWrapper,
} from 'pages/Overview/styles';
import {
  RepeatedSection,
  SubTitleSupport,
  Wrapper,
} from 'pages/Overview/UnresolvedBox/styles';
import { unresolvedData } from 'pages/Overview/UnresolvedBox/mockData';

const UnresolvedBox = () => (
  <Wrapper>
    <BottomTitleWrapper>
      <BottomCardTitle>Unresolved tickets</BottomCardTitle>
      <BottomDetailsBtn>View details</BottomDetailsBtn>
    </BottomTitleWrapper>
    <BottomSubtitle>
      Group: <SubTitleSupport>Support</SubTitleSupport>
    </BottomSubtitle>
    <Box>
      {unresolvedData.map((item, i) => (
        <div key={item.title}>
          <RepeatedSection>
            <Typography>{item.title}</Typography>
            <Typography>{item.number}</Typography>
          </RepeatedSection>
          {i !== unresolvedData.length - 1 && <Divider />}
        </div>
      ))}
    </Box>
  </Wrapper>
);

export default UnresolvedBox;
