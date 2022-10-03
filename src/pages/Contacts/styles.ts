import {
  Box,
  createTheme,
  Paper,
  styled,
  TableCell,
  TableRow,
} from '@mui/material';

import { BlackTypo, TitleTypo } from 'components/Typographies/Typographies';
import { $bgLight, $blue, $white, $white2 } from 'constants/colors';

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 30px;
  width: 100%;
  min-height: calc(100vh - 93px);
  background-color: ${$bgLight};
`;

export const StyledPaper = styled(Paper)`
  height: max-content;
  max-width: 1122px;
  background-color: ${$white};
  border: 1px solid ${$white2};
  border-radius: 8px;
`;

export const AddContactBox = styled(Box)`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${$blue};
  background-color: transparent;
`;

export const HeaderCellWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
`;

export const PositionedRow = styled(TableRow)`
  position: relative;
  top: 0;
`;

export const StyledTableCell = styled(TableCell)`
  height: 92px;
  padding-left: 30px;
  padding-right: 0;
`;

export const NameCellWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

export const PositionedStyledTypo = styled(TitleTypo)`
  position: relative;
  top: 35px;
`;

export const StyledBlackTypo = styled(BlackTypo)`
  margin-left: 24px;
`;

export const PopoversWrapper = styled(Box)`
  display: flex;
`;

export const rowTheme = createTheme({
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: 'rgba(55, 81, 255, 0.04)',
          },
        },
      },
    },
  },
});
