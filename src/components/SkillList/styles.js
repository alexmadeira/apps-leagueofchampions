import styled from 'styled-components';

import { Spaces, Colors, Breakpoints } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${Breakpoints.md} {
    width: 100%;
    justify-content: center;
  }
`;

export const SkillButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  max-width: 64px;
  max-height: 64px;
  flex: 1;
  margin: 0 calc(${Spaces.BaseMargin} * 2) 0 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 3px 2px 5px ${Colors.Black};
  border: 1px solid ${Colors.Black};
  border-radius: 3px;
  transition: all 300ms linear;
  ${Breakpoints.md} {
    margin-right: ${Spaces.BaseMargin};
  }

  &.active {
    border: 1px solid ${Colors.Active};
  }
  svg {
    max-width: 64px;
    max-height: 64px;
    flex: 1;
  }
`;
