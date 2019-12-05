import React, { useContext } from 'react';

import { Container, Champion } from './styles';

import ChampionContext from '~/contexts/ChampionContext';

export default function ChampionList() {
  const {
    currentChampion: { searchList },
  } = useContext(ChampionContext);
  console.tron.log(searchList);
  return (
    <Container>
      <Champion>
        <img src="#" alt="" />
      </Champion>
    </Container>
  );
}
