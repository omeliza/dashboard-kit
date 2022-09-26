import React from 'react';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { TooltipProps } from 'recharts';

import bg from 'assets/tooltip.png';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          position: 'relative',
          top: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={bg} alt="tooltip" />
        <div
          style={{ position: 'absolute', top: 8 }}
        >{`${payload[0].value}`}</div>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
