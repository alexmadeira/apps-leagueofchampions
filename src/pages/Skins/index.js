import React, { useState } from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import Skins from '~/components/Skins';

import { Container, ToogleSkins, SkinsBox } from './styles';

export default function SkinsPage() {
  const [closeSkins, setCloseSkins] = useState(false);
  return (
    <Container>
      <SkinsBox className={closeSkins && 'close'}>
        <ToogleSkins
          className={closeSkins && 'close'}
          onClick={() => setCloseSkins(!closeSkins)}
        >
          <FaAngleDoubleLeft />
        </ToogleSkins>
        <Skins />
      </SkinsBox>
    </Container>
  );
}
