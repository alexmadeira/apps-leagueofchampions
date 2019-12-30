import styled from 'styled-components';

import { Fonts, Colors, Spaces, Breakpoints } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  background: ${Colors.Active};
  color: ${Colors.Light};
  font-size: 14px;
  padding: 7px 0;
  z-index: 2;
  margin-top: auto;
  width: 100vw;
  margin-left: calc(${Spaces.BaseMargin} * -5);
  ${Breakpoints.md} {
    margin-left: 0;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    ${Breakpoints.md} {
      flex-direction: column;
    }
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
  }
`;
