import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ChampionList from '~/components/ChampionList';

import { Container, Close, SearchBox, SearchForm, ResultBox } from './styles';

export default function Search() {
  const [searchChampion, setSearchChampion] = useState(false);
  return (
    <Container>
      <Close>
        <FaTimes />
      </Close>
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
