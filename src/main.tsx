import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CityProvider } from './context/CityProvider';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CityProvider>
    <App />
  </CityProvider>
);
