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
    icon: string;
    description: string;
  }[];
};

export function useApiWetherRadar() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [datesWeather, setDatesWeather] = useState<infoWeather>({
    name: '',
    main: { temp: 0, temp_max: 0, temp_min: 0, humidity: 0 },
    sys: { sunrise: 0, sunset: 0, country: '' },
    weather: [{ description: '', icon: '' }],
  });

  const { cityName } = useNameCity();

  const API_KEY = import.meta.env.VITE_API_KEY;

  async function getWeather(city: string): Promise<void> {
    return apiWeather
      .get(`weather?appid=${API_KEY}&q=${city}&units=metric&lang=pt_br`)
      .then((response) => {
        //console.log(response.data);
        setDatesWeather(response.data);
      })
      .catch((error) => {
        setLoading(true);
        setError(true);
        //console.error(error);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getWeather(cityName);
  }, []);

  return { datesWeather, loading, error };
}
