import styled from 'styled-components';
import { Spaces, Colors } from '~/styles/Metrics';

import logoImage from '~/assets/logo/lol.png';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${Spaces.BasePadding} calc(${Spaces.BasePadding} * 4);
  position: relative;
  z-index: 1;
`;

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-indent: -9999em;
  background: url(${logoImage});
  background-repeat: no-repeat;
  background-size: contain;
  height: 60px;
  width: 60px;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${Spaces.BaseMargin};

  color: ${Colors.Default};
  text-transform: uppercase;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${Colors.Active};
    text-decoration: underline;
  }
  &.active {
    color: ${Colors.Active};
  }
`;
