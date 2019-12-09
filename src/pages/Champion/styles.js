import styled from 'styled-components';

import { Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
`;

export const RiotLogo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: calc(${Spaces.BaseMargin} * 3);
  img {
    max-width: 100%;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.5));
  }
`;
