import styled from 'styled-components';
import { rgba } from 'polished';

import { Fonts, Colors } from '~/styles/Metrics';
import Spaces from '~/styles/Metrics/spaces';

export const Container = styled.div`
  background: ${rgba(Colors.Black, 0.8)};
  position: fixed;
  left: 0;
  top: -100vh;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: top 300ms linear;
  &.active {
    top: 0;
  }
`;

export const Close = styled.span`
  color: ${Colors.Default};
  font-size: ${Fonts.sizes.Icons};
  right: calc(${Spaces.BaseMargin} * 5);
  top: calc(${Spaces.BaseMargin} * 2);
  position: absolute;
  cursor: pointer;
  &:hover {
    color: ${Colors.Active};
  }
`;
export const SearchBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  input {
    border: none;
    border-bottom: 1px solid ${Colors.Default};
    color: ${Colors.Active};
    background: transparent;
    font-family: ${Fonts.family.Cinzel};
    font-weight: bold;
    width: 100%;
    text-align: center;
    font-size: ${Fonts.sizes.Bigger};
  }
`;

export const ResultBox = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  transition: all 500ms linear;
  display: flex;
  overflow-y: scroll;
  visibility: hidden;
  height: 0;
  width: 100%;
  &.active {
    visibility: visible;
    height: 85vh;
  }
`;
