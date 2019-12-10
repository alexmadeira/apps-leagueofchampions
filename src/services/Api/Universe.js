import axios from 'axios';

import {
  universeUrl,
  universeVersion,
  universeLanguage,
} from '~/config/universeConfig';

const universe = axios.create({
  baseURL: `${universeUrl}/${universeVersion}/${universeLanguage}/`,
});

export default universe;
