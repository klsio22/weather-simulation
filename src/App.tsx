import clsx from 'clsx';
import { BrowserRouter } from 'react-router-dom';
import { SwitchButton } from './components/SwitchButton';
import {  useActiveMode } from './context/ActiveMode';
import { CityProvider } from './context/CityContext';
import { Router } from './Router';

export default function App() {
  const { isActiveMode } = useActiveMode();

  return (
    <div
      className={clsx('flex items-center justify-center h-screen', {
        'bg-slate-800 , text-zinc-200': !isActiveMode,
      })}
    >
      <BrowserRouter>
        <div className='absolute top-2 right-2 lg:top-5'>
          <SwitchButton />
        </div>
        <CityProvider>
          <Router />
        </CityProvider>
      </BrowserRouter>
    </div>
  );
}
