import { useCallback, useState } from 'react';
import { useMovies } from '../../hooks/useMovies';
import PaginationButtons from '../../components/Pagination';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Info from '../../components/Info';
import Movies from '../../components/Movies';
import SearchBar from '../../components/SearchBar';
import styled from 'styled-components';
import Filters from '../../components/Filters';

const INITIAL_INPUT = '';

const Home = () => {
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
    <HomeWrapper>
      <SearchBar value={title} setTitle={setTitle} setPage={setPage} />

      <Filters />

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
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export default Home;
