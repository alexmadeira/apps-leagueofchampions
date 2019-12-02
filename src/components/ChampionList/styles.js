import styled from 'styled-components';
import { Spaces } from '~/styles/Metrics';

export const Container = styled.ul`
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
  min-width: 300px;
  width: 25%;
  max-width: 30%;
  flex: 1;
  cursor: pointer;
  img {
    width: 100%;
    margin: 0;
  }
`;
