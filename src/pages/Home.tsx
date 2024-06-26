import clsx from 'clsx';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useActiveMode } from '../context/ActiveMode';
import { useNameCity } from '../context/CityContext';

export function Home() {
  const { getCityName } = useNameCity();
  const [inputValue, setInputValue] = useState<string>('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isActiveMode } = useActiveMode();

  let empty = false;

  if (inputValue == '') empty = true;

  const handleInput = () => {
    getCityName(inputValue);

  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  };

  return (
    <div className={clsx({ 'text-zinc-300': !isActiveMode })}>
      <h2 className='text-4xl font-medium mb-5'>Previsão do tempo</h2>

      <div className='flex items-center justify-center flex-col gap-4'>
        <div className=''>
          <input
            type='text'
            className='border border-gray-700 rounded px-6 h-12 text-center text-stone-800 focus:outline-none focus:ring focus:ring-slate-400'
            placeholder='Busque por cidade'
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <Link to={`/previsao-do-tempo?city=${inputValue}`}>
          <button
            ref={buttonRef}
            onClick={handleInput}
            className={clsx(
              'bg-slate-800 py-3 px-5 text-white font-extrabold rounded',
              {
                'cursor-not-allowed': empty,
                'bg-slate-50 , text-stone-800': !isActiveMode,
              }
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
