import axios from 'axios';

import {
  ddragonLanguage,
  ddragonUrl,
  ddragonVersion,
} from '~/config/ddragonConfig';

const api = axios.create({
  baseURL: `${ddragonUrl}/${ddragonVersion}/data/${ddragonLanguage}/`,
});

export default api;
