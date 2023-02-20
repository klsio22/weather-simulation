import { AllDates } from '../components/AllDates';

import { NotFound } from '../components/NotFound';
import { SearchCity } from '../components/SearchCity';
import { useApiWetherRadar } from '../data/useApiWetherRadar';

export function WeatherRadar() {
  const { loading, error, datesWeather } = useApiWetherRadar();

  if (loading) return <SearchCity />;

  if (error) return <NotFound />;

  return <AllDates {...datesWeather} />;
}
