import { useState, useEffect, useContext } from 'react';
import { findChampion } from '~/services/Champions';

import ChampionContext from '~/contexts/ChampionContext';

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

export const useSkin = () => {
  const { currentChampion, setCurrentChampion } = useContext(ChampionContext);
  return skin => {
    setCurrentChampion({
      ...currentChampion,
      activeSkin: skin,
      loading: true,
    });
  };
};

export const useSkill = () => {
  const { currentChampion, setCurrentChampion } = useContext(ChampionContext);
  return skill => {
    setCurrentChampion({
      ...currentChampion,
      activeSkill: skill,
      loading: true,
    });
  };
};

export const useSearch = () => {
  const { currentChampion, setCurrentChampion } = useContext(ChampionContext);
  return () => {
    setCurrentChampion({
      ...currentChampion,
      search: !currentChampion.search,
      loading: true,
    });
  };
};
