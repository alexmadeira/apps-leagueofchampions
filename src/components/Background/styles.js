import styled, { keyframes } from 'styled-components';

import { rgba } from 'polished';

import { Breakpoints, Colors } from '~/styles/Metrics';

const videoLoad = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  top: 0;
  width: calc(100%);
  position: absolute;
  transition: all 500ms linear;
  overflow: hidden;
  z-index: 1;
  position: absolute;

  ${Breakpoints.xs} {
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
    position: absolute;
    background: linear-gradient(
      ${rgba(Colors.Background, 0)} 80%,
      ${Colors.Background} 90%
    );
  }
  &::after {
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      to right,
      ${Colors.Background} 0%,
      ${rgba(Colors.Background, 0)} 15%,
      ${rgba(Colors.Background, 0)} 50%,
      ${rgba(Colors.Background, 0)} 85%,
      ${Colors.Background} 100%
    );
  }
  img {
    min-width: 100%;
    height: 100%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0px);
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
`;
export const Video = styled.video`
  width: 100%;
  position: absolute;
`;
export const PreLoad = styled.div`
  display: none;
`;
