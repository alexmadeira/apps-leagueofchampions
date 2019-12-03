import React, { useEffect, useState, useContext } from 'react';

import Api from '~/services/Api';

import ChampionContext from '~/contexts/ChampionContext';

import Skills from '~/components/Skills';
import Role from '~/components/Role';
import Skins from '~/components/Skins';

import { Container, Name, Title } from './styles';

export default function ChampionInfo() {
  const [champion, setChampion] = useState({});
  const {
    currentChampion: { find },
    setCurrentChampion,
  } = useContext(ChampionContext);

  useEffect(() => {
    if (find) {
      const getChampion = async () => {
        const {
          data: { data },
        } = await Api.get(`champion/${find}.json`);

        setChampion(data[find]);
        setCurrentChampion(data[find]);
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
