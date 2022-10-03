import { Box, Paper, styled, TableRow, TableCell, Avatar } from '@mui/material';
import styling from 'styled-components';

import { TitleTypo } from 'components/Typographies/Typographies';
import { $bgLight, $blue, $white, $white2 } from 'constants/colors';

export const BgTickets = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '30px',
  width: '100%',
  minHeight: 'calc(100vh - 93px)',
  backgroundColor: `${$bgLight}`,
});

export const TableWrapper = styled(Paper)({
  height: 'max-content',
  maxWidth: '1122px',
  bgColor: `${$white}`,
  border: `1px solid ${$white2}`,
  borderRadius: '8px',
});

export const addTicketStyles = {
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.2px',
  color: `${$blue}`,
  backgroundColor: 'transparent',
};

export const HeaderCell = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '90px',
});

export const PopoversWrapper = styled(Box)({ display: 'flex' });

export const PositionedTitle = styled(TitleTypo)({
  position: 'relative',
  top: '35px',
  marginLeft: '-16px',
});

export const PositionedRow = styled(TableRow)({
  position: 'relative',
  top: 0,
  paddingLeft: '30px',
});

export const StyledCell = styled(TableCell)({
  height: '92px',
  paddingRight: 0,
});

export const StyledImg = styling.img({
  marginRight: '24px',
  marginLeft: '14px',
});

export const StyledAvatar = styled(Avatar)({
  marginRight: '24px',
  marginLeft: '14px',
});

export const DetailsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const NameDateWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});
