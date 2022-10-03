import { Button, ButtonGroup, styled, Typography } from '@mui/material';

export const ModalTitle = styled(Typography)`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  text-align: center;
  margin-bottom: 32px;
`;

export const StyledBtnGroup = styled(ButtonGroup)`
  display: flex;
  min-height: 95px;
  justify-content: space-between;
  margin-top: 24px;
`;

export const CencelButton = styled(Button)`
  margin-left: calc(50% - 158px);
  display: block;
  letter-spacing: 0.2px;
`;
