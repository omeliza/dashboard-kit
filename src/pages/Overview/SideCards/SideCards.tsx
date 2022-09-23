import { Box, Divider, styled, Typography } from '@mui/material';
import React from 'react';

import { $black, $grey2, $white2 } from 'constants/colors';

const SideCard = styled(Box)({
  textAlign: 'center',
  width: '342px',
  height: '109px',
  padding: '24px 32px 32px 32px',
  borderLeft: `1px solid ${$white2}`,
  '& > :first-of-type': {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'center',
    letterSpacing: '0.3px',
    color: `${$grey2}`,
    marginBottom: '6px',
  },
  '& > :last-of-type': {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '30px',
    textAlign: 'center',
    letterSpacing: '0.3px',
    color: `${$black}`,
  },
});

const SideCards = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        position: 'relative',
        top: '-80px',
      }}
    >
      <SideCard>
        <Typography>Resolved</Typography>
        <Typography>449</Typography>
      </SideCard>
      <Divider />
      <SideCard>
        <Typography>Received</Typography>
        <Typography>426</Typography>
      </SideCard>
      <Divider />
      <SideCard>
        <Typography>Average first response time</Typography>
        <Typography>33m</Typography>
      </SideCard>
      <Divider />
      <SideCard>
        <Typography>Average response time</Typography>
        <Typography>3h 8m</Typography>
      </SideCard>
      <Divider />
      <SideCard>
        <Typography>Resolution within SLA</Typography>
        <Typography>449</Typography>
      </SideCard>
    </div>
  );
};

export default SideCards;
