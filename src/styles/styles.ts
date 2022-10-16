import styling from 'styled-components';
import { Button, ButtonGroup, styled, Typography } from '@mui/material';

import {
  $bg,
  $black,
  $blue,
  $grey2,
  $grey5,
  $white,
  $white2,
} from 'constants/colors';

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

export const logoStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Wrapper = styling.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${$bg};
`;

export const Block = styling.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px 40px 32px;
  width: 380px;
  max-height: 85vh;
  border: 1px solid ${$white2};
  border-radius: 8px;
  background-color: ${$white};
  overflow-y: visible;
  overflow-x: hidden;
  scrollbar-gutter: stable both-edges;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: ${$grey5};
  }
`;

export const AuthForm = styling.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 48px;
`;

export const Subtitle = styling.span`
  text-align: center;
  color: ${$grey2};
`;

export const AuthTitle = styling.h1`
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 30.12px;
  font-weight: 700;
  color: ${$black};
`;

export const Empty = styling.div`
  display: flex;
  width: 100%;
  height: 14px;
`;

export const AuthBottomTitle = styling.h5`
  margin-top: 24px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: right;
`;

export const linkStyles = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 600,
  color: `${$blue}`,
};

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
