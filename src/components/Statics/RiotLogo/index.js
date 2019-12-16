import React from 'react';

import Logo from '~/assets/logo/riot.png';

import { Container } from './styles';

export default function RiotLogo() {
  return (
    <Container>
      <a href="/#">
        <img src={Logo} alt="" />
      </a>
    </Container>
  );
}
