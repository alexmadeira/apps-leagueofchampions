import styled from 'styled-components';

import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: calc(${Spaces.BaseMargin} * 2);
`;

export const SpellsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Spell = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  margin: 0 calc(${Spaces.BaseMargin} * 2) 0 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.5);

  &.active {
    border-radius: 3px;
    border: 1px solid ${Colors.Active};
  }
  &:hover {
    img {
      opacity: 1;
    }
  }
  img {
    opacity: 0.8;
    max-width: 100%;
  }
`;

export const SpellDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: calc(${Spaces.BaseMargin} * 2);
`;

export const SpellName = styled.p`
  font-family: 'Cinzel', serif;
  font-size: calc(${Fonts.sizes.Middle} + 5px);
  font-weight: bold;
  color: ${Colors.Default};
  strong {
    color: ${Colors.Base};
  }
`;

export const SpellDescription = styled.p`
  max-width: 500px;
  color: ${Colors.Default};
  margin-top: ${Spaces.BaseMargin};
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.9);
`;
