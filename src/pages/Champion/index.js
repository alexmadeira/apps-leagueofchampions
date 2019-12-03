import React from 'react';

import { useChampion } from '~/services/hooks/Champion';

import Nav from '~/components/Nav';
import ChampionInfo from '~/components/ChampionInfo';
import Search from '~/components/Search';

import Logo from '~/assets/logo/riot.png';

import { Container, Page, RiotLogo } from './styles';

export default function Champion() {
  const { skins, id, activeSkin } = useChampion();

  return (
    <Container
      skin={
        skins &&
        `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${activeSkin}.jpg`
      }
    >
      <Search />
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
