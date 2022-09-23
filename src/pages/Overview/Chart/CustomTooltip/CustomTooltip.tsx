import React from 'react';

import bg from 'assets/tooltip.png';

const CustomTooltip = ({ active, payload }: any) => {
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
