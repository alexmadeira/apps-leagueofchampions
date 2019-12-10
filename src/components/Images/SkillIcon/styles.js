import styled from 'styled-components';
import Img from 'react-image';
import { Colors, Spaces } from '~/styles/Metrics';

export const Icon = styled(Img)`
  opacity: 0.8;
  max-width: 100%;
  &:hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 0 calc(${Spaces.BaseMargin} * 2) 0 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 3px 2px 5px ${Colors.Black};

  &.active {
    border-radius: 3px;
    border: 1px solid ${Colors.Active};
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
