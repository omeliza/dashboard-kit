import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { $black } from 'constants/colors';

const BlackTypo = styled(Typography)({
  fontWeight: 600,
  letterSpacing: '0.2px',
  color: `${$black}`,
  marginBottom: '4px',
});

export default BlackTypo;
