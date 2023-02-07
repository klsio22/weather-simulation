import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CloudSun } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { ButtonBack } from '../components/ButtonBack';
import { NotFound } from '../components/NotFound';
import { Search } from '../components/Search';
import { useApiWetherRadar } from '../data/useApiWetherRadar';

export function WeatherRadar() {

  const navigate = useNavigate();

  const { datesWeather, loading, error } = useApiWetherRadar();
  const dateCurrent = new Date();
  const minimumTemperature = Number(datesWeather?.main.temp_min).toFixed(0);
  const maximumTemperature = Number(datesWeather?.main.temp_max).toFixed(0);
  const currencyTemperature = Number(datesWeather?.main.temp).toFixed(0);
  const humidity = datesWeather?.main.humidity;

  const sunriseTime = new Date(
    Number(datesWeather?.sys.sunrise) * 1000
  ).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const sunsetTime = new Date(
    Number(datesWeather?.sys.sunset) * 1000
  ).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const weatherDescription = datesWeather?.weather[0].description;

  const formattedDate = format(dateCurrent, "iiii, dd 'de' MMMM 'de' yyyy ", {
    locale: ptBR,
  });

  if (loading) return <Search />;
  
  if (error) return <NotFound />;


    navigate({ pathname: './some/path' })


  return (
    <div className='w-1/2'>
      <div className='px-6'>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl font-medium'>
            {datesWeather?.name}, {datesWeather?.sys.country}
          </h3>
          <span className='text-zinc-700 normal-case'>{formattedDate}</span>
        </div>

        <div className='flex items-center gap-10 justify-center'>
          <div className='flex flex-col items-center'>
            <span className='text-sm'>Minima</span>
            <span className='text-2xl'>{minimumTemperature}°C</span>
          </div>

          <div className='flex flex-col items-center text-4xl font-semibold'>
            <CloudSun size={120} />
            <p className='text-4xl font-semibold'>{currencyTemperature}°C</p>
            <span className='text-3xl font-medium capitalize'>
              {weatherDescription}
            </span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-sm'>Maxima</span>
            <span className='text-2xl'>{maximumTemperature}°C</span>
          </div>
        </div>
      </div>

      <hr className='border my-8' />

      <div className='flex justify-center '>
        <div className='grid grid-cols-2 gap-2 w-[35%] ml-20'>
          <span>Umidade</span>
          <span>{humidity}%</span>
          <span>Nascer do Sol</span>
          <span>{sunriseTime}</span>
          <span>Por do sol</span>
          <span>{sunsetTime}</span>
        </div>
      </div>

      <ButtonBack />
    </div>
  );
}
