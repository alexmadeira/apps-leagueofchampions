import React from 'react';

import { Container, Skill } from './styles';

import { useChampion, useSkill } from '~/services/hooks/Champion';

export default function SpellList() {
  const { passive, spells, activeSkill } = useChampion();
  const setSkill = useSkill();

  return (
    <Container>
      {passive && (
        <Skill
          onClick={() => {
            setSkill(-1);
          }}
          className={activeSkill === -1 && 'active'}
        >
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/9.23.1/img/passive/${passive.image.full}`}
            alt=""
          />
        </Skill>
      )}
      {spells &&
        spells.map(({ id, image }, index) => (
          <Skill
            key={id}
            onClick={() => {
              setSkill(index);
            }}
            className={activeSkill === index && 'active'}
          >
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/${image.full}`}
              alt=""
            />
          </Skill>
        ))}
    </Container>
  );
}
