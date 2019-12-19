import styled from 'styled-components';

import { Spaces, Breakpoints } from '~/styles/Metrics';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: ${Spaces.BaseMargin};
  padding: 0 calc(${Spaces.BasePadding} * 3);
  ${Breakpoints.xl} {
    padding: 0 calc(${Spaces.BasePadding});
  }

  ${Breakpoints.md} {
    width: 100vw;
    margin-top: ${Spaces.BaseMargin};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.5));
    ${Breakpoints.md} {
      width: 20vw;
      margin-top: 0;
    }
    ${Breakpoints.sm} {
      width: 120px;
    }
  }
`;
