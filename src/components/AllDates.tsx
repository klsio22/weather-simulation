import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CloudSun } from 'phosphor-react';
import { formatHour } from '../utilities/formatHour';
import { formattedDate } from '../utilities/formattedDate';
import { ButtonBack } from './ButtonBack';

type AllDatesProps = {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
    country: string;
  };
  weather: {
    description: string;
  }[];
};

export function AllDates({
  name,
  main: { temp, temp_max, temp_min, humidity },
  sys: { country, sunrise, sunset },
  weather: [{ description }],
}: AllDatesProps) {
  const dateCurrent = new Date();
  const minimumTemperature = Math.round(temp_min);
  const maximumTemperature = Math.round(temp_max);
  const currencyTemperature = Math.round(temp);

  const sunriseTime = formatHour(sunrise);

  const sunsetTime = formatHour(sunset);

  const formattedDateCurrent = formattedDate(dateCurrent)
  
  return (
    <div className='w-1/2'>
      <div className='px-6'>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl font-medium'>
            {name}, {country}
          </h3>
          <span className='text-zinc-700 normal-case'>{formattedDateCurrent}</span>
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
              {description}
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
