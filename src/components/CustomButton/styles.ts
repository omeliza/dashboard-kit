import styled from 'styled-components';

import { $blue, $white } from 'constants/colors';

export const MyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 316px;
  height: 48px;
  border-radius: 8px;
  color: ${$white};
  background-color: ${$blue};
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border: 2px solid ${$blue};
  transition: background-color 0.3s ease-in-out;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  &:hover:enabled {
    background-color: #3752ffb7;
    box-shadow: none;
    transition: background-color 0.3s ease-in-out;
  }
  &:focus:enabled {
    background-color: transparent;
    color: ${$blue};
    transition: background-color 0.3s ease-in-out;
  }
  &:disabled {
    background-color: #3752ff42;
    border: 2px solid #3752ff59;
    box-shadow: none;
    cursor: auto;
  }
`;
