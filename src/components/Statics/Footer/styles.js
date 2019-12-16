import styled from 'styled-components';
import { Fonts, Colors, Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.FooterBackground};
  color: ${Colors.Light};
  font-size: 14px;
  padding: 7px 0;
  z-index: 2;
  a {
    font-family: ${Fonts.family.Cinzel};
    color: ${Colors.Base};
    border-bottom: 1px solid ${Colors.FooterBackground};
    padding: 0 calc(${Spaces.BasePadding} / 3);
    &:hover {
      border-bottom: 1px solid ${Colors.Base};
      color: ${Colors.Active};
    }
  }
`;
