import React from 'react';

import { $blue } from 'constants/colors';

const CastomisedActiveDot = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.16"
        cx="14"
        cy="14"
        r="13"
        stroke={$blue}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="14"
        cy="14"
        r="5"
        fill="white"
        stroke={$blue}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CastomisedActiveDot;
