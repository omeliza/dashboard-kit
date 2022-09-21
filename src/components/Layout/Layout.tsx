import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/NavBar/NavBar';
import SideBar from 'components/Sidebar/Sidebar';
import s from 'components/Layout/Layout.module.scss';

const Layout = () => {
  return (
    <div className={s.layout}>
      <Navbar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
