import styled from 'styled-components';

// import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

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

export const SkillButton = styled(ButtonBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  max-width: 50px;
  max-height: 50px;
  min-width: initial !important;
  min-height: initial !important;
  flex: 1;
  margin: 0 calc(${Spaces.BaseMargin} * 2) 0 0 !important;
  padding: 0 !important;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 3px 2px 5px ${Colors.Black};
  border: 1px solid ${Colors.Black};
  border-radius: 3px;
  transition: all 300ms linear;
  filter: grayscale(1);
  opacity: 0.8;
  &:hover {
    filter: grayscale(0.4);
  }

  &.active {
    filter: grayscale(0);
    border: 1px solid ${Colors.Active};
    opacity: 1;
  }
  ${Breakpoints.md} {
    margin-right: ${Spaces.BaseMargin}!important;
  }
  svg {
    max-width: 64px;
    max-height: 64px;
    flex: 1;
  }
`;
