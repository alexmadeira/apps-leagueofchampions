import React from 'react';
import { useChampion } from '~/services/hooks/Champion';

import { Container, PreLoad } from './styles';

export default function Background() {
  const { skins, id, activeSkin } = useChampion();

  return (
    <Container skin={skins && `${id}_${activeSkin}`}>
      <PreLoad>
        {skins &&
          skins.map(({ num, name }) => (
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${num}.jpg`}
              key={num}
              alt={name}
            />
          ))}
      </PreLoad>
    </Container>
  );
}
