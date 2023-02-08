import { AllDates } from '../components/AllDates';

import { NotFound } from '../components/NotFound';
import { Search } from '../components/Search';
import { useApiWetherRadar } from '../data/useApiWetherRadar';

export function WeatherRadar() {
  const { loading, error, datesWeather } = useApiWetherRadar();

  if (loading) return <Search />;

  if (error) return <NotFound />;

  return <AllDates {...datesWeather} />;
}
