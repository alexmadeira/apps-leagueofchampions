import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import ChampionList from '~/components/ChampionList';

import { Container, Close, SearchBox, SearchForm, ResultBox } from './styles';

import { useSearch } from '~/services/hooks/Search';
import { useAllChampion } from '~/services/hooks/Champion';

export default function Search() {
  const [searchChampion, setSearchChampion] = useState('');

  const { toogleSearch, isSearch, filterSearch, searchList } = useSearch();
  const allChampion = useAllChampion();
  const championList = searchList();

  useEffect(() => {
    if (!isSearch()) {
      setSearchChampion('');
    }
  }, [isSearch]);

  return (
    <Container className={isSearch() && `active`}>
      <Close onClick={() => toogleSearch()}>
        <FaTimes />
      </Close>
      <SearchBox>
        <SearchForm>
          <input
            value={searchChampion}
            onChange={e => {
              filterSearch(e.target.value, allChampion);
              setSearchChampion(e.target.value);
            }}
          />
        </SearchForm>
      </SearchBox>
      <ResultBox className={searchChampion && 'active'}>
        <ChampionList list={championList || {}} />
      </ResultBox>
    </Container>
  );
}
