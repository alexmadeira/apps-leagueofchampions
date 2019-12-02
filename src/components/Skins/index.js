import React from 'react';

import { Container, Skin } from './styles';

export default function Skins() {
  return (
    <Container>
      <Skin>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg"
          alt=""
        />
      </Skin>
      <Skin>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_3.jpg"
          alt=""
        />
      </Skin>
      <Skin>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_13.jpg"
          alt=""
        />
      </Skin>
      <Skin className="active">
        <img
          src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_20.jpg"
          alt=""
        />
      </Skin>
    </Container>
  );
}
