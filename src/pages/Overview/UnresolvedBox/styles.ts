import { Box, styled } from '@mui/material';
import styling from 'styled-components';

import { $white, $white2, $black, $grey2, $grey3 } from 'constants/colors';

export const Wrapper = styled(Box)({
  gridArea: 'un',
  backgroundColor: `${$white}`,
  border: `1px solid ${$white2}`,
  borderRadius: '8px',
  paddingBottom: '26px',
  paddingTop: '32px',
  maxHeight: '345px',
});

export const RepeatedSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '58px',
  paddingLeft: '32px',
  paddingRight: '32px',
  '& > :first-of-type': {
    fontWeight: 600,
    letterSpacing: '0.2px',
    color: `${$black}`,
  },
  '& > :last-of-type': {
    fontWeight: 600,
    letterSpacing: '0.2px',
    color: `${$grey2}`,
  },
});

export const TitleWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
  paddingLeft: '32px',
  paddingRight: '32px',
});

export const SubTitleSupport = styling.span({ color: `${$grey3}` });
