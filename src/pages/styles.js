import styled from 'styled-components';
import { Spaces, Breakpoints } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  z-index: 5;
  margin-left: calc(${Spaces.BaseMargin} * 5);
  height: 100%;

  ${Breakpoints.md} {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  flex: 8;
  width: 100%;
  min-height: 100%;
  padding: 0 ${Spaces.BasePadding};
  align-self: stretch;
`;
