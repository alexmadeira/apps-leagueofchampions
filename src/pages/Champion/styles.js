import styled from 'styled-components';

import { Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  background: url(${props => (props.skin ? props.skin : '')});
  display: flex;
  flex-direction: column;
  flex: 1;
  background-size: cover;
  background-position: top center;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  transition: all 500ms linear;
  &::before {
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }
`;

export const PreLoad = styled.div`
  display: none;
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
