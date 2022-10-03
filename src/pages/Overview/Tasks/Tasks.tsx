import React, { FC } from 'react';
import { Divider, FormControlLabel, IconButton } from '@mui/material';
import MuiCheckbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import add from 'assets/add.png';
import { ICheckbox } from 'interfaces/interfaces';
import { Section, Wrapper } from 'pages/Overview/Tasks/styles';
import {
  BottomCardTitle,
  BottomDetailsBtn,
  BottomSubtitle,
  BottomTitleWrapper,
  NewTaskTypo,
} from 'pages/Overview/styles';
import { mockTasks } from 'pages/Overview/Tasks/mockTasks';

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
      <BottomTitleWrapper>
        <BottomCardTitle>Tasks</BottomCardTitle>
        <BottomDetailsBtn>View details</BottomDetailsBtn>
      </BottomTitleWrapper>
      <BottomSubtitle>Today</BottomSubtitle>
      <Section>
        <NewTaskTypo>Create new task</NewTaskTypo>
        <IconButton sx={{ p: 0 }}>
          <img src={add} alt="add" />
        </IconButton>
      </Section>
      <Divider />
      {mockTasks.map((item, i) => (
        <>
          <Section>
            <Checkbox
              label={item.label}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
            <IconButton sx={{ p: 0 }}>
              <img src={item.src} alt={item.alt} />
            </IconButton>
          </Section>
          {i !== mockTasks.length - 1 && <Divider />}
        </>
      ))}
    </Wrapper>
  );
};

export default Tasks;
