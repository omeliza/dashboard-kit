import React, { FC } from 'react';
import {
  Box,
  Typography,
  styled,
  Divider,
  FormControlLabel,
  IconButton,
} from '@mui/material';
import MuiCheckbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import add from 'assets/add.png';
import green from 'assets/new.png';
import grey from 'assets/default.png';
import yellow from 'assets/urgent.png';
import {
  $black,
  $blue,
  $grey2,
  $grey4,
  $white,
  $white2,
} from 'constants/colors';
import { ICheckbox } from 'interfaces/interfaces';

const Wrapper = styled(Box)({
  gridArea: 'ta',
  background: `${$white}`,
  border: `1px solid ${$white2}`,
  borderRadius: '8px',
  paddingTop: '32px',
  paddingBottom: '26px',
  maxHeight: '345px',
});

const Section = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '58px',
  paddingLeft: '32px',
  paddingRight: '32px',
});

const Checkbox: FC<ICheckbox> = ({ label, icon, checkedIcon }) => {
  return (
    <FormControlLabel
      label={label}
      control={<MuiCheckbox icon={icon} checkedIcon={checkedIcon} />}
    />
  );
};

const Tasks = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: '8px',
          pl: '32px',
          pr: '32px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '19px',
            lineHeight: '24px',
            letterSpacing: '0.4px',
            color: `${$black}`,
          }}
        >
          Tasks
        </Typography>
        <Typography sx={{ color: `${$blue}` }}>View details</Typography>
      </Box>
      <Typography
        sx={{
          mb: '25px',
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.1px',
          color: `${$grey2}`,
          pl: '30px',
          pr: '30px',
        }}
      >
        Today
      </Typography>
      <Section>
        <Typography
          sx={{
            fontWeight: 60,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.2px',
            color: `${$grey4}`,
          }}
        >
          Create new task
        </Typography>
        <IconButton sx={{ p: 0 }}>
          <img src={add} alt="add" />
        </IconButton>
      </Section>
      <Divider />
      <Section>
        <Checkbox
          label="Finish ticket update"
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <IconButton sx={{ p: 0 }}>
          <img src={yellow} alt="urgent" />
        </IconButton>
      </Section>
      <Divider />
      <Section>
        <Checkbox
          label="Create new ticket example"
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <IconButton sx={{ p: 0 }}>
          <img src={green} alt="new" />
        </IconButton>
      </Section>
      <Divider />
      <Section>
        <Checkbox
          label="Update ticket report"
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <IconButton sx={{ p: 0 }}>
          <img src={grey} alt="default" />
        </IconButton>
      </Section>
    </Wrapper>
  );
};

export default Tasks;
