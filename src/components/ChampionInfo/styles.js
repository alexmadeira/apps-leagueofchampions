import styled from 'styled-components';

import { Colors, Fonts, Spaces, Breakpoints } from '~/styles/Metrics';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${Spaces.BaseMargin};
  margin-left: calc(${Spaces.BaseMargin} * 5);
  ${Breakpoints.sm} {
    margin-left: ${Spaces.BaseMargin};
    flex-direction: column;
  }
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
  ${Breakpoints.sm} {
    font-size: 40px;
  }

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
  ${Breakpoints.sm} {
    align-items: flex-start;
    flex-direction: column;
  }
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
  ${Breakpoints.sm} {
    font-size: 20px;
  }
`;
