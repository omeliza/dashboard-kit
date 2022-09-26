import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.png';
import { $grey } from 'constants/colors';

const StyledTitle = styled.h2`
  margin-bottom: 32px;
  font-size: 19px;
  line-height: 23.85px;
  font-weight: 700;
  color: ${$grey};
`;

const Logo = () => (
  <>
    <img src={logo} alt="Logo" style={{ marginBottom: '12px' }} />
    <StyledTitle>Dashboard Kit</StyledTitle>
  </>
);

export default Logo;
