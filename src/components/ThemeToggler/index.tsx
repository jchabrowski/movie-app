import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useAtom } from 'jotai';

import { toggleThemeAtom } from '../../atoms/themeAtom';

const ThemeToggler = () => {
  const [, toggleTheme] = useAtom(toggleThemeAtom);

  return (
    <IconButton
      onClick={toggleTheme}
      color='secondary'
      aria-label='toggle darkmode'
    >
      <DarkModeIcon />
    </IconButton>
  );
};

export default ThemeToggler;
