import React from 'react';
import {
  // createTheme,
  ListItemIcon,
  ListItemText,
  // ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ICustomListItem } from 'interfaces/interfaces';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSelectedIndex } from 'redux/slices/sidebar/sidebar.slice';
import { CustomListItemButton } from 'components/Sidebar/CustomListItem/styles';

// const theme = createTheme({
//   components: {
//     MuiListItemButton: {
//       styleOverrides: {
//         root: {
//           '.Mui-selected': {
//             color: 'red',
//             '& .MuiListItemIcon-root': {
//               color: 'red',
//             },
//           },
//         },
//       },
//     },
//   },
// });
const CustomListItem = ({
  itemIndex,
  name,
  link,
  children,
}: ICustomListItem) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedIndex = useAppSelector((state) => state.sidebar.selectedIndex);
  const switchPage = () => {
    dispatch(setSelectedIndex(itemIndex));
    navigate(link);
  };
  return (
    // <ThemeProvider theme={theme}>
    <CustomListItemButton
      selected={selectedIndex === itemIndex}
      onClick={switchPage}
    >
      <ListItemIcon sx={{ minWidth: '40px' }}>{children}</ListItemIcon>
      <ListItemText primary={name} />
    </CustomListItemButton>
    // </ThemeProvider>
  );
};

export default CustomListItem;
