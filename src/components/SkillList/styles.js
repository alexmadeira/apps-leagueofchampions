import styled from 'styled-components';
import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Skill = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  margin: 0 calc(${Spaces.BaseMargin} * 2) 0 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.5);

  &.active {
    border-radius: 3px;
    border: 1px solid ${Colors.Active};
  }
  &:hover {
    img {
      opacity: 1;
    }
  }
  img {
    opacity: 0.8;
    max-width: 100%;
  }
`;
