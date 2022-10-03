import styled from 'styled-components';

import { $grey } from 'constants/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 41px;
  padding-bottom: 63px;
`;

export const StyledTitle = styled.h2`
  font-size: 19px;
  line-height: 23.85px;
  font-weight: 700;
  color: ${$grey};
  margin-bottom: auto;
  margin-top: auto;
  margin-left: 12px;
`;
