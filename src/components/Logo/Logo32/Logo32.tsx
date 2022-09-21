import React from 'react';

import s from 'components/Logo/Logo32/Logo32.module.scss';
import logo32 from 'assets/logo32.png';

const Logo32 = () => (
  <div className={s.wrapper}>
    <img src={logo32} alt="Logo" className={s.logo} />
    <h2 className={s.h2}>Dashboard Kit</h2>
  </div>
);

export default Logo32;
