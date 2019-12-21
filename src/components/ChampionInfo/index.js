import React from 'react';

import Role from '~/components/Role';
import { useChampion } from '~/services/hooks/Champion';

import { Container, Name, TitleBox, Title } from './styles';

export default function ChampionInfo() {
  const { name, title } = useChampion();
  return (
    <Container>
      <Name>
        <span data-name={name}>{name}</span>
      </Name>
      <TitleBox>
        <Title>{title}</Title>
        <Role />
      </TitleBox>
    </Container>
  );
}
