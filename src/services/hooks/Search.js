import { useContext } from 'react';
import filterObject from 'filter-obj';
import ChampionContext from '~/contexts/ChampionContext';

export const useSearch = () => {
  const { currentChampion, setCurrentChampion } = useContext(ChampionContext);

  const isSearch = () => currentChampion.search;

  const searchList = () => currentChampion.searchList;

  const toogleSearch = () => {
    setCurrentChampion({
      ...currentChampion,
      search: !currentChampion.search,
      loading: true,
    });
  };

  const filterSearch = (find, list) => {
    const championList = filterObject(list, (key, value) =>
      value.id.toLowerCase().includes(find.toLowerCase())
    );
    setCurrentChampion({
      ...currentChampion,
      searchList: championList,
      loading: true,
    });
  };

  return { toogleSearch, isSearch, filterSearch, searchList };
};
