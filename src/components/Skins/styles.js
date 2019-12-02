import styled from 'styled-components';
import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: calc(${Spaces.BaseMargin} * 2);
`;

export const Skin = styled.li`
  margin-right: calc(${Spaces.BaseMargin} * 2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 140px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px 5px ${Colors.DarkShadow};
    img {
      opacity: 1;
    }
  }
  &.active {
    cursor: initial;
    box-shadow: 0px 0px 10px 0px ${Colors.Active};

    img {
      opacity: 1;
    }
  }
  img {
    max-height: 100%;
    opacity: 0.6;
  }
`;
