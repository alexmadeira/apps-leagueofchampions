import React, { useState } from 'react';

import Background from '~/components/Background';
import ChampionInfo from '~/components/ChampionInfo';
import Header from '~/components/Header';
import Nav from '~/components/Nav';
import Search from '~/components/Search';
import Footer from '~/components/Statics/Footer';
import RiotLogo from '~/components/Statics/RiotLogo';
import { ChampionsProvider } from '~/contexts/ChampionContext';
import Routes from '~/routes';

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
