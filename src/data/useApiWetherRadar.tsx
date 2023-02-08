import { useEffect, useState } from 'react';
import { useNameCity } from '../context/CityProvider';
import { apiWeather } from '../lib/apiOpenweathermap';

type infoWeather = {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
    country: string;
  };
  weather: {
    description: string;
  }[];
};

export function useApiWetherRadar() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [datesWeather, setDatesWeather] = useState<infoWeather>();
  const { cityName } = useNameCity();

  const API_KEY = '9f1ceab4993df5f5736c8cf2996d3718';

  async function getWeather(city: string): Promise<any> {
    await apiWeather
      .get(`weather?appid=${API_KEY}&q=${city}&units=metric&lang=pt_br`)
      .then((response) => {
        setLoading(false);

        // console.log(response.data);
        setDatesWeather(response.data);
      })
      .catch((error) => {
        setLoading(true);
        setError(true);
        console.error(error);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    setTimeout(() => {
      getWeather(cityName);
    }, 500);
  }, []);

  return { datesWeather, loading, error };
}
