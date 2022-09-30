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

// import CastomisedActiveDot from 'pages/Overview/Chart/CastomisedActiveDot/CastomisedActiveDot';
import { $blue, $grey2, $white2, $white6 } from 'constants/colors';
import CustomTooltip from 'pages/Overview/Chart/CustomTooltip/CustomTooltip';

const data = [
  {
    name: '0',
    Today: 14,
    Yesterday: 33,
  },
  {
    name: 1,
    Today: 20,
    Yesterday: 34,
  },
  {
    name: 2,
    Today: 26.5,
    Yesterday: 32,
  },
  {
    name: 3,
    Today: 29.5,
    Yesterday: 27,
  },
  {
    name: 4,
    Today: 29,
    Yesterday: 23,
  },
  {
    name: 5,
    Today: 28,
    Yesterday: 24,
  },
  {
    name: 6,
    Today: 33,
    Yesterday: 27,
  },
  {
    name: 7,
    Today: 44.5,
    Yesterday: 32,
  },
  {
    name: 8,
    Today: 51,
    Yesterday: 34,
  },
  {
    name: 9,
    Today: 41,
    Yesterday: 33.5,
  },
  {
    name: 10,
    Today: 26.5,
    Yesterday: 31.5,
  },
  {
    name: 11,
    Today: 19,
    Yesterday: 25,
  },
  {
    name: 12,
    Today: 18,
    Yesterday: 19,
  },
  {
    name: 13,
    Today: 24.5,
    Yesterday: 17,
  },
  {
    name: 14,
    Today: 37,
    Yesterday: 22.5,
  },
  {
    name: 15,
    Today: 44.5,
    Yesterday: 36,
  },
  {
    name: 16,
    Today: 48,
    Yesterday: 35,
  },
  {
    name: 17,
    Today: 29.5,
    Yesterday: 46.5,
  },
  {
    name: 18,
    Today: 42,
    Yesterday: 32,
  },
  {
    name: 19,
    Today: 37.5,
    Yesterday: 36,
  },
  {
    name: 20,
    Today: undefined,
    Yesterday: undefined,
  },
  {
    name: 21,
    Today: undefined,
    Yesterday: undefined,
  },
  {
    name: 22,
    Today: undefined,
    yesterday: undefined,
  },
];
const Chart = () => {
  return (
    <div style={{ width: '690px', height: '450px', marginTop: '-40px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={700}
          height={450}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
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
            // activeDot={<CastomisedActiveDot />}
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
