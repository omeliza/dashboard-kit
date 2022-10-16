import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';
import React from 'react';

const OverviewIcon = (props: SvgIconProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_584_253)">
        <path d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z" />
      </g>
      <defs>
        <clipPath id="clip0_584_253">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default OverviewIcon;
