import styled from 'styled-components';
import Img from 'react-image';

import { Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${Colors.Base};
  position: relative;
  overflow: hidden;
  transition: all 300ms linear;
  &.retire {
    opacity: 0.5;
    filter: grayscale(1);
  }
  &:hover {
    opacity: 0.8;
    filter: grayscale(0);
  }
  svg {
    height: 100%;
  }
`;
export const Imagem = styled(Img)`
  width: 100%;
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
