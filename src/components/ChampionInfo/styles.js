import styled from 'styled-components';
import { darken, grayscale } from 'polished';

import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  flex: 5;
  padding: 0 calc(${Spaces.BasePadding} * 4);
`;

export const Name = styled.h1`
  font-family: 'Cinzel', serif;
  line-height: 135px;
  font-size: 100px;
  text-transform: uppercase;
  font-weight: bold;
  background: -webkit-linear-gradient(
    ${darken(0.2, Colors.Base)},
    ${grayscale(Colors.Active)}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title = styled.p`
  font-family: 'Cinzel', serif;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${Colors.Default};
`;
