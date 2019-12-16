import styled from 'styled-components';

import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const SkillButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  width: 50px;
  height: 50px;
  margin: 0 calc(${Spaces.BaseMargin} * 2) 0 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 3px 2px 5px ${Colors.Black};
  border: 1px solid ${Colors.Black};
  border-radius: 3px;
  transition: all 300ms linear;
  &.active {
    border: 1px solid ${Colors.Active};
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
