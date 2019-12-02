import React from 'react';

import {
  Container,
  SpellsList,
  Spell,
  SpellDescriptionBox,
  SpellName,
  SpellDescription,
} from './styles';

export default function Spells() {
  return (
    <Container>
      <SpellsList>
        <Spell>
          <img
            src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/passive/Jinx_Passive.png"
            alt=""
          />
        </Spell>
        <Spell>
          <img
            src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxQ.png"
            alt=""
          />
        </Spell>
        <Spell className="active">
          <img
            src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxW.png"
            alt=""
          />
        </Spell>
        <Spell>
          <img
            src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxE.png"
            alt=""
          />
        </Spell>
        <Spell>
          <img
            src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxR.png"
            alt=""
          />
        </Spell>
      </SpellsList>
      <SpellDescriptionBox>
        <SpellName>
          <strong>R</strong> - Super Mega Míssil da Morte!
        </SpellName>
        <SpellDescription>
          Jinx dispara um super-míssil no mapa, que acumula dano ao longo de seu
          trajeto. O míssil explodirá ao colidir com um campeão inimigo,
          causando dano a ele e a inimigos ao seu redor, com base em sua Vida
          removida.
        </SpellDescription>
      </SpellDescriptionBox>
    </Container>
  );
}
