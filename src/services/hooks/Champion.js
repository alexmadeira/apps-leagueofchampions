import { useState, useEffect, useContext, useCallback } from 'react';

import { findChampion, getChampionAll } from '~/services/Champions';

import ChampionContext from '~/contexts/ChampionContext';

export const useChampion = () => {
  const [champion, setChampion] = useState({});
  const {
    currentChampion: { find, loading, search, activeSkin, activeSkill },
    currentChampion,
    setCurrentChampion,
  } = useContext(ChampionContext);

  const loadingChampion = useCallback(async () => {
    if (loading) {
      const data = await findChampion(find);

      setChampion({
        ...data,
        activeSkin: activeSkin || 0,
        activeSkill,
        search,
      });
      setCurrentChampion({ ...currentChampion, loading: false });
    }
  }, [
    activeSkill,
    activeSkin,
    currentChampion,
    find,
    loading,
    search,
    setCurrentChampion,
  ]);

  useEffect(() => {
    loadingChampion();
  }, [loading, loadingChampion]);

  return champion;
};

export const useAllChampion = () => {
  const {
    currentChampion: { allChampions },
    setCurrentChampion,
  } = useContext(ChampionContext);

  const loadingAllChampions = useCallback(async () => {
    if (!allChampions) {
      console.tron.log('allChampions');
      const data = await getChampionAll();

      setCurrentChampion({
        allChampions: data,
        searchList: data,
      });
    }
  }, [allChampions, setCurrentChampion]);

  useEffect(() => {
    loadingAllChampions();
  }, [loadingAllChampions]);

  return allChampions;
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
    setCurrentChampion({
      ...currentChampion,
      find,
      activeSkin: 0,
      search: false,
      loading: true,
    });
  };
  const isLoading = () => currentChampion.loading;

  return { setSkin, setSkill, setFind, isLoading };
};
