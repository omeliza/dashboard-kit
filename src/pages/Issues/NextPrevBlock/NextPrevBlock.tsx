import React, { FC } from 'react';
import { ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BackButton, NextButton } from 'pages/Issues/styles';

interface NextBlockProp {
  name: string;
}

const NextPrevBlock: FC<NextBlockProp> = ({ name }) => {
  const navigate = useNavigate();

  return (
    <ButtonGroup
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <BackButton type="button" variant="text" onClick={() => navigate(-1)}>
        Back
      </BackButton>
      <NextButton variant="text" type="submit">
        {name}
      </NextButton>
    </ButtonGroup>
  );
};

export default NextPrevBlock;
