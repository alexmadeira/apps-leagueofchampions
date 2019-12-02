import React from 'react';

import Spells from '~/components/Spells';
import Role from '~/components/Role';

import { Container, Name, Title, SkinsLinst, Skin } from './styles';

export default function ChampionInfo() {
  return (
    <Container>
      <Name>Jinx</Name>
      <Title>
        o Gatilho Desenfreado
        <Role />
      </Title>
      <Spells />
      <SkinsLinst>
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
      </SkinsLinst>
    </Container>
  );
}
