/* eslint-disable react/jsx-props-no-spreading */
import { AppBar, Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { $black, $bgLight } from 'constants/colors';
import { useAppSelector } from 'redux/hooks';
import { stringAvatar } from 'utils/navbarHelpers';

const Navbar = () => {
  const location = useLocation();
  const capitalize =
    location.pathname.slice(1).charAt(0).toUpperCase() +
    location.pathname.slice(2);
  const firstName = useAppSelector((state) => state.auth.user.firstname);
  const lastName = useAppSelector((state) => state.auth.user.lastname);
  const fullName = `${firstName} ${lastName}`;
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
        {location.pathname === '/' ? 'Overview' : capitalize}
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
          {fullName}
        </Typography>
        <Avatar {...stringAvatar(fullName)} />
      </Box>
    </AppBar>
  );
};

export default Navbar;
