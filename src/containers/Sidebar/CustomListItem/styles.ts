import { ListItemButton, styled } from '@mui/material';

import { $bg } from 'constants/colors';

export const CustomListItemButton = styled(ListItemButton)({
  height: '56px',
  borderLeft: `3px solid ${$bg}`,
  // '&.Mui-selected .MuiSvgIcon-root': {
  //   color: 'red',
  // },
});
