/* eslint-disable react/jsx-props-no-spreading */
import React, { ChangeEvent } from 'react';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { IconButton, Paper, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import filter from 'assets/table/filter.png';
import { FiltersTypo } from 'components/Typographies/Typographies';
import { AppState } from 'store/reducers/rootReducer';
import { setSearchName } from 'store/actions/contacts/contactActions';
import { setSearchedText } from 'store/actions/tickets/ticketActions';

export const FilterPopover = () => {
  const location = useLocation();
  const searchName = useSelector(
    (state: AppState) => state.contacts.searchName,
  );
  const searchedText = useSelector(
    (state: AppState) => state.tickets.searchedText,
  );

  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location.pathname === '/contacts'
      ? dispatch(setSearchName(e.target.value))
      : dispatch(setSearchedText(e.target.value));
  };
  const value = location.pathname === '/contacts' ? searchName : searchedText;

  const label =
    location.pathname === '/contacts' ? 'Search name' : 'Search text';
  const onClose = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location.pathname === '/contacts'
      ? dispatch(setSearchName(''))
      : dispatch(setSearchedText(''));
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <IconButton {...bindTrigger(popupState)}>
            <img src={filter} alt="filter" />
            <FiltersTypo>Filter</FiltersTypo>
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            onAuxClick={onClose}
            onClick={onClose}
          >
            <Paper sx={{ p: 2 }}>
              <TextField
                variant="outlined"
                label={label}
                value={value}
                onChange={handleChange}
              />
            </Paper>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default FilterPopover;
