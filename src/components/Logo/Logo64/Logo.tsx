import React from 'react';

import s from 'components/Logo/Logo64/Logo.module.scss';
import logo from 'assets/logo.png';

const Logo = () => (
  <>
    <img src={logo} alt="Logo" className={s.logo} />
    <h2 className={s.h2}>Dashboard Kit</h2>
  </>
);

export default Logo;
