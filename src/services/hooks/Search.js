import { useState, useEffect, useContext } from 'react';
import filterObject from 'filter-obj';
import ChampionContext from '~/contexts/ChampionContext';

export const useSearch = () => {
  const { currentChampion, setCurrentChampion } = useContext(ChampionContext);
  const toogleSearch = () => {
    setCurrentChampion({
      ...currentChampion,
      search: !currentChampion.search,
      loading: true,
    });
  };
  const isSearch = () => currentChampion.search;

  const filterSerach = ({ allChampion, searchChampion }) => {
    const championList = filterObject(allChampion, (key, value) =>
      value.id.toLowerCase().includes(searchChampion.toLowerCase())
    );
    if (!currentChampion.searchList) {
      setCurrentChampion({
        ...currentChampion,
        searchList: championList,
        loading: true,
      });
    }
    return championList || {};
  };

  return { toogleSearch, isSearch, filterSerach };
};
