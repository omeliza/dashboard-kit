import { Card, styled, Typography } from '@mui/material';
import React from 'react';

import { $black, $blue, $grey2, $white, $white2 } from 'constants/colors';

const CustomCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '258px',
  maxHeight: '134px',
  width: '100%',
  height: '100%',
  padding: '24px 32px',
  border: `1px solid ${$white2}`,
  borderRadius: '8px',
  backgroundColor: `${$white}`,
  '&:hover': {
    border: `1px solid ${$blue}`,
    '& > :first-of-type': {
      color: `${$blue}`,
    },
    '& > :last-of-type': {
      color: `${$blue}`,
    },
  },
  '& > :first-of-type': {
    fontSize: '19px',
    fontWeight: 700,
    lineHeight: '23.85px',
    color: `${$grey2}`,
  },
  '& > :last-child': {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '50.2px',
    color: `${$black}`,
  },
});

const Cards = () => {
  return (
    <>
      <CustomCard style={{ gridArea: 'c1' }}>
        <Typography>Unresolved</Typography>
        <Typography>60</Typography>
      </CustomCard>
      <CustomCard style={{ gridArea: 'c2' }}>
        <Typography>Overdue</Typography>
        <Typography>16</Typography>
      </CustomCard>
      <CustomCard style={{ gridArea: 'c3' }}>
        <Typography>Open</Typography>
        <Typography>43</Typography>
      </CustomCard>
      <CustomCard style={{ gridArea: 'c4' }}>
        <Typography>On hold</Typography>
        <Typography>64</Typography>
      </CustomCard>
    </>
  );
};

export default Cards;
