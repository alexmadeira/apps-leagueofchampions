import React from 'react';

import { useChampion, useSkin } from '~/services/hooks/Champion';

import { Container, SkinList, Skin } from './styles';

export default function Skins() {
  const { skins, id, activeSkin } = useChampion();
  const setSkin = useSkin();

  return (
    <Container>
      <SkinList>
        {skins.map(({ num }) => (
          <Skin
            key={num}
            onClick={() => {
              setSkin(num);
            }}
            className={activeSkin === num && 'active'}
          >
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${num}.jpg`}
              alt=""
            />
          </Skin>
        ))}
      </SkinList>
    </Container>
  );
}
