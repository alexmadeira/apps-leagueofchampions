import React from 'react';

import Spells from '~/components/Spells';
import Role from '~/components/Role';
import Skins from '~/components/Skins';

import { Container, Name, Title } from './styles';

export default function ChampionInfo() {
  return (
    <Container>
      <Name>Jinx</Name>
      <Title>
        o Gatilho Desenfreado
        <Role />
      </Title>
      <Spells />
      <Skins />
    </Container>
  );
}
