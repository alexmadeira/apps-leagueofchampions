import styled from 'styled-components';
import Scrollbar from 'react-scrollbars-custom';
import { rgba } from 'polished';

import { Colors, Spaces, Breakpoints } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: calc(100% - ${Spaces.BasePadding} - 33px);
  max-width: 100%;
  margin-top: calc(${Spaces.BaseMargin} * 2);
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
  right: -51px;
  z-index: 5;
  transition: all 1s ease;
  ${Breakpoints.md} {
    display: none;
  }
  svg {
    transition: all 300ms ease;
  }
  &:hover {
    background: ${Colors.DarkHover};
  }
  &.close {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const ContainerSkins = styled(Scrollbar)`
  .ScrollbarsCustom-Content {
    padding-bottom: calc(${Spaces.BasePadding} * 2) !important;
  }
`;

export const SkinsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const Skin = styled.li`
  margin: calc(${Spaces.BaseMargin});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  ${Breakpoints.md} {
    max-width: 320px;
  }
  &:hover {
    box-shadow: 0px 0px 10px 5px ${Colors.DarkShadow};
    img {
      opacity: 1;
    }
  }
  &.active {
    cursor: initial;
    box-shadow: 0px 0px 10px 0px ${Colors.Active};

    img {
      opacity: 1;
    }
  }
`;
