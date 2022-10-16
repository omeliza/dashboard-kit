import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 255px 1fr;
  grid-template-rows: 93px 1fr;
  grid-template-areas:
    's h'
    's c'
    's c';
`;
