import styled from 'styled-components';
import Scrollbar from 'react-scrollbars-custom';

import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  height: calc(100% - ${Spaces.BasePadding} - 33px);
  margin-top: calc(${Spaces.BaseMargin} * 2);
  position: relative;
`;

export const LoreContent = styled(Scrollbar)`
  .ScrollbarsCustom-Content {
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 30%);
    padding-bottom: calc(${Spaces.BasePadding} * 2) !important;
    padding-top: calc(${Spaces.BasePadding} * 2) !important;
    p {
      color: ${Colors.Default};
      margin-top: ${Spaces.BaseMargin};
      text-shadow: 1px 1px 1px ${Colors.Black};
      font-size: ${Fonts.sizes.Middle};
      line-height: calc(${Fonts.sizes.Middle} + 5px);
      padding: 0 calc(${Spaces.BasePadding} * 2);
    }
  }
`;
