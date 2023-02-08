import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNameCity } from '../context/CityProvider';
import { useApiWetherRadar } from '../data/useApiWetherRadar';

export function Home() {
  const { cityName, getCityName } = useNameCity();

  const [inputValue, setInputValue] = useState<string>('');

  const handleInput = () => {
    getCityName(inputValue);
    //console.log(cityName);
  };
  
  //console.log("input local",inputValue);
  return (
    <div>
      <h2 className='text-4xl font-medium mb-5'>Previsão do tempo</h2>

      <div className='flex items-center justify-center flex-col gap-4'>
        <div className=''>
          <input
            type='text'
            className='border border-gray-700 rounded px-6 h-12 text-center'
            placeholder='Busque por cidade'
            value={inputValue}
            onChange={(event)=> setInputValue(event.target.value)}
          />
        </div>
        <div className='bg-slate-800 py-3 px-5 text-white font-extrabold'>
          <Link to='/previsao-do-tempo'>
            <button onClick={handleInput}>Procurar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
