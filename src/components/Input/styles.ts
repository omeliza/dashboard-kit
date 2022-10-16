import styled from 'styled-components';

import { $grey2, $white4, $white5 } from 'constants/colors';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 15.06px;
  font-weight: 700;
  color: ${$grey2};
  position: relative;
  letter-spacing: 0.3px;
  left: 0;
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
`;

export const StyledInput = styled.input`
  font-family: 'Mulish';
  margin-top: 6px;
  margin-bottom: 4px;
  width: 316px;
  height: 42px;
  background-color: ${$white4};
  border: 1px solid ${$white5};
  border-radius: 8px;
  padding: 11px 16px;

  &::placeholder {
    color: $grey3;
    font-family: 'Mulish';
    font-size: 14px;
    letter-spacing: 0.3px;
  }
`;

export const EyeButton = styled.button`
  display: block;
  background-color: unset;
  border: none;
  position: absolute;
  right: 18px;
  top: 35px;
`;
