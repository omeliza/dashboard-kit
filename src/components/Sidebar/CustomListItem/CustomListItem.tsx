import React from 'react';
import {
  // createTheme,
  ListItemIcon,
  ListItemText,
  // ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ICustomListItem } from 'interfaces/interfaces';
import { CustomListItemButton } from 'components/Sidebar/CustomListItem/styles';
import { AppState } from 'store/reducers/rootReducer';
import { setSelectedIndex } from 'store/actions/sidebar/sidebarActions';

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
  const dispatch = useDispatch();
  const selectedIndex = useSelector(
    (state: AppState) => state.sidebar.selectedIndex,
  );
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
