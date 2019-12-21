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
  width: calc(100% - (${Spaces.BaseMargin} * 10));
  ${Breakpoints.md} {
    width: calc(100%);
    flex-direction: column;
    margin-left: 0;
  }
`;

export const PageContent = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  margin-left: calc(${Spaces.BaseMargin} * 5);

  ${Breakpoints.md} {
    flex-direction: column;
    padding-bottom: calc(15px * 4);
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
