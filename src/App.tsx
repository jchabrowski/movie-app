import { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';
import { useMovies } from './hooks/useMovies';
import Movies from './components/Movies';
import Error from './components/Error';
import Loading from './components/Loading';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';

import PaginationButtons from './components/Pagination';
import ThemeToggler from './components/ThemeToggler';
import Info from './components/Info';

const INITIAL_INPUT = '';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState<string>(INITIAL_INPUT);

  const { movies, error, isLoading, pagesAmount } = useMovies({
    title,
    page,
  });

  const showMovies = movies.length > 0 && !error;
  const showError = error && !showMovies;
  const showPagination = pagesAmount > 1;
  const showInfo = !showMovies && !isLoading && !showError;

  const handlePageChange = useCallback(
    (newPage: number) => setPage(newPage),
    []
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />

      <ApplicationWrapper>
        <ThemeToggler onClick={() => setIsDarkMode((prev) => !prev)} />

        <SearchBar value={title} setTitle={setTitle} setPage={setPage} />

        {showPagination && (
          <PaginationButtons
            pagesAmount={pagesAmount}
            page={page}
            onPageChange={handlePageChange}
          />
        )}

        {showError && <Error />}

        {isLoading && <Loading />}

        {showInfo && <Info />}

        {showMovies && <Movies movies={movies} />}
      </ApplicationWrapper>
    </ThemeProvider>
  );
};

const ApplicationWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
