import styled from 'styled-components';
import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.ul`
  list-style: none;
  flex: 1;
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Champion = styled.li`
  margin: ${Spaces.BaseMargin};
  min-width: 250px;
  border: 1px solid ${Colors.Base};
  max-width: 20%;
  flex: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.02);
    }
  }
`;

export const Splash = styled.img`
  transition: all 1s ease;
  width: 100%;
  margin: 0;
`;

export const Name = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.Base};
  background: rgba(10, 10, 12, 0.9);
  flex: 1;
  width: 100%;
  height: 50px;
  font-family: ${Fonts.family.Cinzel};
  font-size: ${Fonts.sizes.Small};
  border-top: 1px solid ${Colors.Base};
`;
