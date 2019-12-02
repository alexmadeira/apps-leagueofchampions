import React from 'react';

import { Container, Champion } from './styles';

export default function ChampionList() {
  return (
    <Container>
      <Champion>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg"
          alt=""
        />
      </Champion>
    </Container>
  );
}
