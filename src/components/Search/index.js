import React, { useState } from 'react';

import ChampionList from '~/components/ChampionList';

import { Container, SearchBox, SearchForm, ResultBox } from './styles';

export default function Search() {
  const [searchChampion, setSearchChampion] = useState(false);
  return (
    <Container>
      <SearchBox>
        <SearchForm>
          <input
            onChange={e => {
              setSearchChampion(e.target.value);
            }}
          />
        </SearchForm>
      </SearchBox>
      <ResultBox className={searchChampion && 'active'}>
        <ChampionList />
      </ResultBox>
    </Container>
  );
}
