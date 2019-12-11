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
  margin-top: calc(${Spaces.BaseMargin});
`;

export const SkillName = styled.p`
  font-family: ${Fonts.family.Cinzel};
  font-size: calc(${Fonts.sizes.Middle} + 5px);
  font-weight: bold;
  color: ${Colors.Default};
  text-shadow: 3px 2px 2px ${Colors.Black};
  strong {
    color: ${Colors.Active};
    text-transform: uppercase;
  }
`;

export const SkillDescription = styled.p`
  max-width: 60vw;
  color: ${Colors.Default};
  margin-top: ${Spaces.BaseMargin};
  text-shadow: 1px 1px 1px ${Colors.Black};
`;
