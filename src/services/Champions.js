import Api from '~/services/Api';

export const findChampion = async champion => {
  if (!champion) return false;
  const {
    data: { data },
  } = await Api.get(`champion/${champion}.json`);

  return data[champion];
};
