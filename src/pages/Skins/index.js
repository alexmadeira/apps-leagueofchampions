import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { FaAngleDoubleLeft } from 'react-icons/fa';

import Splash from '~/components/Images/Splash';
import { useChampion, useChampionInformation } from '~/services/hooks/Champion';

import {
  Container,
  ToogleSkins,
  SkinsBox,
  ContainerSkins,
  SkinsList,
  Skin,
} from './styles';

export default function SkinsPage() {
  const [closeSkins, setCloseSkins] = useState(false);
  const { skins, id, activeSkin } = useChampion();
  const { setSkin } = useChampionInformation();

  return (
    <Container>
      <SkinsBox className={closeSkins && 'close'}>
        <ToogleSkins
          className={closeSkins && 'close'}
          onClick={() => setCloseSkins(!closeSkins)}
        >
          <FaAngleDoubleLeft />
        </ToogleSkins>
        <ContainerSkins native={isMobile}>
          <SkinsList>
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
          </SkinsList>
        </ContainerSkins>
      </SkinsBox>
    </Container>
  );
}
