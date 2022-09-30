import { AppBar, styled, Typography } from '@mui/material';

import { $bgLight, $black } from 'constants/colors';

export const StyledAppBar = styled(AppBar)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridArea: 'h',
  position: 'static',
  bgcolor: 'transparent',
  height: '93px',
  paddingLeft: '30px',
  paddingRight: '33px',
  boxShadow: 'none',
  backgroundColor: `${$bgLight}`,
});

export const TitleTypo = styled(Typography)({
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '30px',
  letterSpacing: '0.3px',
  color: `${$black}`,
});

export const NameTypo = styled(Typography)({
  fontWeight: 600,
  color: `${$black}`,
  marginTop: 'auto',
  marginBottom: 'auto',
  marginRight: '14px',
});
