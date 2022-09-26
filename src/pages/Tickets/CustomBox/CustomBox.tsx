import React, { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';

import { $green, $grey4, $red, $white, $yellow } from 'constants/colors';
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
    <>
      <Box
        sx={{
          borderRadius: '100px',
          padding: '5px 12px',
          bgcolor: `${bgColor}`,
          color: `${$white}`,
        }}
      >
        {children}
      </Box>
      <IconButton
        size="large"
        aria-label="display more actions"
        edge="end"
        sx={{
          ml: 'auto',
          color: `${$grey4}`,
          position: 'relative',
          right: '0px',
        }}
      >
        <MoreIcon />
      </IconButton>
    </>
  );
};

export default CustomBox;
