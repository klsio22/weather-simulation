import { createContext, ReactNode, useContext, useMemo } from 'react';
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

  const value = useMemo(() => ({ cityName, getCityName }), [cityName, getCityName]);

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
};
