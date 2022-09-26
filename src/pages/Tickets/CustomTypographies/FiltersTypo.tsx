import React from 'react';
import { styled, Typography } from '@mui/material';

import { $grey3 } from 'constants/colors';

const FiltersTypo = styled(Typography)({
  paddingLeft: '8px',
  fontWeight: 600,
  letterSpacing: '0.2px',
  color: `${$grey3}`,
});

export default FiltersTypo;
