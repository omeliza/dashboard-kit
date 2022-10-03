import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';
import React from 'react';

const TicketsIcon = (props: SvgIconProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.55556 5.33329H12.4444V10.6666H3.55556V5.33329ZM14.6667 7.99996C14.6667 8.73635 15.2636 9.33329 16 9.33329V12C16 12.7363 15.4031 13.3333 14.6667 13.3333H1.33333C0.596944 13.3333 0 12.7363 0 12V9.33329C0.736389 9.33329 1.33333 8.73635 1.33333 7.99996C1.33333 7.26357 0.736389 6.66663 0 6.66663V3.99996C0 3.26357 0.596944 2.66663 1.33333 2.66663H14.6667C15.4031 2.66663 16 3.26357 16 3.99996V6.66663C15.2636 6.66663 14.6667 7.26357 14.6667 7.99996ZM13.3333 5.11107C13.3333 4.74288 13.0349 4.4444 12.6667 4.4444H3.33333C2.96514 4.4444 2.66667 4.74288 2.66667 5.11107V10.8888C2.66667 11.257 2.96514 11.5555 3.33333 11.5555H12.6667C13.0349 11.5555 13.3333 11.257 13.3333 10.8888V5.11107Z"
          fill="#DDE2FF"
        />
      </svg>
    </SvgIcon>
  );
};

export default TicketsIcon;
