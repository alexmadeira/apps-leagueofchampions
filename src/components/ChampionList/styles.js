import styled from 'styled-components';
import Scrollbar from 'react-scrollbars-custom';
import { rgba } from 'polished';

import { Spaces, Colors, Breakpoints } from '~/styles/Metrics';

export const Container = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  transition: all 500ms linear;
  display: flex;
  height: ${props => (props.height ? props.height : '85vh')};
  width: 100%;
`;
export const ChampionContent = styled(Scrollbar)`
  .ScrollbarsCustom-Track {
    background: ${rgba(Colors.Base, 0.4)}!important;
  }
  .ScrollbarsCustom-Thumb {
    background: ${rgba(Colors.Active, 0.4)}!important;
  }
  .ScrollbarsCustom-Content {
    padding-bottom: calc(${Spaces.BasePadding} * 2) !important;
  }
`;

export const ChampionContentList = styled.ul`
  list-style: none;
  flex: 1;
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Champion = styled.li`
  margin: ${Spaces.BaseMargin};
  min-width: 200px;
  max-width: 250px;
  flex: 1;
  ${Breakpoints.md} {
    max-width: 320px;
  }
  cursor: pointer;
  img {
    transition: all 1s ease;
  }
  &:hover {
    img {
      transform: scale(1.02);
    }
  }
`;
