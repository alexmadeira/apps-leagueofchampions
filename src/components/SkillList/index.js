import React from 'react';

import Skill from '~/components/Images/SkillIcon';

import { useChampion } from '~/services/hooks/Champion';

import { Container } from './styles';

export default function SpellList() {
  const { passive, spells } = useChampion();

  return (
    <Container>
      {passive && <Skill id={-1} src={`passive/${passive.image.full}`} />}
      {spells &&
        spells.map(({ id, image }) => (
          <Skill key={id} id={id} src={`spell/${image.full}`} />
        ))}
    </Container>
  );
}
