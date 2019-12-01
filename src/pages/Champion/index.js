import React from 'react';

import Nav from '~/components/Nav';

import fighter from '~/assets/role/fighter.png';
import marksman from '~/assets/role/marksman.png';

import { Container, ChampionInfo, Name, Title, Role, RoleItem } from './styles';

export default function Champion() {
  return (
    <Container>
      <Nav />
      <ChampionInfo>
        <Name>Jinx</Name>
        <Title>
          o Gatilho Desenfreado
          <Role>
            <RoleItem>
              <img src={fighter} alt="as" />
            </RoleItem>

            <RoleItem>
              <img src={marksman} alt="as" />
            </RoleItem>
          </Role>
        </Title>
        <div>
          <ul>
            <li>
              <img
                src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/passive/Jinx_Passive.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxQ.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxW.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxE.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxR.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </ChampionInfo>
    </Container>
  );
}
