import { Box, Divider, styled, Typography } from '@mui/material';
import React from 'react';

import {
  $black,
  $blue,
  $grey2,
  $grey3,
  $white,
  $white2,
} from 'constants/colors';

const Wrapper = styled(Box)({
  gridArea: 'un',
  backgroundColor: `${$white}`,
  border: `1px solid ${$white2}`,
  borderRadius: '8px',
  paddingBottom: '26px',
  paddingTop: '32px',
  maxHeight: '345px',
});

const RepeatedSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '58px',
  paddingLeft: '32px',
  paddingRight: '32px',
  '& > :first-of-type': {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: `${$black}`,
  },
  '& > :last-of-type': {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: `${$grey2}`,
  },
});

const UnresolvedBox = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: '8px',
          pl: '32px',
          pr: '32px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '19px',
            lineHeight: '24px',
            letterSpacing: '0.4px',
            color: `${$black}`,
          }}
        >
          Unresolved tickets
        </Typography>
        <Typography sx={{ color: `${$blue}` }}>View details</Typography>
      </Box>
      <Typography
        sx={{
          mb: '25px',
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.1px',
          color: `${$grey2}`,
          pl: '30px',
          pr: '30px',
        }}
      >
        Group: <span style={{ color: `${$grey3}` }}>Support</span>
      </Typography>
      <Box>
        <RepeatedSection>
          <Typography>Waiting on Feature Request</Typography>
          <Typography>4238</Typography>
        </RepeatedSection>
        <Divider />
        <RepeatedSection>
          <Typography>Awaiting Customer Response</Typography>
          <Typography>1005</Typography>
        </RepeatedSection>
        <Divider />
        <RepeatedSection>
          <Typography>Awaiting Developer Fix</Typography>
          <Typography>914</Typography>
        </RepeatedSection>
        <Divider />
        <RepeatedSection>
          <Typography>Pending</Typography>
          <Typography>218</Typography>
        </RepeatedSection>
      </Box>
    </Wrapper>
  );
};

export default UnresolvedBox;
