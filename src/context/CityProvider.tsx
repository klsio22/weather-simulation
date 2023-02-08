import React, { createContext, ReactNode, useContext, useState } from 'react';

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
  const [cityName, setCityName] = useState<string>('');

  function getCityName(name: string) {
    return setCityName(name);
  }

  return (
    <CityContext.Provider value={{ cityName, getCityName }}>
      {children}
    </CityContext.Provider>
  );
};
