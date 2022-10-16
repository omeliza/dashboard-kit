import React, { FC, MouseEventHandler } from 'react';
import { Button } from '@mui/material';

import { $red } from 'constants/colors';

interface CloseBtnPropsType {
  closeForm: MouseEventHandler<HTMLButtonElement>;
}
const CloseFormBtn: FC<CloseBtnPropsType> = ({ closeForm }) => {
  return (
    <Button
      style={{
        position: 'absolute',
        right: '10px',
        top: '10px',
        color: `${$red}`,
      }}
      onClick={closeForm}
    >
      &#10006;
    </Button>
  );
};

export default CloseFormBtn;
