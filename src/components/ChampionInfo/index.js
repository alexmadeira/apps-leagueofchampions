import React, { useEffect, useState } from 'react';
import Api from '~/services/Api';

import Skills from '~/components/Skills';
import Role from '~/components/Role';
import Skins from '~/components/Skins';

import { Container, Name, Title } from './styles';

export default function ChampionInfo() {
  const [champion, setChampion] = useState({});

  useEffect(() => {
    if (!champion.name) {
      const getChampion = async () => {
        const Champ = 'Jinx';
        const {
          data: { data },
        } = await Api.get(`champion/${Champ}.json`);
        console.tron.log(data[Champ]);
        setChampion(data[Champ]);
        return data;
      };
      getChampion();
    }
  });
  return (
    <Container>
      <Name>{champion.name}</Name>
      <Title>
        {champion.title}
        <Role />
      </Title>
      <Skills />
      <Skins />
    </Container>
  );
}
