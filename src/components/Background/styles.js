import styled, { keyframes } from 'styled-components';

const videoLoad = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  ${props =>
    props.skin
      ? `background: url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.skin}.jpg');`
      : ''}

  background-size: cover;
  background-position: top center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
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
export const VideoBox = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  opacity: 0;
  animation: ${videoLoad} 500ms linear;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;
export const Video = styled.video`
  width: 100%;
  position: absolute;
`;
export const PreLoad = styled.div`
  display: none;
`;
