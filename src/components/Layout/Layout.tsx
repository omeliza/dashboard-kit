import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Navbar from 'components/NavBar/NavBar';
import SideBar from 'components/Sidebar/Sidebar';
import { useAppSelector } from 'redux/hooks';
import { StyledLayout } from 'components/Layout/styles';

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
