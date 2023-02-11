import { BrowserRouter } from 'react-router-dom';
import { SwitchButton } from './components/SwitchButton';
import { ActiveModeProvider } from './context/ActiveMode';
import { CityProvider } from './context/CityContext';
import { Router } from './Router';

export default function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <BrowserRouter>
        <ActiveModeProvider>
          <div className='absolute top-2 right-2 lg:top-5'>
            <SwitchButton />
          </div>
          <CityProvider>
            <Router />
          </CityProvider>
        </ActiveModeProvider>
      </BrowserRouter>
    </div>
  );
}
