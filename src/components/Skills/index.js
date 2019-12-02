import React from 'react';

import SkillList from '~/components/SkillList';

import {
  Container,
  SkillDescriptionBox,
  SkillName,
  SkillDescription,
} from './styles';

export default function Skills() {
  return (
    <Container>
      <SkillList />
      <SkillDescriptionBox>
        <SkillName>
          <strong>R</strong> - Super Mega Míssil da Morte!
        </SkillName>
        <SkillDescription>
          Jinx dispara um super-míssil no mapa, que acumula dano ao longo de seu
          trajeto. O míssil explodirá ao colidir com um campeão inimigo,
          causando dano a ele e a inimigos ao seu redor, com base em sua Vida
          removida.
        </SkillDescription>
      </SkillDescriptionBox>
    </Container>
  );
}
