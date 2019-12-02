import styled from 'styled-components';
import { darken, grayscale } from 'polished';

import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled.div`
  background: url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_20.jpg');
  display: flex;
  flex-direction: column;
  flex: 1;
  background-size: cover;
  background-position: top center;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  &::before {
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }
`;

export const ChampionInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  flex: 1;
  padding: calc(${Spaces.BasePadding} * 4);
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

export const Role = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-left: calc(${Spaces.BaseMargin} * 2);
`;

export const RoleItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-left: ${Spaces.BaseMargin};
  img {
    max-height: 100%;
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5));
  }
`;
