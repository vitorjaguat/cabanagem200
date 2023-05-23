import { createContext } from 'react';

export const ThemeContext = createContext({
  toggleDarkMode: () => {},
  darkMode: false,
});
