import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { $bgLight, $black, $grey2, $white, $white2 } from 'constants/colors';
import Cards from 'pages/Overview/Cards/Cards';
import Chart from 'pages/Overview/Chart/Chart';
import SideCards from 'pages/Overview/SideCards/SideCards';
import UnresolvedBox from 'pages/Overview/UnresolvedBox/UnresolvedBox';
import Tasks from 'pages/Overview/Tasks/Tasks';

const OverviewWrapper = styled(Card)`
  background-color: ${$bgLight};
  padding: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 4fr 2.5fr;
  grid-template-areas:
    'c1 c2 c3 c4'
    'tr tr tr tr'
    'un un ta ta';
`;

const Overview = () => (
  <OverviewWrapper>
    <Cards />
    <Box
      style={{
        gridArea: 'tr',
        background: `${$white}`,
        border: `1px solid ${$white2}`,
        borderRadius: '8px',
        padding: '32px 0 32px 32px',
        maxHeight: '546px',
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '19px',
          lineHeight: '24px',
          letterSpacing: '0.4px',
          color: `${$black}`,
          mb: '8px',
        }}
      >
        Today’s trends
      </Typography>
      <Typography
        sx={{
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.1px',
          color: `${$grey2}`,
        }}
      >
        as of 25 May 2019, 09:41 PM
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Chart />
        <SideCards />
      </Box>
    </Box>
    <UnresolvedBox />
    <Tasks />
  </OverviewWrapper>
);

export default Overview;
