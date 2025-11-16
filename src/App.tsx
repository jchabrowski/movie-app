import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';
import { useMovies } from './hooks/useMovies';
import Movies from './components/Movies';
import Error from './components/Error';
import Loading from './components/Loading';

const App = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState<string>('');

  const { movies, error, isLoading } = useMovies({ title: value, page });
  const showMovies = movies.length > 0 && !error;
  const showError = error && !showMovies;

  return (
    <ApplicationWrapper>
      <SearchBar value={value} setValue={setValue} />

      {showError && <Error />}

      {isLoading && <Loading />}

      {showMovies && <Movies movies={movies} />}
    </ApplicationWrapper>
  );
};

const ApplicationWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
