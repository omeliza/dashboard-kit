import React, { FC } from 'react';
/* eslint-disable react/jsx-props-no-spreading */
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';

import { $grey4 } from 'constants/colors';

interface IPopup {
  edit: () => void;
  deleteLine: () => void;
}
export const PopoverPopup: FC<IPopup> = ({ edit, deleteLine }) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            sx={{
              mt: 'auto',
              mb: 'auto',
              color: `${$grey4}`,
              position: 'absolute',
              right: '35px',
              top: '23px',
            }}
            {...bindTrigger(popupState)}
          >
            <MoreIcon />
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
            <ButtonGroup>
              <>
                <Button component="button" onClick={edit} type="button">
                  Edit
                </Button>
                <Button color="warning" type="button" onClick={deleteLine}>
                  Delete
                </Button>
              </>
            </ButtonGroup>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default PopoverPopup;
