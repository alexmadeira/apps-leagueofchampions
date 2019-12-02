import React from 'react';

import { Container, Skill } from './styles';

export default function SpellList() {
  return (
    <Container>
      <Skill>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/passive/Jinx_Passive.png"
          alt=""
        />
      </Skill>
      <Skill>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxQ.png"
          alt=""
        />
      </Skill>
      <Skill className="active">
        <img
          src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxW.png"
          alt=""
        />
      </Skill>
      <Skill>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxE.png"
          alt=""
        />
      </Skill>
      <Skill>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/JinxR.png"
          alt=""
        />
      </Skill>
    </Container>
  );
}
