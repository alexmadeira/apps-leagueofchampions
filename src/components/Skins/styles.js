import styled from 'styled-components';
import Scrollbar from 'react-scrollbars-custom';

import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled(Scrollbar)`
  .ScrollbarsCustom-Content {
    padding-bottom: calc(${Spaces.BasePadding} * 2) !important;
  }
`;

export const SkinList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const Skin = styled.li`
  margin: calc(${Spaces.BaseMargin});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  flex: 1;
  min-width: 200px;
  max-width: 320px;
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
