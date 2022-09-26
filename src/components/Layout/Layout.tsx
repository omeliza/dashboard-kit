import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'components/NavBar/NavBar';
import SideBar from 'components/Sidebar/Sidebar';

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 255px 1fr;
  grid-template-rows: 93px 1fr;
  grid-template-areas:
    's h'
    's c'
    's c';
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Navbar />
      <SideBar />
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
