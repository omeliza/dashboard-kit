import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from 'components/NavBar/NavBar';
import SideBar from 'components/Sidebar/Sidebar';
import { StyledLayout } from 'components/Layout/styles';
import { AppState } from 'store/reducers/rootReducer';

const Layout = () => {
  const isAuth = useSelector((state: AppState) => state.auth.isAuth);
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
