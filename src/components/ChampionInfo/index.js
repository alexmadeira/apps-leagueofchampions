import React from 'react';

import Role from '~/components/Role';

import { Container, Name, TitleBox, Title } from './styles';

import { useChampion } from '~/services/hooks/Champion';

export default function ChampionInfo() {
  const { name, title } = useChampion();
  return (
    <Container>
      <Name data-name={name}>{name}</Name>
      <TitleBox>
        <Title>{title}</Title>
        <Role />
      </TitleBox>
    </Container>
  );
}
