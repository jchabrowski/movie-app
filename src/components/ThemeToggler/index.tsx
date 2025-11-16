import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type Props = {
  onClick: () => void;
};

const ThemeToggler = ({ onClick }: Props) => {
  return (
    <IconButton
      onClick={onClick}
      color='secondary'
      aria-label='toggle darkmode'
    >
      <DarkModeIcon />
    </IconButton>
  );
};

export default ThemeToggler;
