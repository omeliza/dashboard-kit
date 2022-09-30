/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Avatar, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from 'redux/hooks';
import { stringAvatar } from 'utils/navbarHelpers';
import { NameTypo, StyledAppBar, TitleTypo } from 'components/NavBar/styles';

const Navbar = () => {
  const location = useLocation();
  const capitalize =
    location.pathname.slice(1).charAt(0).toUpperCase() +
    location.pathname.slice(2);
  const firstName = useAppSelector((state) => state.auth.user.firstname);
  const lastName = useAppSelector((state) => state.auth.user.lastname);
  const fullName = `${firstName} ${lastName}`;

  return (
    <StyledAppBar>
      <>
        <TitleTypo>
          {location.pathname === '/' ? 'Overview' : capitalize}
        </TitleTypo>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <>
            <NameTypo>{fullName}</NameTypo>
            <Avatar {...stringAvatar(fullName)} />
          </>
        </Box>
      </>
    </StyledAppBar>
  );
};

export default Navbar;
