import { BrowserRouter } from 'react-router-dom';
import { SwitchButton } from './components/SwitchButton';
import { CityProvider } from './context/CityProvider';
import { Router } from './Router';

export default function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <BrowserRouter>
        <div className='absolute top-5 '>
          <SwitchButton />
        </div>
        <Router />
      </BrowserRouter>
    </div>
  );
}
