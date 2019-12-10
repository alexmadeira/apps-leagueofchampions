import React from 'react';

import Skill from '~/components/Images/SkillIcon';

import { useChampion } from '~/services/hooks/Champion';

import { Container } from './styles';

export default function SpellList() {
  const { passive, spells } = useChampion();

  return (
    <Container>
      {console.tron.log(spells)}
      {passive && (
        <Skill
          id={-1}
          name={passive.name}
          src={`passive/${passive.image.full}`}
        />
      )}
      {spells &&
        spells.map(({ id, image, name }, index) => (
          <Skill key={id} id={index} name={name} src={`spell/${image.full}`} />
        ))}
    </Container>
  );
}
