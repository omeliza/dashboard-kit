import React from 'react';

import logo32 from 'assets/logo32.png';
import { StyledTitle, Wrapper } from 'components/Logo/LogoSmall/styles';

const Logo32 = () => (
  <Wrapper>
    <img src={logo32} alt="Logo" />
    <StyledTitle>Dashboard Kit</StyledTitle>
  </Wrapper>
);

export default Logo32;
