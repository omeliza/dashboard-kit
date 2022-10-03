import { Box, Card, styled, Typography } from '@mui/material';

import {
  $bgLight,
  $black,
  $blue,
  $grey2,
  $grey4,
  $white,
  $white2,
} from 'constants/colors';

export const OverviewWrapper = styled(Card)`
  background-color: ${$bgLight};
  padding: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 4fr 2.5fr;
  grid-template-areas:
    'c1 c2 c3 c4'
    'tr tr tr tr'
    'un un ta ta';
`;

export const TodayTrendsWrapper = styled(Box)`
  grid-area: tr;
  background: ${$white};
  border: 1px solid ${$white2};
  border-radius: 8px;
  padding: 32px 0 32px 32px;
  max-height: 546px;
`;

export const TodayTrendTypo = styled(Typography)`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: ${$black};
  margin-bottom: 8px;
`;

export const DateTypo = styled(Typography)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: ${$grey2};
`;

export const ChartSideCardWrapper = styled(Box)`
  display: flex;
`;

export const BottomCardTitle = styled(Typography)`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: ${$black};
`;

export const BottomDetailsBtn = styled(Typography)`
  color: ${$blue};
`;

export const BottomSubtitle = styled(Typography)`
  margin-bottom: 25px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: ${$grey2};
  padding-left: 30px;
  padding-right: 30px;
`;

export const NewTaskTypo = styled(Typography)`
  font-weight: 60;
  letter-spacing: 0.2px;
  color: ${$grey4};
`;

export const BottomTitleWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-left: 32px;
  padding-right: 32px;
`;
