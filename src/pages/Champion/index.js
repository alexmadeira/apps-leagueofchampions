import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ChampionsProvider } from '~/contexts/ChampionContext';

import Background from '~/components/Background';
import Nav from '~/components/Nav';
import ChampionInfo from '~/components/ChampionInfo';
import Search from '~/components/Search';

import Logo from '~/assets/logo/riot.png';

import { Container, Page, RiotLogo } from './styles';

function Champion({ match: { params } }) {
  const { slug } = params;

  const [currentChampion, setCurrentChampion] = useState({
    find: slug,
    search: false,
    loading: true,
    searchList: {},
    activeSkill: -1,
  });

  return (
    <ChampionsProvider value={{ currentChampion, setCurrentChampion }}>
      <Background />
      <Container>
        <Search />
        {/* <Nav />
        <Page>
          <ChampionInfo />
          <RiotLogo>
            <a href="/#">
              <img src={Logo} alt="" />
            </a>
          </RiotLogo>
        </Page> */}
      </Container>
    </ChampionsProvider>
  );
}

Champion.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape().isRequired }).isRequired,
};
export default Champion;
