import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import ChampionList from '~/components/ChampionList';

import { useSearch } from '~/services/hooks/Search';
import { useAllChampion } from '~/services/hooks/Champion';

import { Container, Close, SearchBox, SearchForm } from './styles';

export default function Search() {
  const [searchChampion, setSearchChampion] = useState(false);

  const { toogleSearch, isSearch, filterSearch, searchList } = useSearch();
  const allChampion = useAllChampion();
  const championList = searchList();

  return (
    <Container className={isSearch() && `active`}>
      <Close onClick={() => toogleSearch()}>
        <FaTimes />
      </Close>
      <SearchBox>
        <SearchForm>
          <input
            onFocus={() => {
              setSearchChampion(true);
            }}
            onBlur={() => {
              setSearchChampion(false);
            }}
            onChange={e => {
              filterSearch(e.target.value, allChampion);
            }}
          />
        </SearchForm>
      </SearchBox>
      <ChampionList
        height={searchChampion && '85vh'}
        list={championList || {}}
      />
    </Container>
  );
}
