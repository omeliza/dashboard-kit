import { Box, Button, styled, Typography } from '@mui/material';

import { $bgLight, $grey3 } from 'constants/colors';

export const WizardFormTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '30px',
  color: `${$grey3}`,
});
export const WizardFormWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: `${$bgLight}`,
  height: 'calc(100vh - 93px)',
});
export const NextButton = styled(Button)({
  display: 'block',
  marginLeft: 'auto',
  marginTop: '20px',
});
export const BackButton = styled(Button)({
  display: 'block',
  marginRight: 'auto',
  marginTop: '20px',
});
