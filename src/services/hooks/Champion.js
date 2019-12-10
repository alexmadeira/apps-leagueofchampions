import { useState, useEffect, useContext } from 'react';
import Case from 'case';

import { findChampion, getChampionAll } from '~/services/Champions';

import ChampionContext from '~/contexts/ChampionContext';
import history from '~/services/history';

export const useChampion = () => {
  const [champion, setChampion] = useState({});
  const {
    currentChampion: { find, loading, search, activeSkin, activeSkill },
    currentChampion,
    setCurrentChampion,
  } = useContext(ChampionContext);

  useEffect(() => {
    if (loading) {
      const loadingChampion = async () => {
        const data = await findChampion(find);

        setChampion({
          ...data,
          activeSkin: activeSkin || 0,
          activeSkill,
          search,
        });
        setCurrentChampion({ ...currentChampion, loading: false });
      };

      loadingChampion();
    }
  }, [
    activeSkill,
    activeSkin,
    champion,
    currentChampion,
    find,
    loading,
    search,
    setCurrentChampion,
  ]);

  return champion;
};

export const useAllChampion = () => {
  const [champions, setChampions] = useState({});
  const {
    currentChampion: { allChampions },
    currentChampion,
    setCurrentChampion,
  } = useContext(ChampionContext);

  useEffect(() => {
    if (!allChampions) {
      const loadingAllChampions = async () => {
        const data = await getChampionAll();

        setChampions(data);
        setCurrentChampion({ ...currentChampion, allChampions: data });
      };

      loadingAllChampions();
    } else {
      setChampions(allChampions);
    }
  }, [allChampions, currentChampion, setCurrentChampion]);

  return champions;
};

export const useChampionInformation = () => {
  const { currentChampion, setCurrentChampion } = useContext(ChampionContext);
  const setSkin = skin => {
    setCurrentChampion({
      ...currentChampion,
      activeSkin: skin,
      loading: true,
    });
  };

  const setSkill = skill => {
    setCurrentChampion({
      ...currentChampion,
      activeSkill: skill,
      loading: true,
    });
  };

  const setFind = find => {
    const slug = Case.lower(find);
    history.push(`/${slug}`);

    setCurrentChampion({
      ...currentChampion,
      find,
      search: false,
      loading: true,
    });
  };
  const isLoading = () => currentChampion.loading;

  return { setSkin, setSkill, setFind, isLoading };
};
