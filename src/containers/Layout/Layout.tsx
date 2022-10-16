import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Navbar from 'components/NavBar/NavBar';
import { useAppSelector } from 'redux/hooks';
import { StyledLayout } from 'containers/Layout/styles';
import SideBar from 'containers/Sidebar/Sidebar';

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
