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
  background: -webkit-linear-gradient(${Colors.Base}, ${Colors.Active});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
