import { Paper } from '@mui/material';
import styled from 'styled-components';

import { $black2, $white } from 'constants/colors';

export const StyledTicketForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 316px;
  min-height: 452px;
`;

export const StyledPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  min-height: 606px;
  background-color: ${$white};
  border: 2px solid ${$black2};
  box-shadow: 24;
  padding: 32px 32px 40px 32px;
  text-align: 'center';
`;
