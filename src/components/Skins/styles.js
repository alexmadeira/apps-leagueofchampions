import styled from 'styled-components';
import Scrollbar from 'react-scrollbars-custom';

import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled(Scrollbar)`
  width: 60vw !important;
  height: 215px !important;
  justify-self: flex-end;
  margin-top: auto;
`;

export const SkinList = styled.ul`
  width: ${props => (props.width ? props.width : '')}px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Skin = styled.li`
  margin: 0 calc(${Spaces.BaseMargin} * 2) 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  height: 200px;

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
`;
