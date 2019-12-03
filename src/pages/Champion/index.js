import React, { useContext } from 'react';

import ChampionContext from '~/contexts/ChampionContext';

import Nav from '~/components/Nav';
import ChampionInfo from '~/components/ChampionInfo';
import Search from '~/components/Search';

import Logo from '~/assets/logo/riot.png';

import { Container, Page, RiotLogo } from './styles';

export default function Champion() {
  const { currentChampion } = useContext(ChampionContext);
  const { skins, id } = currentChampion;
  console.tron.log(currentChampion);
  console.tron.log(skins);
  return (
    <Container
      skin={
        skins &&
        `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skins[6].num}.jpg`
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
