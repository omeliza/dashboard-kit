/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Button, Divider, IconButton, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

import sort from 'assets/table/sort.png';
import { useAppDispatch } from 'redux/hooks';
import { setOrder } from 'redux/slices/contacts/contacts.slice';
import { setTicketOrder } from 'redux/slices/tickets/tickets.slice';
import {
  StyledButtonGroup,
  StyledPopoverTitle,
} from 'components/SortPopover/styles';
import { FiltersTypo } from 'components/Typographies/Typographies';

export const SortPopover = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const setAsc = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location.pathname === '/contacts'
      ? dispatch(setOrder('asc'))
      : dispatch(setTicketOrder('asc'));
  };
  const setDesc = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location.pathname === '/contacts'
      ? dispatch(setOrder('desc'))
      : dispatch(setTicketOrder('desc'));
  };
  const setDefault = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    location.pathname === '/contacts'
      ? dispatch(setOrder(''))
      : dispatch(setTicketOrder(''));
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <IconButton sx={{ mr: '32px' }} {...bindTrigger(popupState)}>
            <img src={sort} alt="sort" />
            <FiltersTypo>Sort</FiltersTypo>
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
          >
            <Paper sx={{ p: 2 }}>
              <>
                <StyledPopoverTitle>Sort by name</StyledPopoverTitle>
                <StyledButtonGroup>
                  <Button variant="text" onClick={setAsc}>
                    ascending order
                  </Button>
                  <Button variant="text" onClick={setDesc}>
                    descending order
                  </Button>
                </StyledButtonGroup>
                <Divider />
                <Button
                  variant="text"
                  sx={{ ml: 4, mt: 1 }}
                  onClick={setDefault}
                >
                  Default
                </Button>
              </>
            </Paper>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default SortPopover;
