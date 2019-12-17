import React from 'react';

import Splash from '~/components/Images/Splash';

import { useChampion, useChampionInformation } from '~/services/hooks/Champion';

import { Container, SkinList, Skin } from './styles';

export default function Skins() {
  const { skins, id, activeSkin } = useChampion();
  const { setSkin } = useChampionInformation();

  return (
    <Container mobileNative>
      <SkinList>
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
