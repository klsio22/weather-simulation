import clsx from 'clsx';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SwitchButton } from '../components/SwitchButton';
import { useNameCity } from '../context/CityProvider';

export function Home() {
  const { getCityName } = useNameCity();
  const [inputValue, setInputValue] = useState<string>('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  let empty = false;

  if (inputValue == '') empty = true;

  const handleInput = () => {
    getCityName(inputValue);
    //console.log(cityName);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
      // console.log('Enter was pressed');
    }
  };

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
            onKeyDown={handleKeyDown}
          />
        </div>

        <Link to='/previsao-do-tempo'>
          <button
            ref={buttonRef}
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
