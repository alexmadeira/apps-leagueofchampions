import styled from 'styled-components';

import { Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: ${Spaces.BaseMargin};
  padding: 0 calc(${Spaces.BasePadding} * 3);

  img {
    max-width: 100%;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.5));
  }
`;
