import { createContext, ReactNode, useContext, useState } from 'react';

type ActiveModeProviderProps = {
  children: ReactNode;
};

type ActiveModeProviderContext = {
  activeDark: () => void;
  activeLight: () => void;
  isActiveMode: boolean;
};

const ActiveContext = createContext({} as ActiveModeProviderContext);

export function useActiveMode() {
  return useContext(ActiveContext);
}

export const ActiveModeProvider = ({ children }: ActiveModeProviderProps) => {
  const [isActiveLight, setIsActiveLight] = useState<boolean>(true);

  const activeDark = () => setIsActiveLight(false);
  const activeLight = () => setIsActiveLight(true);
  const isActiveMode = isActiveLight;

  return (
    <ActiveContext.Provider value={{ activeDark, activeLight, isActiveMode }}>
      {children}
    </ActiveContext.Provider>
  );
};
