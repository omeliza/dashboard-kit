import React, { FC } from 'react';
import { Box } from '@mui/material';

import { $green, $red, $white, $yellow } from 'constants/colors';
import { ICustomBox } from 'interfaces/interfaces';

const CustomBox: FC<ICustomBox> = ({ children }) => {
  let bgColor = `${$yellow}`;
  if (children === 'high') {
    bgColor = `${$red}`;
  }
  if (children === 'normal') {
    bgColor = `${$green}`;
  }
  return (
    <Box
      sx={{
        display: 'inline-block',
        borderRadius: '100px',
        padding: '5px 12px',
        ml: '18px',
        bgcolor: `${bgColor}`,
        color: `${$white}`,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
