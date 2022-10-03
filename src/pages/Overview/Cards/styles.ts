import { Card } from '@mui/material';
import styled from 'styled-components';

import { $white2, $white, $blue, $grey2, $black } from 'constants/colors';

export const CustomCard = styled(Card)({
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
