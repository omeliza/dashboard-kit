import React from 'react';

import logoMedium from 'assets/logo.png';
import { StyledImg, StyledTitle } from 'components/Logo/LogoMedium/styles';

const LogoMedium = () => (
  <>
    <StyledImg src={logoMedium} alt="Logo" />
    <StyledTitle>Dashboard Kit</StyledTitle>
  </>
);

export default LogoMedium;
