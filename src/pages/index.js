import React, { useState } from 'react';

import { ChampionsProvider } from '~/contexts/ChampionContext';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Search from '~/components/Search';
import ChampionInfo from '~/components/ChampionInfo';
import RiotLogo from '~/components/Statics/RiotLogo';
import Footer from '~/components/Statics/Footer';

import Routes from '~/routes';

import Nav from '~/components/Nav';
import { Container, PageContent, Page } from './styles';

function Pages() {
  const [currentChampion, setCurrentChampion] = useState({
    find: 'Vi',
    search: false,
    loading: true,
    activeSkill: false,
    searchList: {},
  });

  return (
    <ChampionsProvider value={{ currentChampion, setCurrentChampion }}>
      <Background />
      <Search />
      <PageContent>
        <Header />
        <ChampionInfo />
        <Nav />
        <Container>
          <Page>
            <Routes />
          </Page>
          <RiotLogo />
        </Container>
        <Footer />
      </PageContent>
    </ChampionsProvider>
  );
}

export default Pages;
