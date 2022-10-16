import React, { FC } from 'react';
import { ButtonGroup, Button } from '@mui/material';

interface DeleteResetProps {
  index: number;
  remove: (index: number) => void;
  reset: () => void;
}

const DeleteResetGroup: FC<DeleteResetProps> = ({ index, remove, reset }) => {
  return (
    <ButtonGroup
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mt: '24px',
        mb: '24px',
      }}
    >
      <Button
        variant="outlined"
        type="button"
        color="warning"
        fullWidth
        onClick={() => remove(index)}
      >
        Delete
      </Button>
      <Button
        variant="outlined"
        type="button"
        fullWidth
        color="secondary"
        onClick={() => reset()}
      >
        Reset
      </Button>
    </ButtonGroup>
  );
};

export default DeleteResetGroup;
