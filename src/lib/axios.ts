import axios from 'axios';

const API_KEY = "SUA_CHAVE_DA_API";
const API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`;

export const api = axios.create({
  baseURL: `${API_URL}`
})