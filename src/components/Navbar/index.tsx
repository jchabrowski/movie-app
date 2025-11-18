import styled from 'styled-components';
import ThemeToggler from './ThemeToggler';

import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar = () => {
  const location = useLocation();

  return (
    <StyledWrapper>
      <Button
        color={location.pathname === '/' ? 'primary' : 'inherit'}
        component={Link}
        to='/'
        variant={location.pathname === '/' ? 'contained' : 'text'}
      >
        Homepage
      </Button>

      <Button
        color={location.pathname === '/favourites' ? 'primary' : 'inherit'}
        component={Link}
        to='/favourites'
        variant={location.pathname === '/favourites' ? 'contained' : 'text'}
      >
        Favourites
      </Button>

      <ThemeToggler />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
`;

export default Navbar;
