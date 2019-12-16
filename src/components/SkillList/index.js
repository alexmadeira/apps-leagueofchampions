import React from 'react';

import Skill from '~/components/Images/SkillIcon';

import { useChampion, useChampionInformation } from '~/services/hooks/Champion';

import { Container, SkillButton } from './styles';

export default function SpellList() {
  const { passive, spells, activeSkill } = useChampion();

  const { setSkill } = useChampionInformation();

  return (
    <Container>
      {passive && (
        <SkillButton
          type="button"
          className={activeSkill === -1 && 'active'}
          onClick={() => {
            setSkill(-1);
          }}
        >
          <Skill
            id={-1}
            name={passive.name}
            src={`passive/${passive.image.full}`}
          />
        </SkillButton>
      )}
      {spells &&
        spells.map(({ id, image, name }, index) => (
          <SkillButton
            type="button"
            key={id}
            className={activeSkill === index && 'active'}
            onClick={() => {
              setSkill(index);
            }}
          >
            <Skill name={name} src={`spell/${image.full}`} />
          </SkillButton>
        ))}
    </Container>
  );
}
