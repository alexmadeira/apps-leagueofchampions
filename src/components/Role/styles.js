import styled from 'styled-components';
import { Spaces, Breakpoints } from '~/styles/Metrics';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-left: calc(${Spaces.BaseMargin} * 2);
  ${Breakpoints.sm} {
    align-items: flex-start;
    flex-direction: row;
    margin-left: 0;
    margin-top: ${Spaces.BaseMargin};
  }
`;

export const RoleItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-left: ${Spaces.BaseMargin};
  ${Breakpoints.sm} {
    &:first-child {
      margin-left: 0;
    }
  }
  img {
    max-height: 100%;
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5));
  }
`;
