import styled from 'styled-components';
import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: calc(${Spaces.BaseMargin} * 2);
`;

export const SkillDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: calc(${Spaces.BaseMargin} * 2);
`;

export const SkillName = styled.p`
  font-family: ${Fonts.family.Cinzel};
  font-size: calc(${Fonts.sizes.Middle} + 5px);
  font-weight: bold;
  color: ${Colors.Default};
  strong {
    color: ${Colors.Base};
  }
`;

export const SkillDescription = styled.p`
  max-width: 500px;
  color: ${Colors.Default};
  margin-top: ${Spaces.BaseMargin};
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.9);
`;
