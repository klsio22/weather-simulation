import { CloudSun } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../components/Search';
import { useApiWetherRadar } from '../data/useApiWetherRadar';

type infoWeather = {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  sunrise: number;
  sunset: number;
};

export function WeatherRadar() {
  const [time, setData] = useState(true);
  const dateCurrent = new Date();
  const {datesWeather}= useApiWetherRadar()


  setTimeout(() => {
    setData(false);
  }, 1000);

  if (time) return <Search />;

  console.log(datesWeather)

  return (
    <div className='w-1/2'>
      <div className='px-6'>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl font-medium'>Cidade, UF</h3>
          <span className='text-zinc-700'>{dateCurrent.toDateString()}</span>
        </div>

        <div className='flex items-center gap-10 justify-center'>
          <div className='flex flex-col items-center'>
            <span className='text-sm'>Minima</span>
            <span className='text-2xl'>21 °C</span>
          </div>

          <div className='flex flex-col items-center text-4xl font-semibold'>
            <CloudSun size={120} />
            <p className='text-4xl font-semibold'>28 °C</p>
            <span className='text-3xl font-medium'>Parcialmente Nublado</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-sm'>Maxima</span>
            <span className='text-2xl'>28 °C</span>
          </div>
        </div>
      </div>

      <hr className='border my-8' />

      <div className='flex justify-center '>
        <div className='grid grid-cols-2 gap-2 w-[35%] ml-20'>
          <span>Umidade</span>
          <span>20%</span>
          <span>Nascer do Sol</span>
          <span>6:30</span>
          <span>Por do sol</span>
          <span>20:10</span>
        </div>
      </div>

      <div className='text-center mt-5 text-white font-medium text-lg'>
        <Link to={'/'}>
          <button className='border rounded border-zinc-600 p-2 bg-slate-500 '>
            Fazer mais consultas
          </button>
        </Link>
      </div>
    </div>
  );
}
