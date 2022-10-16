import { styled, Typography } from '@mui/material';

import { $black, $grey2, $grey3, $grey4, $red2 } from 'constants/colors';

export const TitleTypo = styled(Typography)`
  line-height: 18px;
  letter-spacing: 0.2px;
  color: ${$grey2};
  font-weight: 700;
`;

export const BlackTypo = styled(Typography)({
  fontWeight: 600,
  letterSpacing: '0.2px',
  color: `${$black}`,
});

export const GreyTypo = styled(Typography)({
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '0.1px',
  color: `${$grey4}`,
});

export const FiltersTypo = styled(Typography)({
  paddingLeft: '8px',
  fontWeight: 600,
  letterSpacing: '0.2px',
  color: `${$grey3}`,
});

export const ErrorTypo = styled(Typography)({
  maxWidth: '316px',
  color: `${$red2}`,
  '&::before': {
    content: '"⚠ "',
    display: 'inline',
  },
});
