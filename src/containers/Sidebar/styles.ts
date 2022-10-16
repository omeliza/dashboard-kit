import { Box, List, styled } from '@mui/material';

import { $bg, $grey, $white3 } from 'constants/colors';

export const StyledBox = styled(Box)`
  grid-area: s;
  position: static;
  width: 255px;
  min-height: 100vh;
  background-color: ${$bg};
`;

export const StyledList = styled(List)({
  // selected and (selected + hover) states
  color: `${$grey}`,
  '&& .Mui-selected, && .Mui-selected:hover': {
    borderLeft: `3px solid ${$white3}`,
    '&, & .MuiListItemIcon-root': {
      // paddingTop: '5px',
      color: `${$white3}`,
    },
  },
  // hover states
  '& .MuiListItemButton-root:': {
    // paddingTop: '5px',
    '&, & .MuiListItemIcon-root': {
      color: `${$grey}`,
    },
  },
});
