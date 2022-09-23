import React from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ICustomListItem } from 'interfaces/interfaces';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSelectedIndex } from 'redux/slices/sidebar/sidebar.slice';
import { $bg } from 'constants/colors';

const CustomListItemButton = styled(ListItemButton)({
  height: '56px',
  borderLeft: `3px solid ${$bg}`,
});

const CustomListItem = ({ src, itemIndex, name, link }: ICustomListItem) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedIndex = useAppSelector(
    (state) => state.sidebarSlice.selectedIndex,
  );
  const switchPage = () => {
    dispatch(setSelectedIndex(itemIndex));
    navigate(link);
  };
  return (
    <CustomListItemButton
      selected={selectedIndex === itemIndex}
      onClick={switchPage}
    >
      <ListItemIcon sx={{ minWidth: '40px' }}>
        <img src={src} alt={name} />
      </ListItemIcon>
      <ListItemText primary={name} />
    </CustomListItemButton>
  );
};

export default CustomListItem;
