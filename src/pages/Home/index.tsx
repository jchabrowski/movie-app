import { useMovies } from '../../hooks/useMovies';
import PaginationButtons from '../../components/Pagination';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Info from '../../components/Info';
import Movies from '../../components/Movies';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';
import DetailsModal from '../../components/DetailsModal';
import { ViewWrapper } from '../styles';

const Home = () => {
  const { movies, isError, isLoading, pagesAmount } = useMovies();

  const showMovies = movies.length > 0 && !isError;
  const showError = isError && !showMovies;
  const showPagination = pagesAmount > 1;
  const showInfo = !showMovies && !isLoading && !showError;

  return (
    <ViewWrapper>
      <SearchBar />

      <Filters />

      {showPagination && <PaginationButtons pagesAmount={pagesAmount} />}

      {showError && <Error />}

      {isLoading && <Loading />}

      {showInfo && <Info />}

      {showMovies && <Movies movies={movies} />}

      <DetailsModal />
    </ViewWrapper>
  );
};

export default Home;
