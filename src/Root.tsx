import styled from 'styled-components';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useAtom } from 'jotai';
import { themeAtom } from './atoms/themeAtom';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApplicationWrapper>
        <Navbar />

        <Outlet />
      </ApplicationWrapper>
    </ThemeProvider>
  );
};

const ApplicationWrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export default Root;
