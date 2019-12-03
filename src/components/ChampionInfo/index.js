import React from 'react';

import Skills from '~/components/Skills';
import Role from '~/components/Role';
import Skins from '~/components/Skins';

import { Container, Name, Title } from './styles';

import { useChampion } from '~/services/hooks/Champion';

export default function ChampionInfo() {
  const { name, title } = useChampion();
  return (
    <Container>
      <Name>{name}</Name>
      <Title>
        {title}
        <Role />
      </Title>
      <Skills />
      <Skins />
    </Container>
  );
}
