import { styled, Typography } from '@mui/material';

import { $red2 } from 'constants/colors';

export const ErrorTypo = styled(Typography)({
  color: `${$red2}`,
  '&::before': {
    content: '"⚠ "',
    display: 'inline',
  },
});
