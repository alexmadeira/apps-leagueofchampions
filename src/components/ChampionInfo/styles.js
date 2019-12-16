import styled from 'styled-components';

import { Colors, Fonts, Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${Spaces.BaseMargin};
  margin-left: calc(${Spaces.BaseMargin} * 5);
`;

export const Name = styled.h1`
  font-family: ${Fonts.family.Cinzel};
  font-size: ${Fonts.sizes.max};
  line-height: 80px;
  font-size: 80px;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  color: ${Colors.Shadow};
  position: relative;

  &::after {
    content: attr(data-name);
    position: absolute;
    left: 1px;
    top: 1px;
    color: white;
    background: -webkit-linear-gradient(${Colors.Base}, ${Colors.Active});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    overflow: hidden;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Title = styled.p`
  font-family: ${Fonts.family.Cinzel};
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${Colors.Default};
  text-shadow: 3px 2px 2px ${Colors.Black};
`;
