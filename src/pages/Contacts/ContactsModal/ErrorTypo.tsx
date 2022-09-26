import { styled, Typography } from '@mui/material';

export const ErrorTypo = styled(Typography)({
  color: '#bf1650',
  '&::before': {
    content: '"⚠ "',
    display: 'inline',
  },
});
