import React from 'react';

import { useChampion, useChampionInformation } from '~/services/hooks/Champion';

import { Container, SkinList, Skin } from './styles';

export default function Skins() {
  const { skins, id, activeSkin } = useChampion();
  const { setSkin } = useChampionInformation();

  return (
    <Container>
      <SkinList width={skins && skins.length * (75 + 30)}>
        {skins &&
          skins.map(({ num }) => (
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
