import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/9.23.1/data/pt_BR/',
});

export default api;
