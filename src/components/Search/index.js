import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import ChampionList from '~/components/ChampionList';

import { Container, Close, SearchBox, SearchForm, ResultBox } from './styles';

import { useSearch } from '~/services/hooks/Search';
import { useAllChampion } from '~/services/hooks/Champion';

export default function Search() {
  const [searchChampion, setSearchChampion] = useState('');

  const { toogleSearch, isSearch, filterSerach } = useSearch();
  const allChampion = useAllChampion() || {};

  filterSerach({ allChampion, searchChampion });

  return (
    <Container className={isSearch() && `active`}>
      <Close onClick={() => toogleSearch()}>
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
