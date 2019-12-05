import React from 'react';

import { useChampion } from '~/services/hooks/Champion';

import Nav from '~/components/Nav';
import ChampionInfo from '~/components/ChampionInfo';
import Search from '~/components/Search';

import Logo from '~/assets/logo/riot.png';

import { Container, PreLoad, Page, RiotLogo } from './styles';

export default function Champion() {
  const { skins, id, activeSkin } = useChampion();

  return (
    <Container
      skin={
        skins &&
        `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${activeSkin}.jpg`
      }
    >
      <PreLoad>
        {skins &&
          skins.map(({ num, name }) => (
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${num}.jpg`}
              key={num}
              alt={name}
            />
          ))}
      </PreLoad>
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
