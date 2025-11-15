import { useState } from 'react';
import './App.css';
import MovieTile from './components/MovieTile';
import SearchBar from './components/SearchBar';
import { useGetDebouncedMovies } from './hooks/useGetDebouncedMovies';
import styled from 'styled-components';

const App = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState<string>('beter');

  const { movies, error } = useGetDebouncedMovies({ title: value, page });
  const foundMovies = !error && movies.length > 0;

  console.log({ movies });
  return (
    <ApplicationWrapper>
      <SearchBar value={value} setValue={setValue} />

      {/* TODO ADD LOADING */}

      {error && !foundMovies && <p>{error}</p>}

      {foundMovies &&
        movies.map((el) => {
          return (
            <MovieTile
              key={el.Title}
              Title={el.Title}
              Poster={el.Poster}
              Year={el.Year}
              Type={el.Type}
            />
          );
        })}
    </ApplicationWrapper>
  );
};

// const MOVIE_ARR = Array.from({ length: 9 }).fill({
//   name: 'Interstellar',
//   year: 2024,
//   poster:
//     'https://m.media-amazon.com/images/M/MV5BZWMzZDUzZmQtM2VjMy00YTMzLWE5YTktZmIzMTljNDc3MWQ1XkEyXkFqcGc@._V1_SX300.jpg',

//   plot: 'A corrupt police detective has a painful moral awakening and decides to put right 20 years of wrongdoing.',
//   genre: 'Thriller / Drama',
//   imdbRating: '6.5',
// }) as MovieProps[];

const ApplicationWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
