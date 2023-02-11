import ReactLoading from 'react-loading';
import { useNameCity } from '../context/CityContext';
import { useApiWetherRadar } from '../data/useApiWetherRadar';

export function SearchCity() {
  const { cityName } = useNameCity();
  const { datesWeather } = useApiWetherRadar();
  const country = datesWeather.sys.country;

  let empty = false, countryUF;

  if (cityName === '') empty = true;
  country === '' ? (countryUF = 'UF') : (countryUF = country);

  return (
    <div className='flex flex-col gap-8 items-center'>
      <div className='border-2 border-zinc-700 rounded text-center px-16 py-1  m-4 text-xl capitalize'>
        {empty ? (
          <span>Cidade, UF</span>
        ) : (
          <span>
            {cityName}, {countryUF}
          </span>
        )}
      </div>
      <div>
        <ReactLoading
          type={'spokes'}
          color={'#00000'}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
