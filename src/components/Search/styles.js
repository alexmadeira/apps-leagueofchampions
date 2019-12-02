import styled from 'styled-components';
import { Fonts, Colors } from '~/styles/Metrics';

export const Container = styled.div`
  background: ${Colors.White};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
