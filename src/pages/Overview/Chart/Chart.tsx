import React from 'react';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { $blue, $grey2, $white2, $white6 } from 'constants/colors';
import CustomTooltip from 'pages/Overview/Chart/CustomTooltip/CustomTooltip';
import { data } from 'pages/Overview/Chart/mockData';
import { wrapperStyles } from 'pages/Overview/Chart/style';

const Chart = () => {
  return (
    <div style={wrapperStyles}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={700}
          height={450}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 0,
            left: -10,
          }}
        >
          <CartesianGrid stroke={`${$white6}`} vertical={false} />
          <defs>
            <linearGradient id="colorToday" x1="0" y1="0" x2="0" y2="1">
              <stop offset="55%" stopColor={$blue} stopOpacity={0.2} />
              <stop offset="95%" stopColor={$blue} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            scale="band"
            tickLine={false}
            axisLine={{ stroke: `${$white6}` }}
            tick={{
              fill: `${$grey2}`,
              fontSize: '10px',
              letterSpacing: '0.1px',
              dy: 10,
            }}
          />
          <YAxis
            type="number"
            tickCount={7}
            domain={[0, 60]}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: `${$grey2}`,
              fontSize: '10px',
              letterSpacing: '0.1px',
              dy: -13,
              dx: -20,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            height={100}
            style={{ paddingRight: '20px' }}
            iconType="plainline"
          />
          <Area
            type="monotone"
            dataKey="Today"
            fill="url(#colorToday)"
            stroke={$blue}
            strokeWidth="2px"
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="Yesterday"
            stroke={$white2}
            strokeWidth="2px"
            activeDot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
