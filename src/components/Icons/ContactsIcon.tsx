import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';
import React from 'react';

const ContactsIcon = (props: SvgIconProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <path d="M2.4 7.1999C3.2825 7.1999 4 6.4824 4 5.5999C4 4.7174 3.2825 3.9999 2.4 3.9999C1.5175 3.9999 0.8 4.7174 0.8 5.5999C0.8 6.4824 1.5175 7.1999 2.4 7.1999ZM13.6 7.1999C14.4825 7.1999 15.2 6.4824 15.2 5.5999C15.2 4.7174 14.4825 3.9999 13.6 3.9999C12.7175 3.9999 12 4.7174 12 5.5999C12 6.4824 12.7175 7.1999 13.6 7.1999ZM14.4 7.9999H12.8C12.36 7.9999 11.9625 8.1774 11.6725 8.4649C12.68 9.0174 13.395 10.0149 13.55 11.1999H15.2C15.6425 11.1999 16 10.8424 16 10.3999V9.5999C16 8.7174 15.2825 7.9999 14.4 7.9999ZM8 7.9999C9.5475 7.9999 10.8 6.7474 10.8 5.1999C10.8 3.6524 9.5475 2.3999 8 2.3999C6.4525 2.3999 5.2 3.6524 5.2 5.1999C5.2 6.7474 6.4525 7.9999 8 7.9999ZM9.92 8.7999H9.7125C9.1925 9.0499 8.615 9.1999 8 9.1999C7.385 9.1999 6.81 9.0499 6.2875 8.7999H6.08C4.49 8.7999 3.2 10.0899 3.2 11.6799V12.3999C3.2 13.0624 3.7375 13.5999 4.4 13.5999H11.6C12.2625 13.5999 12.8 13.0624 12.8 12.3999V11.6799C12.8 10.0899 11.51 8.7999 9.92 8.7999ZM4.3275 8.4649C4.0375 8.1774 3.64 7.9999 3.2 7.9999H1.6C0.7175 7.9999 0 8.7174 0 9.5999V10.3999C0 10.8424 0.3575 11.1999 0.8 11.1999H2.4475C2.605 10.0149 3.32 9.0174 4.3275 8.4649Z" />
    </SvgIcon>
  );
};

export default ContactsIcon;
