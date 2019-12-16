import React, { useState } from 'react';

import { ChampionsProvider } from '~/contexts/ChampionContext';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Search from '~/components/Search';
import ChampionInfo from '~/components/ChampionInfo';
import RiotLogo from '~/components/Statics/RiotLogo';

import Routes from '~/routes';

import Nav from '~/components/Nav';
import { Container, Page } from './styles';

function Pages() {
  const [currentChampion, setCurrentChampion] = useState({
    find: 'Alistar',
    search: false,
    loading: true,
    activeSkill: false,
    searchList: {},
  });

  return (
    <ChampionsProvider value={{ currentChampion, setCurrentChampion }}>
      <Background />
      <Nav />
      <Search />
      <Header />
      <ChampionInfo />
      <Container>
        <Page>
          <Routes />
        </Page>
        <RiotLogo />
      </Container>
    </ChampionsProvider>
  );
}

export default Pages;
