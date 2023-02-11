import { createContext, ReactNode, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorege';

type CityProviderProps = {
  children: ReactNode;
};

type CityProviderContext = {
  cityName: string;
  getCityName: (name: string) => void;
};

const CityContext = createContext({} as CityProviderContext);

export function useNameCity() {
  return useContext(CityContext);
}

export const CityProvider = ({ children }: CityProviderProps) => {
  const [cityName, setCityName] = useLocalStorage<string>('Name City', '');

  function getCityName(name: string) {
    return setCityName(name);
  }

  return (
    <CityContext.Provider value={{ cityName, getCityName }}>
      {children}
    </CityContext.Provider>
  );
};
