import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ActiveModeProvider } from './context/ActiveMode';
import { CityProvider } from './context/CityContext';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ActiveModeProvider>
    <App />
  </ActiveModeProvider>
);
