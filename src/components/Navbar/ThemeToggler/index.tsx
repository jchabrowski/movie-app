import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useAtom } from 'jotai';

import { themeModeAtom, toggleThemeAtom } from '../../../atoms/themeAtom';

const ThemeToggler = () => {
  const [, toggleTheme] = useAtom(toggleThemeAtom);
  const [mode] = useAtom(themeModeAtom);

  return (
    <IconButton
      onClick={toggleTheme}
      color='primary'
      aria-label='toggle darkmode'
    >
      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggler;
