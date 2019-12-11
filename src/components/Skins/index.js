import React from 'react';

import Splash from '~/components/Images/Splash';

import { useChampion, useChampionInformation } from '~/services/hooks/Champion';

import { Container, SkinList, Skin } from './styles';

export default function Skins() {
  const { skins, id, activeSkin } = useChampion();
  const { setSkin } = useChampionInformation();

  return (
    <Container>
      <SkinList width={skins && skins.length * (75 + 30)} noScrollY>
        {skins &&
          skins.map(({ num }) => (
            <Skin
              key={num}
              onClick={() => {
                setSkin(num);
              }}
            >
              <Splash id={id} num={num} retire={activeSkin !== num} />
            </Skin>
          ))}
      </SkinList>
    </Container>
  );
}
