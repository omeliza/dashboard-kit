import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { $grey4 } from 'constants/colors';

const GreyTypo = styled(Typography)({
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '0.1px',
  color: `${$grey4}`,
});

export default GreyTypo;
