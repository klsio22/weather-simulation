import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { WeatherRadar } from './pages/WeatherRadar';

import { CityProvider } from './context/CityProvider';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/previsao-do-tempo' element={<WeatherRadar />} />
    </Routes>
  );
}
