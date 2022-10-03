import React from 'react';

import Cards from 'pages/Overview/Cards/Cards';
import Chart from 'pages/Overview/Chart/Chart';
import SideCards from 'pages/Overview/SideCards/SideCards';
import UnresolvedBox from 'pages/Overview/UnresolvedBox/UnresolvedBox';
import Tasks from 'pages/Overview/Tasks/Tasks';
import {
  ChartSideCardWrapper,
  DateTypo,
  OverviewWrapper,
  TodayTrendsWrapper,
  TodayTrendTypo,
} from 'pages/Overview/styles';

const Overview = () => (
  <OverviewWrapper>
    <Cards />
    <TodayTrendsWrapper>
      <TodayTrendTypo>Today’s trends</TodayTrendTypo>
      <DateTypo>as of 25 May 2019, 09:41 PM</DateTypo>
      <ChartSideCardWrapper>
        <Chart />
        <SideCards />
      </ChartSideCardWrapper>
    </TodayTrendsWrapper>
    <UnresolvedBox />
    <Tasks />
  </OverviewWrapper>
);

export default Overview;
