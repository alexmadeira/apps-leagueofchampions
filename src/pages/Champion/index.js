import React from 'react';

import Nav from '~/components/Nav';
import ChampionInfo from '~/components/ChampionInfo';

import Logo from '~/assets/logo/riot.png';

import { Container, Page, RiotLogo } from './styles';

export default function Champion() {
  return (
    <Container>
      <Nav />
      <Page>
        <ChampionInfo />
        <RiotLogo>
          <a href="/#">
            <img src={Logo} alt="" />
          </a>
        </RiotLogo>
      </Page>
    </Container>
  );
}
