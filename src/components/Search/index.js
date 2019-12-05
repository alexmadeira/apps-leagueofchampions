import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import ChampionList from '~/components/ChampionList';

import { Container, Close, SearchBox, SearchForm, ResultBox } from './styles';

import { useChampion, useSearch } from '~/services/hooks/Champion';

export default function Search() {
  const { search } = useChampion();
  const toogleSeach = useSearch();

  const [searchChampion, setSearchChampion] = useState(false);
  return (
    <Container className={search && `active`}>
      <Close onClick={() => toogleSeach()}>
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
