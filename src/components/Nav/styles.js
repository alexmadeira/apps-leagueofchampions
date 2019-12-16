import styled from 'styled-components';
import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-direction: column;
  width: 50px;
  justify-content: flex-start;
  align-items: center;
  margin: initial;
  position: absolute;
  left: calc(${Spaces.BaseMargin} * 1.2);
  top: 50%;
  transform: translate(0px, -50%);
`;

export const NavItem = styled.li`
  margin: calc(${Spaces.BaseMargin} * 1.3) 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      height: 22px;
      width: 22px;
      border-radius: 50%;
      border: 1px solid ${Colors.Active};
    }
    &::after {
      transition: all 300ms linear;
      position: absolute;
      opacity: 0;
      content: '';
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background: ${Colors.Active};
      background: linear-gradient(
        0deg,
        ${Colors.Base} 0%,
        ${Colors.Active} 70%
      );
    }
    &.active::after {
      opacity: 1;
    }
  }
`;
