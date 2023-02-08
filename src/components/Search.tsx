import { useState } from 'react';
import ReactLoading from 'react-loading';
import { useNameCity } from '../context/CityProvider';
import { useApiWetherRadar } from '../data/useApiWetherRadar';

export function Search() {
  const { cityName } = useNameCity();
  const { datesWeather } = useApiWetherRadar();
  
  let empty = false;
  if (cityName == '') empty = true;

  return (
    <div className='flex flex-col gap-8 items-center'>
      <div className='border-2 border-zinc-700 rounded text-center px-16 py-1  m-4 text-xl'>
        {empty ? (
          <span>Cidade, UF</span>
        ) : (
          <span>
            {cityName}, {datesWeather?.sys.country}
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
