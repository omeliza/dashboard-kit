import React from 'react';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { TooltipProps } from 'recharts';

import bg from 'assets/tooltip.png';
import {
  TooltipValue,
  TooltipWrapper,
} from 'pages/Overview/Chart/CustomTooltip/styles';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <TooltipWrapper>
        <img src={bg} alt="tooltip" />
        <TooltipValue>{`${payload[0].value}`}</TooltipValue>
      </TooltipWrapper>
    );
  }
  return null;
};

export default CustomTooltip;
