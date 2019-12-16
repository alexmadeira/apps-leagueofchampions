import Dragon from '~/services/Api/Dragon';
import Universe from '~/services/Api/Universe';

import history from '~/services/history';

export const findChampion = async championId => {
  try {
    const {
      data: { data },
    } = await Dragon.get(`champion/${championId}.json`);

    const {
      data: { champion },
    } = await Universe.get(`champions/${championId.toLowerCase()}/index.json`);

    data[championId] = { ...data[championId], championMore: champion };

    return data[championId];
  } catch (err) {
    return false;
  }
};

export const getChampionAll = async () => {
  const {
    data: { data },
  } = await Dragon.get(`champion.json`);

  return data;
};
