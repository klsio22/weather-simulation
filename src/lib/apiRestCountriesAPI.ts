import axios from 'axios';

export const RestCountriesAPI = axios.create({
  baseURL: 'https://restcountries.com/v2/alpha/'
});