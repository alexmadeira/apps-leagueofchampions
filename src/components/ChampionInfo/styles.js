import styled from 'styled-components';

import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  flex: 5;
  padding: 0 calc(${Spaces.BasePadding} * 4);
`;

export const Name = styled.h1`
  font-family: ${Fonts.family.Cinzel};

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

  @keyframes noise-anim-2 {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      }
    }
  }
  .glitch:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: white;
    background: ;
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
