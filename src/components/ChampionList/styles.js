import styled from 'styled-components';
import { Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  transition: all 500ms linear;
  display: flex;
  overflow-y: scroll;
  height: ${props => (props.height ? props.height : '0')};
  width: 100%;
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
  min-width: 250px;
  max-width: 20%;
  flex: 1;
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
