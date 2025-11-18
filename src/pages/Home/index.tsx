import { useMovies } from '../../hooks/useMovies';
import PaginationButtons from '../../components/Pagination';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Info from '../../components/Info';
import Movies from '../../components/Movies';
import SearchBar from '../../components/SearchBar';
import styled from 'styled-components';
import Filters from '../../components/Filters';
import { useAtom } from 'jotai';
import { pageAtom, titleAtom } from '../../atoms/queryParamsAtom';
import DetailsModal from '../../components/DetailsModal';

const Home = () => {
  const [page] = useAtom(pageAtom);
  const [title] = useAtom(titleAtom);

  const { movies, error, isLoading, pagesAmount } = useMovies({
    title,
    page,
  });

  const showMovies = movies.length > 0 && !error;
  const showError = error && !showMovies;
  const showPagination = pagesAmount > 1;
  const showInfo = !showMovies && !isLoading && !showError;

  return (
    <HomeWrapper>
      <SearchBar />

      <Filters />

      {showPagination && <PaginationButtons pagesAmount={pagesAmount} />}

      {showError && <Error />}

      {isLoading && <Loading />}

      {showInfo && <Info />}

      {showMovies && <Movies movies={movies} />}

      <DetailsModal />
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
