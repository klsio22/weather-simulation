import axios from 'axios';


const API_URL = `https://api.openweathermap.org/data/2.5`;

export const apiWeather = axios.create({
  baseURL: `${API_URL}`,
});
