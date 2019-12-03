import React, { useContext } from 'react';

import ChampionContext from '~/contexts/ChampionContext';

import { Container, Skill } from './styles';

export default function SpellList() {
  const { currentChampion } = useContext(ChampionContext);
  const { passive, spells } = currentChampion;

  return (
    <Container>
      {passive && (
        <Skill>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/9.23.1/img/passive/${passive.image.full}`}
            alt=""
          />
        </Skill>
      )}
      {spells &&
        spells.map(spell => (
          <Skill key={spell.id}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.23.1/img/spell/${spell.image.full}`}
              alt=""
            />
          </Skill>
        ))}
    </Container>
  );
}
