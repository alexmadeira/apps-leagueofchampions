import React from 'react';

import Skills from '~/components/Skills';
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
      <Skills />
      <Skins />
    </Container>
  );
}
