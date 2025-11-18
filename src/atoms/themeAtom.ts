import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5733',
      light: '#ff947b',
      dark: '#d63300',
      contrastText: '#ffffff',
    },

    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
    text: {
      primary: '#213547',
      secondary: '#6a6c91ff',
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      dark: '#8b4bab',
      contrastText: '#47008F',
    },
    background: {
      default: '#242424',
      paper: '#2a2a2a',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

export const themeModeAtom = atomWithStorage<'light' | 'dark'>(
  'themeMode',
  'dark'
);

export const themeAtom = atom((get) => {
  const currentMode = get(themeModeAtom);
  return currentMode === 'light' ? lightTheme : darkTheme;
});

export const toggleThemeAtom = atom(null, (get, set) => {
  const currentMode = get(themeModeAtom);
  set(themeModeAtom, currentMode === 'light' ? 'dark' : 'light');
});
