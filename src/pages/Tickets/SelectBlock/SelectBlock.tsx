import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFormContext } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setPersonPriority } from 'redux/slices/tickets/tickets.slice';
import { $white4, $white5 } from 'constants/colors';

const priorities = ['low', 'normal', 'high'];

function getStyles(priority: string, personPriority: string, theme: Theme) {
  return {
    fontWeight:
      personPriority.indexOf(priority) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectBlock = () => {
  const theme = useTheme();
  const personPriority = useAppSelector(
    (state) => state.tickets.personPriority,
  );
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent<typeof personPriority>) => {
    const {
      target: { value },
    } = event;
    dispatch(setPersonPriority(value));
  };
  const { register } = useFormContext();
  return (
    <FormControl sx={{ mt: '6px', width: 316, height: 42 }} required>
      <Select
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('priority')}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={personPriority}
        onChange={handleChange}
        input={<OutlinedInput label="Choose priority" />}
        sx={{
          width: 316,
          height: 42,
          backgroundColor: `${$white4}`,
          border: `1px solid ${$white5}`,
          borderRadius: '8px',
          padding: '11px 16px',
        }}
      >
        {priorities.map((priority) => (
          <MenuItem
            key={priority}
            value={priority}
            style={getStyles(priority, personPriority, theme)}
          >
            {priority}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBlock;
