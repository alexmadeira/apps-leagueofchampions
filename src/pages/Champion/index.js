import React from 'react';

import Nav from '~/components/Nav';
import Spells from '~/components/Spells';

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
        <Spells />
      </ChampionInfo>
    </Container>
  );
}
