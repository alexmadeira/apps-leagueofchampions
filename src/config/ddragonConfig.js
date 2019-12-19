import axios from 'axios';

import { setLocalStorage, getLocalStorage } from '~/services/localStorage';

const fetchVersion = async () => {
  const versions = await axios.get(
    'https://ddragon.leagueoflegends.com/api/versions.json'
  );
  const [version] = versions.data;
  const localStore = {
    name: `@leagueoflegends/VERSION`,
    value: version,
    expiry: 24 * 60 * 60 * 1000,
  };
  setLocalStorage(localStore);
  return version;
};

if (!getLocalStorage(`@leagueoflegends/VERSION`)) {
  fetchVersion();
}

const storageVersion = getLocalStorage(`@leagueoflegends/VERSION`) || '9.23.1';

export const ddragonUrl = 'https://ddragon.leagueoflegends.com/cdn';
export const ddragonVersion = storageVersion;
export const ddragonLanguage = 'pt_BR';

export default { ddragonUrl, ddragonVersion, ddragonLanguage };
