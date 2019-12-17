import styled from 'styled-components';
import { Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  margin-left: calc(${Spaces.BaseMargin} * 5);
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  flex: 8;
  width: 100%;
  height: 100%;
  padding: 0 ${Spaces.BasePadding};
`;
