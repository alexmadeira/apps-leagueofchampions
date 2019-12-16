import styled from 'styled-components';
import { rgba } from 'polished';

import { Colors } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  justify-content: flex-start;
  align-items: flex-start;
  max-height: 100%;
  max-width: 100%;
  height: 55vh;
  margin-top: 100px;
`;

export const SkinsBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 500ms ease;
  & > div {
    opacity: 1;
  }
  &.close {
    width: 0;
    & > div {
      opacity: 0;
    }
  }
`;

export const ToogleSkins = styled.div`
  opacity: 1 !important;
  border: 1px solid ${rgba(Colors.Active, 0.27)};
  background: ${rgba(Colors.DarkHover, 0.8)};
  color: ${Colors.Active};
  cursor: pointer;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  line-height: 1px;
  position: absolute;
  right: 0;
  z-index: 5;
  transition: all 1s ease;
  svg {
    transition: all 300ms ease;
  }
  &:hover {
    background: ${Colors.DarkHover};
  }
  &.close {
    right: -51px;
    svg {
      transform: rotate(180deg);
    }
  }
`;
