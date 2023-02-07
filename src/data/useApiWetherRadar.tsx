import { useEffect, useState } from 'react';
import { useNameCity } from '../context/CityProvider';
import { apiWeather } from '../lib/apiOpenweathermap';

type infoWeather = {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}[];

export function useApiWetherRadar() {
  const [datesWeather, setDatesWeather] = useState<infoWeather>();
  const [loading, setLoading] = useState(false);
  const { cityName } = useNameCity();

  const API_KEY = '9f1ceab4993df5f5736c8cf2996d3718';

  async function getWeather(city: string): Promise<any> {
    try {
      await apiWeather
        .get(`weather?appid=${API_KEY}&q=${city}&units=metric`)
        .then((response) => {
          console.log(response.data);
          setDatesWeather(response.data);
        })
        .catch((error) => {
          setLoading(true);
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWeather(cityName);
  }, []);

  return { datesWeather, loading };
}
