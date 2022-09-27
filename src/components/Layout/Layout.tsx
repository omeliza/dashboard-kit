import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'components/NavBar/NavBar';
import SideBar from 'components/Sidebar/Sidebar';
import { useAppSelector } from 'redux/hooks';

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
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return isAuth === true ? (
    <StyledLayout>
      <>
        <Navbar />
        <SideBar />
        <Outlet />
      </>
    </StyledLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
