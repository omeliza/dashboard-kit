import React from 'react';
import styled from 'styled-components';

import logo32 from 'assets/logo32.png';
import { $grey } from 'constants/colors';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 41px;
  padding-bottom: 63px;
`;

const StyledTitle = styled.h2`
  font-size: 19px;
  line-height: 23.85px;
  font-weight: 700;
  color: ${$grey};
  margin-bottom: auto;
  margin-top: auto;
  margin-left: 12px;
`;

const Logo32 = () => (
  <Wrapper>
    <img
      src={logo32}
      alt="Logo"
      style={{ marginTop: 'auto', marginBottom: 'auto' }}
    />
    <StyledTitle>Dashboard Kit</StyledTitle>
  </Wrapper>
);

export default Logo32;
