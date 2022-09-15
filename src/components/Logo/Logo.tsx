import React from 'react';
import logo from '../../assets/logo.png';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <>
      <img src={logo} alt="Logo" className={s.logo} />
      <h2 className={s.h2}>Dashboard Kit</h2>
    </>
  );
};

export default Logo;
