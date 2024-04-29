import React, { createContext, useContext, useState, useEffect } from 'react';

const localStorageKey = 'altBackground';
const defaultValue = localStorage.getItem(localStorageKey) === "true" || false;

interface BackgroundToggleValue {
  altBackground: boolean;
  setAltBackground: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackgroundToggleContext = createContext<BackgroundToggleValue>({
  altBackground: defaultValue,
  setAltBackground: () => {},
});

interface BackgroundTogggleProviderProps {
  children: React.ReactNode;
}

export const BackgroundToggleProvider = ({ children }: BackgroundTogggleProviderProps) => {
  const [altBackground, setAltBackground] = useState(false);

  useEffect(() => {
    localStorage.setItem(localStorageKey, altBackground.toString());
  }, [altBackground]);

  return (
    <BackgroundToggleContext.Provider value={{ altBackground, setAltBackground }}>
      {children}
    </BackgroundToggleContext.Provider>
  );
};

export const useBackgroundToggle = () => {
  return useContext(BackgroundToggleContext);
};