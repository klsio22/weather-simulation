import axios from 'axios';


const API_URL = `https://server-weather-simulation.vercel.app/`;

export const apiWeather = axios.create({
  baseURL: `${API_URL}`,
});
