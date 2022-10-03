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
  color: `${$grey}`,
  fill: `${$grey}`,
  letterSpacing: '0.2px',
  // '& img': {
  //   color: `${$grey}`,
  //   fill: `${$grey}`,
  // },
  '&& .Mui-selected, && .Mui-selected:hover': {
    color: `${$white3}`,
    fill: `${$white3}`,
    backgroundColor: 'rgba(159, 162, 180, 0.08)',
    borderLeft: `3px solid ${$white3}`,
    // '&, & .MuiListItemIcon-root': {
    //   color: 'black',
    // },
  },
  // '& .MuiListItemButton-root:hover': {
  //   '&, & .MuiListItemIcon-root': {
  //     color: 'black',
  //   },
  // },
});
