import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import { Breakpoints, Colors } from '~/styles/Metrics';

const videoLoad = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  background-image: linear-gradient(
      ${rgba(Colors.Background, 0)} 0%,
      ${Colors.Background} 48%
    ),
    ${props =>
      props.skin
        ? `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.skin}.jpg)`
        : `url()`};

  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 500ms linear;
  ${Breakpoints.sm} {
    background-size: 200%;
    background-position: top center;
    height: 59vh;
  }

  &::before {
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: linear-gradient(
      rgba(0, 0, 0, 0.2) 80%,
      ${Colors.Background} 100%
    );
    position: absolute;
  }
`;
export const VideoBox = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  opacity: 0;
  animation: ${videoLoad} 500ms linear;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  ${Breakpoints.sm} {
    display: none;
  }
`;
export const Video = styled.video`
  width: 100%;
  position: absolute;
`;
export const PreLoad = styled.div`
  display: none;
`;
