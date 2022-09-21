import { AppBar, Avatar, Box, Typography } from '@mui/material';
import React from 'react';

import avatar from 'assets/avatar.png';
import { $black, $bgLight } from 'constants/colors';

const Navbar = () => {
  return (
    <AppBar
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridArea: 'h',
        position: 'static',
        bgcolor: 'transparent',
        height: '93px',
        pl: '30px',
        pr: '33px',
        boxShadow: 'none',
        backgroundColor: `${$bgLight}`,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '30px',
          letterSpacing: '0.3px',
          color: `${$black}`,
        }}
      >
        Overview
      </Typography>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            color: `${$black}`,
            mt: 'auto',
            mb: 'auto',
            mr: '14px',
          }}
        >
          Jones Ferdinand
        </Typography>
        <Avatar alt="Jones Ferdinand" src={avatar} />
      </Box>
    </AppBar>
  );
};

export default Navbar;
