import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Router } from './Router';

export default function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
