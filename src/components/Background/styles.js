import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import { Breakpoints, Colors } from '~/styles/Metrics';

const videoLoad = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  background: ${Colors.Background};

  ${Breakpoints.md} {
    min-height: 100%;
  }

  &::before {
    content: '';
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: linear-gradient(
      ${rgba(Colors.Background, 0)} 70%,
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
    z-index: 1;
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
    width: 100%;
    opacity: 1;
    height: auto;
    position: absolute;
    border: none;
    background: ${Colors.Background};
    top: 0;
    left: 50%;
    transform: translate(-50%, 0px);
    ${Breakpoints.md} {
      min-width: 100%;
      width: auto;
      height: 100%;
    }
  }
`;
export const VideoBox = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  opacity: 0;
  animation: ${videoLoad} 500ms linear;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  left: 0;
  top: 0;
`;
export const Video = styled.video`
  width: 100%;
  position: absolute;
`;
export const PreLoad = styled.div`
  display: none;
`;
