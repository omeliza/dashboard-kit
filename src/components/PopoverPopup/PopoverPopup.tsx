import React, { FC } from 'react';
/* eslint-disable react/jsx-props-no-spreading */
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Button, ButtonGroup } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';

import { StyledIconButton } from 'components/PopoverPopup/styles';

interface IPopup {
  edit: () => void;
  deleteLine: () => void;
}
export const PopoverPopup: FC<IPopup> = ({ edit, deleteLine }) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <StyledIconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            {...bindTrigger(popupState)}
          >
            <MoreIcon />
          </StyledIconButton>
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
