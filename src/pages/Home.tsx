import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNameCity } from '../context/CityProvider';

export function Home() {
  const { getCityName } = useNameCity();
  const [inputValue, setInputValue] = useState<string>('');
  let empty = false;

  if (inputValue == '') empty = true;

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
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>

        <Link className='' to='/previsao-do-tempo'>
          <button
            onClick={handleInput}
            className={clsx(
              'bg-slate-800 py-3 px-5 text-white font-extrabold rounded',
              { 'cursor-not-allowed': empty }
            )}
            disabled={empty}
          >
            Procurar
          </button>
        </Link>
      </div>
    </div>
  );
}
