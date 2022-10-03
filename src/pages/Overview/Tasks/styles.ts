import { Box, styled } from '@mui/material';

import { $white, $white2 } from 'constants/colors';

export const Section = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '58px',
  paddingLeft: '32px',
  paddingRight: '32px',
});

export const Wrapper = styled(Box)({
  gridArea: 'ta',
  background: `${$white}`,
  border: `1px solid ${$white2}`,
  borderRadius: '8px',
  paddingTop: '32px',
  paddingBottom: '26px',
  maxHeight: '345px',
});
