import { Typography } from '@mui/material';
import React from 'react';

import { CustomCard } from 'pages/Overview/Cards/styles';

const mockCardData = [
  { title: 'Unresolved', number: 60 },
  { title: 'Overdue', number: 16 },
  { title: 'Open', number: 43 },
  { title: 'On hold', number: 64 },
];

const Cards = () => (
  <>
    {mockCardData.map((item, i) => (
      <CustomCard style={{ gridArea: `c${i + 1}` }}>
        <Typography>{item.title}</Typography>
        <Typography>{item.number}</Typography>
      </CustomCard>
    ))}
  </>
);

export default Cards;
