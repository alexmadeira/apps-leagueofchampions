import styled from 'styled-components';

import { Colors, Fonts, Spaces, Breakpoints } from '~/styles/Metrics';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${Spaces.BaseMargin};
  margin-left: calc(${Spaces.BaseMargin} * 5);
  z-index: 5;

  ${Breakpoints.md} {
    margin-top: 55vh;
  }
  ${Breakpoints.sm} {
    margin-left: ${Spaces.BaseMargin};
    flex-direction: column;
  }
`;

export const Name = styled.h1`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  ${Breakpoints.sm} {
    justify-content: center;
  }
  span {
    position: relative;
    font-family: ${Fonts.family.Cinzel};
    font-size: ${Fonts.sizes.max};
    text-transform: uppercase;
    font-weight: bold;
    color: ${Colors.Shadow};
    line-height: 104px;
    font-size: 80px;

    ${Breakpoints.sm} {
      font-size: 60px;
      line-height: 80px;
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
      ${Breakpoints.sm} {
        left: 2px;
        top: 2px;
      }
    }
  }
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${Breakpoints.sm} {
    align-items: center;
    justify-content: center;
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
  text-shadow: 1px 1px 0px ${Colors.Black};
  ${Breakpoints.sm} {
    font-size: 20px;
  }
`;
