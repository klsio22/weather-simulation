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
    icon: string;
    description: string;
  }[];
};

export function AllDates({
  name,
  main: { temp, temp_max, temp_min, humidity },
  sys: { country, sunrise, sunset },
  weather: [{ description, icon }],
}: AllDatesProps) {
  const dateCurrent = new Date();
  const minimumTemperature = Math.round(temp_min);
  const maximumTemperature = Math.round(temp_max);
  const currencyTemperature = Math.round(temp);

  const sunriseTime = formatHour(sunrise);
  const sunsetTime = formatHour(sunset);
  const formattedDateCurrent = formattedDate(dateCurrent);

  return (
    <div className=' lg:w-1/2'>
      <div className='flex flex-col gap-5 px-6'>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl font-medium'>
            {name}, {country}
          </h3>
          <span className='text-zinc-700 normal-case'>
            {formattedDateCurrent}
          </span>
        </div>

        <div className='flex items-center gap-10 justify-center'>
          <div className='flex flex-col items-center'>
            <span className='text-sm'>Minima</span>
            <span className='text-2xl'>{minimumTemperature}°C</span>
          </div>

          <div className='flex flex-col items-center text-4xl font-semibold'>
            <div className='w-32 h-32'>
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={`${description}`}
                className='w-32'
              />
            </div>

            <p className='text-4xl font-semibold'>{currencyTemperature}°C</p>
            <span className='text-3xl font-medium capitalize text-center'>
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

      <div className='flex justify-center flex-col items-center m-auto lg:w-1/2'>
        <div className='w-full grid grid-cols-2 gap-x-8 gap-y-1 border'>
          <span className='text-end'>Umidade</span>
          <span>{humidity}%</span>
          <span className='text-end'>Nascer do Sol</span>
          <span>{sunriseTime}</span>
          <span className='text-end'>Por do sol</span>
          <span>{sunsetTime}</span>
        </div>

        <ButtonBack />
      </div>
    </div>
  );
}
